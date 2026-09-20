"use client"

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
  type ReactNode,
} from "react"
import { getSupabaseBrowserClient } from "@/lib/supabase"
import { isSkipDb } from "@/lib/skip-db"
import {
  completeLocalActivity,
  completeLocalActivityItem,
  createLocalActivity,
  findLocalActivityItem,
  hasLocalPageCompletion,
  insertLocalActivityItem,
  insertLocalPageCompletion,
  loadLocalActivityStore,
  pageCompletionsMapFromStore,
  resetLocalActivityStore,
} from "@/lib/local-activity-store"
import type { Activity, ActivityItem, PageCompletion } from "@/types/database"
import { useRouter, usePathname } from "next/navigation"

interface ActivityContextType {
  currentActivity: Activity | null
  currentSessionId: string | null
  isLoading: boolean
  startActivity: () => Promise<Activity | null>
  completeActivity: () => Promise<void>
  startActivityItem: (pageSlug: string, itemType: string, itemName: string) => Promise<ActivityItem | null>
  completeActivityItem: (itemId: number, score?: number, data?: any) => Promise<void>
  checkPageCompletion: (pageSlug: string) => Promise<boolean>
  markPageAsCompleted: (pageSlug: string) => Promise<void>
  isPageCompleted: (pageSlug: string) => boolean
  pageCompletions: Record<string, boolean>
  activityItems: ActivityItem[]
  markAllActivitiesCompleted: (pageSlug: string) => Promise<void>
  checkAndCompleteEntireActivity: () => Promise<void>
}

const ActivityContext = createContext<ActivityContextType | undefined>(undefined)

