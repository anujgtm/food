"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { getSupabaseBrowserClient } from "@/lib/supabase"
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
}

const ActivityContext = createContext<ActivityContextType | undefined>(undefined)

export const ActivityProvider = ({ children }: { children: ReactNode }) => {
  const [currentActivity, setCurrentActivity] = useState<Activity | null>(null)
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null)
  const [activityItems, setActivityItems] = useState<ActivityItem[]>([])
  const [pageCompletions, setPageCompletions] = useState<Record<string, boolean>>({})
  const [isLoading, setIsLoading] = useState(true)
  const supabase = getSupabaseBrowserClient()
  const router = useRouter()
  const pathname = usePathname()

  // Start a new activity session
  const startActivity = async (): Promise<Activity | null> => {
    try {
      const { data, error } = await supabase.from("activities").insert({}).select().single()

      if (error) {
        console.error("Error starting activity:", error)
        return null
      }

      setCurrentActivity(data)
      setCurrentSessionId(data.session_id)

      // Store the session ID in sessionStorage (not localStorage)
      sessionStorage.setItem("currentSessionId", data.session_id)

      return data
    } catch (error) {
      console.error("Error in startActivity:", error)
      return null
    }
  }

  // Complete the current activity
  const completeActivity = async (): Promise<void> => {
    if (!currentActivity) return

    try {
      const { error } = await supabase
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
  }

  // Start a new activity item
  const startActivityItem = async (
    pageSlug: string,
    itemType: string,
    itemName: string,
  ): Promise<ActivityItem | null> => {
    if (!currentActivity) return null

    try {
      // Check if an activity item with the same properties already exists
      const existingItem = activityItems.find(
        (item) =>
          item.activity_id === currentActivity.id &&
          item.page_slug === pageSlug &&
          item.item_type === itemType &&
          item.item_name === itemName,
      )

      // If an item already exists, return it without creating a new one
      if (existingItem) {
        return existingItem
      }

      // Otherwise, create a new activity item
      const { data, error } = await supabase
        .from("activity_items")
        .insert({
          activity_id: currentActivity.id,
          page_slug: pageSlug,
          item_type: itemType,
          item_name: itemName,
        })
        .select()
        .single()

      if (error) {
        console.error("Error starting activity item:", error)
        return null
      }

      setActivityItems((prev) => [...prev, data])
      return data
    } catch (error) {
      console.error("Error in startActivityItem:", error)
      return null
    }
  }

  // Complete an activity item
  const completeActivityItem = async (itemId: number, score?: number, data?: any): Promise<void> => {
    try {
      const { error } = await supabase
        .from("activity_items")
        .update({
          completed_at: new Date().toISOString(),
          is_completed: true,
          score: score || null,
          data: data || null,
        })
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

      // Check if all items for the current page are completed
      await checkAndUpdatePageCompletion()
    } catch (error) {
      console.error("Error in completeActivityItem:", error)
    }
  }

  // Check if all activities on a page are completed
  const checkAndUpdatePageCompletion = async (): Promise<void> => {
    if (!currentActivity) return

    const currentPage = pathname.split("/").pop() || "home"

    // Get all activity items for the current page
    const { data: pageItems, error } = await supabase
      .from("activity_items")
      .select("*")
      .eq("activity_id", currentActivity.id)
      .eq("page_slug", currentPage)

    if (error || !pageItems) {
      console.error("Error checking page completion:", error)
      return
    }

    // Check if all items are completed
    const allCompleted = pageItems.length > 0 && pageItems.every((item) => item.is_completed)

    if (allCompleted) {
      await markPageAsCompleted(currentPage)
    }
  }

  // Check if a page is completed
  const checkPageCompletion = async (pageSlug: string): Promise<boolean> => {
    if (!currentActivity) return false

    try {
      const { data, error } = await supabase
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
  }

  // Mark a page as completed
  const markPageAsCompleted = async (pageSlug: string): Promise<void> => {
    if (!currentActivity) return

    try {
      // Check if already completed to avoid duplicates
      const isAlreadyCompleted = await checkPageCompletion(pageSlug)
      if (isAlreadyCompleted) return

      const { error } = await supabase.from("page_completions").insert({
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
  }

  // Check if a page is completed (from local state)
  const isPageCompleted = (pageSlug: string): boolean => {
    return pageCompletions[pageSlug] || false
  }

  // Load activity data on initial render
  useEffect(() => {
    const loadActivityData = async () => {
      setIsLoading(true)

      // Check if we have a session ID in sessionStorage
      const storedSessionId = sessionStorage.getItem("currentSessionId")

      if (storedSessionId) {
        // Try to load the existing activity
        const { data: existingActivity } = await supabase
          .from("activities")
          .select("*")
          .eq("session_id", storedSessionId)
          .single()

        if (existingActivity) {
          setCurrentActivity(existingActivity)
          setCurrentSessionId(existingActivity.session_id)

          // Load activity items
          const { data: items } = await supabase
            .from("activity_items")
            .select("*")
            .eq("activity_id", existingActivity.id)

          if (items) {
            setActivityItems(items)
          }

          // Load page completions
          const { data: completions } = await supabase
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

      // If no valid session found, start a new activity
      const activity = await startActivity()

      if (activity) {
        // Load activity items (should be empty for a new activity)
        const { data: items } = await supabase.from("activity_items").select("*").eq("activity_id", activity.id)

        if (items) {
          setActivityItems(items)
        }
      }

      setIsLoading(false)
    }

    loadActivityData()
  }, [])

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