export const ActivityProvider = ({ children }: { children: ReactNode }) => {
  const [currentActivity, setCurrentActivity] = useState<Activity | null>(null)
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null)
  const [activityItems, setActivityItems] = useState<ActivityItem[]>([])
  const [pageCompletions, setPageCompletions] = useState<Record<string, boolean>>({})
  const [isLoading, setIsLoading] = useState(true)
  const [pendingItems, setPendingItems] = useState<Set<string>>(new Set())
  /** Same tick + Strict Mode: React state pending set is async — dedupe in-flight starts here. */
  const startActivityItemInflightRef = useRef<Map<string, Promise<ActivityItem | null>>>(new Map())
  const skipDb = isSkipDb()
  const supabase = skipDb ? null : getSupabaseBrowserClient()
  const router = useRouter()
  const pathname = usePathname()

  // Define expected activities for each page based on actual item_names
  const getExpectedActivities = useCallback((pageSlug: string): string[] => {
    const activityMap: Record<string, string[]> = {
      home: ["initial-quiz"],
      "fruit-vegetables": ["fruit-vegetables-intro", "guess-colors", "supermarket-shopper", "mental-workout"],
      grains: ["grains-intro", "drag-drop", "supermarket-shopper", "mental-workout"],
      milk: ["milk-intro", "drag-drop", "supermarket-shopper", "mental-workout"],
      protein: ["protein-intro", "drag-drop", "supermarket-shopper", "mental-workout"],
      foodtopia: ["meal-madness", "food-group-sorter", "sugar-sorter", "sugar-detective", "final-challenge"],
    }
    return activityMap[pageSlug] || []
  }, [])

  // Get all expected pages for the entire activity
  const getAllExpectedPages = useCallback((): string[] => {
    return ["home", "fruit-vegetables", "grains", "milk", "protein", "foodtopia"]
  }, [])

  // Check if all pages are completed and mark the entire activity as complete
  const checkAndCompleteEntireActivity = useCallback(async (): Promise<void> => {
    if (!currentActivity || currentActivity.is_completed) return

    try {
      console.log("Checking if entire activity should be completed...")

      const allExpectedPages = getAllExpectedPages()
      console.log("All expected pages:", allExpectedPages)

      // Check if all pages are completed
      const allPagesCompleted = allExpectedPages.every((pageSlug) => pageCompletions[pageSlug])
      console.log("All pages completed:", allPagesCompleted)
      console.log("Current page completions:", pageCompletions)

      if (allPagesCompleted) {
        console.log("All pages completed! Marking entire activity as complete...")

        if (skipDb) {
          const completed = completeLocalActivity(currentActivity.id)
          if (completed) setCurrentActivity(completed)
          return
        }

        const { error } = await supabase!
          .from("activities")
          .update({
            completed_at: new Date().toISOString(),
            is_completed: true,
          })
          .eq("id", currentActivity.id)

        if (error) {
          console.error("Error completing entire activity:", error)
          return
        }

        // Update local state
        setCurrentActivity({
          ...currentActivity,
          completed_at: new Date().toISOString(),
          is_completed: true,
        })

        console.log("Successfully marked entire activity as complete!")
      } else {
        console.log(
          "Not all pages completed yet. Missing pages:",
          allExpectedPages.filter((page) => !pageCompletions[page]),
        )
      }
    } catch (error) {
      console.error("Error in checkAndCompleteEntireActivity:", error)
    }
  }, [currentActivity, pageCompletions, getAllExpectedPages, supabase, skipDb])

  // Start a new activity session with anonymous authentication
  const startActivity = useCallback(async (): Promise<Activity | null> => {
    try {
      if (skipDb) {
        const activity = createLocalActivity()
        setCurrentActivity(activity)
        setCurrentSessionId(activity.session_id)
        return activity
      }

      // Sign in anonymously first
      const { data: authData, error: authError } = await supabase!.auth.signInAnonymously()

      if (authError) {
        console.error("Error signing in anonymously:", authError)
        return null
      }

      console.log("Signed in anonymously:", authData.user?.id)

      // Now create the activity record
      const { data, error } = await supabase!
        .from("activities")
        .insert({
          user_id: authData.user.id,
        })
        .select()
        .single()

      if (error) {
        console.error("Error starting activity:", error)
        return null
      }

      setCurrentActivity(data)
      setCurrentSessionId(authData.user.id) // Use the user ID as session ID

      // Store the user ID in sessionStorage
      sessionStorage.setItem("currentSessionId", authData.user.id)

      return data
    } catch (error) {
      console.error("Error in startActivity:", error)
      return null
    }
  }, [supabase, skipDb])

  // Complete the current activity (manual completion)
  const completeActivity = useCallback(async (): Promise<void> => {
    if (!currentActivity) return

    try {
      if (skipDb) {
        const completed = completeLocalActivity(currentActivity.id)
        if (completed) setCurrentActivity(completed)
        return
      }

      const { error } = await supabase!
        .from("activities")
        .update({
          completed_at: new Date().toISOString(),
          is_completed: true,
        })
        .eq("id", currentActivity.id)

      if (error) {
        console.error("Error completing activity:", error)
        return
      }

      setCurrentActivity({
        ...currentActivity,
        completed_at: new Date().toISOString(),
        is_completed: true,
      })
    } catch (error) {
      console.error("Error in completeActivity:", error)
    }
  }, [currentActivity, supabase, skipDb])

  // Mark all activities as completed for a specific page
  const markAllActivitiesCompleted = useCallback(
    async (pageSlug: string): Promise<void> => {
      if (!currentActivity) return

      try {
        console.log(`Checking completion for page: ${pageSlug}`)

        // Get all activity items for this page
        const pageItems = activityItems.filter(
          (item) => item.activity_id === currentActivity.id && item.page_slug === pageSlug,
        )

        console.log(`Found ${pageItems.length} items for page ${pageSlug}:`, pageItems)

        // Separate page visits from actual activities
        const pageVisitItems = pageItems.filter((item) => item.item_type === "page-visit")
        const actualActivityItems = pageItems.filter((item) => item.item_type !== "page-visit")

        console.log(`Page visit items:`, pageVisitItems)
        console.log(`Actual activity items:`, actualActivityItems)

        // Get expected activities for this page
        const expectedActivities = getExpectedActivities(pageSlug)
        console.log(`Expected activities for ${pageSlug}:`, expectedActivities)

        // Check if we have all expected activities by item_name
        const hasAllExpectedActivities = expectedActivities.every((expectedName) =>
          actualActivityItems.some((item) => item.item_name === expectedName),
        )

        console.log(`Has all expected activities: ${hasAllExpectedActivities}`)

        // Check if all actual activities are completed
        const allActivitiesCompleted =
          actualActivityItems.length > 0 &&
          hasAllExpectedActivities &&
          actualActivityItems.every((item) => item.is_completed)

        console.log(`All activities completed: ${allActivitiesCompleted}`)

        if (allActivitiesCompleted) {
          console.log(`Marking page ${pageSlug} as completed`)

          // Mark page visit items as completed
          for (const pageVisitItem of pageVisitItems) {
            if (!pageVisitItem.is_completed) {
              console.log(`Completing page visit item ${pageVisitItem.id}`)
              if (skipDb) {
                completeLocalActivityItem(pageVisitItem.id)
                setActivityItems((prev) =>
                  prev.map((item) =>
                    item.id === pageVisitItem.id
                      ? {
                          ...item,
                          completed_at: new Date().toISOString(),
                          is_completed: true,
                        }
                      : item,
                  ),
                )
                continue
              }

              const { error } = await supabase!
                .from("activity_items")
                .update({
                  completed_at: new Date().toISOString(),
                  is_completed: true,
                })
                .eq("id", pageVisitItem.id)

              if (!error) {
                // Update local state
                setActivityItems((prev) =>
                  prev.map((item) =>
                    item.id === pageVisitItem.id
                      ? {
                          ...item,
                          completed_at: new Date().toISOString(),
                          is_completed: true,
                        }
                      : item,
                  ),
                )
                console.log(`Successfully completed page visit item ${pageVisitItem.id}`)
              } else {
                console.error(`Error completing page visit item ${pageVisitItem.id}:`, error)
              }
            }
          }

          if (skipDb) {
            if (!hasLocalPageCompletion(currentActivity.id, pageSlug)) {
              insertLocalPageCompletion(currentActivity.id, pageSlug)
              setPageCompletions((prev) => {
                const newCompletions = {
                  ...prev,
                  [pageSlug]: true,
                }
                setTimeout(() => {
                  checkAndCompleteEntireActivity()
                }, 100)
                return newCompletions
              })
            }
            return
          }

          // Mark the page as completed in page_completions table
          const { data, error } = await supabase!
            .from("page_completions")
            .select("*")
            .eq("activity_id", currentActivity.id)
            .eq("page_slug", pageSlug)
            .single()

          if (error && error.code === "PGRST116") {
            // No record found, create one
            console.log(`Creating page completion record for ${pageSlug}`)
            const { error: insertError } = await supabase!.from("page_completions").insert({
              activity_id: currentActivity.id,
              page_slug: pageSlug,
            })

            if (!insertError) {
              setPageCompletions((prev) => {
                const newCompletions = {
                  ...prev,
                  [pageSlug]: true,
                }

                // Check if this page completion triggers the entire activity completion
                // We'll do this in a separate effect to avoid state update issues
                setTimeout(() => {
                  checkAndCompleteEntireActivity()
                }, 100)

                return newCompletions
              })
              console.log(`Successfully created page completion record for ${pageSlug}`)
            } else {
              console.error(`Error creating page completion record for ${pageSlug}:`, insertError)
            }
          } else if (!error) {
            console.log(`Page completion record already exists for ${pageSlug}`)
          }
        } else {
          console.log(`Not all activities completed for ${pageSlug}`)
        }
      } catch (error) {
        console.error("Error in markAllActivitiesCompleted:", error)
      }
    },
    [currentActivity, activityItems, getExpectedActivities, supabase, checkAndCompleteEntireActivity, skipDb],
  )

  // Start a new activity item
  const startActivityItem = useCallback(
    async (pageSlug: string, itemType: string, itemName: string): Promise<ActivityItem | null> => {
      if (!currentActivity) return null

      const itemKey = `${currentActivity.id}-${pageSlug}-${itemType}-${itemName}`

      const inflight = startActivityItemInflightRef.current.get(itemKey)
      if (inflight) return inflight

      const run = (async (): Promise<ActivityItem | null> => {
        try {
          setPendingItems((prev) => new Set(prev).add(itemKey))

          const existingItem = activityItems.find(
            (item) =>
              item.activity_id === currentActivity.id &&
              item.page_slug === pageSlug &&
              item.item_type === itemType &&
              item.item_name === itemName,
          )

          if (existingItem) {
            setPendingItems((prev) => {
              const newSet = new Set(prev)
              newSet.delete(itemKey)
              return newSet
            })
            return existingItem
          }

          if (skipDb) {
            const existingLocal = findLocalActivityItem(currentActivity.id, pageSlug, itemType, itemName)
            const item = existingLocal ?? insertLocalActivityItem({
              activity_id: currentActivity.id,
              page_slug: pageSlug,
              item_type: itemType,
              item_name: itemName,
            })
            setActivityItems((prev) => {
              const filtered = prev.filter(
                (entry) =>
                  !(
                    entry.activity_id === item.activity_id &&
                    entry.page_slug === item.page_slug &&
                    entry.item_type === item.item_type &&
                    entry.item_name === item.item_name
                  ),
              )
              return [...filtered, item]
            })
            setPendingItems((prev) => {
              const newSet = new Set(prev)
              newSet.delete(itemKey)
              return newSet
            })
            return item
          }

          const { data: dbExistingItems } = await supabase!
            .from("activity_items")
            .select("*")
            .eq("activity_id", currentActivity.id)
            .eq("page_slug", pageSlug)
            .eq("item_type", itemType)
            .eq("item_name", itemName)

          if (dbExistingItems && dbExistingItems.length > 0) {
            const existingDbItem = dbExistingItems[0]
            setActivityItems((prev) => {
              const filtered = prev.filter(
                (item) =>
                  !(
                    item.activity_id === existingDbItem.activity_id &&
                    item.page_slug === existingDbItem.page_slug &&
                    item.item_type === existingDbItem.item_type &&
                    item.item_name === existingDbItem.item_name
                  ),
              )
              return [...filtered, existingDbItem]
            })

            setPendingItems((prev) => {
              const newSet = new Set(prev)
              newSet.delete(itemKey)
              return newSet
            })
            return existingDbItem
          }

          const newItem = {
            activity_id: currentActivity.id,
            page_slug: pageSlug,
            item_type: itemType,
            item_name: itemName,
          }

          const { data, error } = await supabase!.from("activity_items").insert(newItem).select().single()

          if (error) {
            console.error("Error starting activity item:", error)
            setPendingItems((prev) => {
              const newSet = new Set(prev)
              newSet.delete(itemKey)
              return newSet
            })
            return null
          }

          setActivityItems((prev) => [...prev, data])

          setPendingItems((prev) => {
            const newSet = new Set(prev)
            newSet.delete(itemKey)
            return newSet
          })

          return data
        } catch (error) {
          console.error("Error in startActivityItem:", error)
          setPendingItems((prev) => {
            const newSet = new Set(prev)
            newSet.delete(itemKey)
            return newSet
          })
          return null
        }
      })()

      startActivityItemInflightRef.current.set(itemKey, run)
      void run.finally(() => {
        startActivityItemInflightRef.current.delete(itemKey)
      })

      return run
    },
    [currentActivity, activityItems, pendingItems, supabase, skipDb],
  )

  // Complete an activity item
  const completeActivityItem = useCallback(
    async (itemId: number, score?: number, data?: any): Promise<void> => {
      try {
        
        const updatePayload = {
          completed_at: new Date().toISOString(),
          is_completed: true,
          score: score || null,
          data: data || null,
        } as {
          completed_at: string;
          is_completed: boolean;
          score: number | null;
          data: any;
          how_many_students?: string | null;
          completing_activity_from?: string | null;
          school_name?: string | null;
        };
        
        // Safely assign the responses to specific columns
        if (Array.isArray(data?.responses)) {
          updatePayload.school_name = data.responses[0]?.textAnswer || null;
        }

        if (skipDb) {
          completeLocalActivityItem(itemId, score, data)
          setActivityItems((prev) =>
            prev.map((item) =>
              item.id === itemId
                ? {
                    ...item,
                    completed_at: new Date().toISOString(),
                    is_completed: true,
                    score: score || null,
                    data: data || null,
                  }
                : item,
            ),
          )
          return
        }

        const { error } = await supabase!
          .from("activity_items")
          .update(updatePayload)
          .eq("id", itemId)

        if (error) {
          console.error("Error completing activity item:", error)
          return
        }

        setActivityItems((prev) =>
          prev.map((item) =>
            item.id === itemId
              ? {
                  ...item,
                  completed_at: new Date().toISOString(),
                  is_completed: true,
                  score: score || null,
                  data: data || null,
                }
              : item,
          ),
        )

        // Don't automatically check page completion here
        // Let the page components call markAllActivitiesCompleted when appropriate
      } catch (error) {
        console.error("Error in completeActivityItem:", error)
      }
    },
    [supabase, skipDb],
  )

  // Check if a page is completed
  const checkPageCompletion = useCallback(
    async (pageSlug: string): Promise<boolean> => {
      if (!currentActivity) return false

      try {
        if (skipDb) {
          return hasLocalPageCompletion(currentActivity.id, pageSlug)
        }

        const { data, error } = await supabase!
          .from("page_completions")
          .select("*")
          .eq("activity_id", currentActivity.id)
          .eq("page_slug", pageSlug)
          .single()

        if (error) {
          if (error.code === "PGRST116") {
            // No record found, page not completed
            return false
          }
          console.error("Error checking page completion:", error)
          return false
        }

        return !!data
      } catch (error) {
        console.error("Error in checkPageCompletion:", error)
        return false
      }
    },
    [currentActivity, supabase, skipDb],
  )

  // Mark a page as completed
  const markPageAsCompleted = useCallback(
    async (pageSlug: string): Promise<void> => {
      if (!currentActivity) return

      try {
        // Check if already completed to avoid duplicates
        const isAlreadyCompleted = await checkPageCompletion(pageSlug)
        if (isAlreadyCompleted) return

        if (skipDb) {
          insertLocalPageCompletion(currentActivity.id, pageSlug)
          setPageCompletions((prev) => ({
            ...prev,
            [pageSlug]: true,
          }))
          return
        }

        const { error } = await supabase!.from("page_completions").insert({
          activity_id: currentActivity.id,
          page_slug: pageSlug,
        })

        if (error) {
          console.error("Error marking page as completed:", error)
          return
        }

        setPageCompletions((prev) => ({
          ...prev,
          [pageSlug]: true,
        }))
      } catch (error) {
        console.error("Error in markPageAsCompleted:", error)
      }
    },
    [currentActivity, checkPageCompletion, supabase, skipDb],
  )

  // Check if a page is completed (from local state)
  const isPageCompleted = useCallback(
    (pageSlug: string): boolean => {
      return pageCompletions[pageSlug] || false
    },
    [pageCompletions],
  )

  // Effect to check for entire activity completion when page completions change
  useEffect(() => {
    if (currentActivity && !currentActivity.is_completed) {
      checkAndCompleteEntireActivity()
    }
  }, [pageCompletions, currentActivity, checkAndCompleteEntireActivity])

  // Load activity data on initial render
  useEffect(() => {
    const loadActivityData = async () => {
      setIsLoading(true)

      if (skipDb) {
        console.info("[skip-db] Skipping Supabase; activity state is stored in this browser session.")

        if (typeof window !== "undefined") {
          const path = window.location.pathname
          const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined
          if (path === "/" && nav?.type === "reload") {
            resetLocalActivityStore()
            setCurrentActivity(null)
            setCurrentSessionId(null)
            setActivityItems([])
            setPageCompletions({})
          }
        }

        const stored = loadLocalActivityStore()
        if (stored.activity) {
          setCurrentActivity(stored.activity)
          setCurrentSessionId(stored.activity.session_id)
          setActivityItems(stored.items)
          setPageCompletions(pageCompletionsMapFromStore(stored))
        } else {
          const activity = await startActivity()
          if (activity) {
            setActivityItems(loadLocalActivityStore().items)
          }
        }

        setIsLoading(false)
        return
      }

      // Hard refresh on home only: abandon current anon session and start fresh (new quiz).
      // Client-side navigation to / does not remount this provider — this block does not run.
      if (typeof window !== "undefined") {
        const path = window.location.pathname
        const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined
        if (path === "/" && nav?.type === "reload") {
          await supabase!.auth.signOut()
          sessionStorage.removeItem("currentSessionId")
          setCurrentActivity(null)
          setCurrentSessionId(null)
          setActivityItems([])
          setPageCompletions({})
        }
      }

      // Check if user is already authenticated
      const {
        data: { user },
      } = await supabase!.auth.getUser()

      if (user) {
        console.log("User already authenticated:", user.id)

        // Try to load existing activity for this user using user_id field
        const { data: existingActivity } = await supabase!
          .from("activities")
          .select("*")
          .eq("user_id", user.id) // Use user_id field instead of session_id
          .single()

        if (existingActivity) {
          setCurrentActivity(existingActivity)
          setCurrentSessionId(user.id) // Use user.id as session ID

          // Load activity items and page completions...
          const { data: items } = await supabase!
            .from("activity_items")
            .select("*")
            .eq("activity_id", existingActivity.id)

          if (items) {
            setActivityItems(items)
          }

          const { data: completions } = await supabase!
            .from("page_completions")
            .select("*")
            .eq("activity_id", existingActivity.id)

          if (completions) {
            const completionsMap: Record<string, boolean> = {}
            completions.forEach((completion: PageCompletion) => {
              completionsMap[completion.page_slug] = true
            })
            setPageCompletions(completionsMap)
          }

          setIsLoading(false)
          return
        }
      }

      // If no authenticated user or no existing activity, start a new one
      const activity = await startActivity()

      if (activity) {
        // Load activity items (should be empty for a new activity)
        const { data: items } = await supabase!.from("activity_items").select("*").eq("activity_id", activity.id)

        if (items) {
          setActivityItems(items)
        }
      }

      setIsLoading(false)
    }

    loadActivityData()
  }, [startActivity, supabase, skipDb])

  return (
    <ActivityContext.Provider
      value={{
        currentActivity,
        currentSessionId,
        isLoading,
        startActivity,
        completeActivity,
        startActivityItem,
        completeActivityItem,
        checkPageCompletion,
        markPageAsCompleted,
        isPageCompleted,
        pageCompletions,
        activityItems,
        markAllActivitiesCompleted,
        checkAndCompleteEntireActivity,
      }}
    >
      {children}
    </ActivityContext.Provider>
  )
}

export const useActivity = () => {
  const context = useContext(ActivityContext)
  if (context === undefined) {
    throw new Error("useActivity must be used within an ActivityProvider")
  }
  return context
}
