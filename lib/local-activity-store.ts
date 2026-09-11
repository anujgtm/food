import type { Activity, ActivityItem, PageCompletion } from "@/types/database"

const STORAGE_KEY = "nutrition-quest-skip-db"
export const SKIP_DB_USER_ID = "skip-db-local-user"

type SkipDbStore = {
  activity: Activity | null
  items: ActivityItem[]
  completions: PageCompletion[]
  nextItemId: number
  nextCompletionId: number
}

function emptyStore(): SkipDbStore {
  return {
    activity: null,
    items: [],
    completions: [],
    nextItemId: 1,
    nextCompletionId: 1,
  }
}

function readStore(): SkipDbStore {
  if (typeof window === "undefined") return emptyStore()

  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return emptyStore()
    return { ...emptyStore(), ...JSON.parse(raw) }
  } catch {
    return emptyStore()
  }
}

function writeStore(store: SkipDbStore): void {
  if (typeof window === "undefined") return
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(store))
}

export function resetLocalActivityStore(): void {
  if (typeof window === "undefined") return
  sessionStorage.removeItem(STORAGE_KEY)
  sessionStorage.removeItem("currentSessionId")
}

export function loadLocalActivityStore(): SkipDbStore {
  return readStore()
}

export function createLocalActivity(): Activity {
  const now = new Date().toISOString()
  const activity: Activity = {
    id: 1,
    session_id: SKIP_DB_USER_ID,
    started_at: now,
    completed_at: null,
    is_completed: false,
  }

  writeStore({
    ...emptyStore(),
    activity,
  })

  if (typeof window !== "undefined") {
    sessionStorage.setItem("currentSessionId", SKIP_DB_USER_ID)
  }

  return activity
}

export function completeLocalActivity(activityId: number): Activity | null {
  const store = readStore()
  if (!store.activity || store.activity.id !== activityId) return null

  const activity: Activity = {
    ...store.activity,
    completed_at: new Date().toISOString(),
    is_completed: true,
  }
  writeStore({ ...store, activity })
  return activity
}

export function findLocalActivityItem(
  activityId: number,
  pageSlug: string,
  itemType: string,
  itemName: string,
): ActivityItem | undefined {
  return readStore().items.find(
    (item) =>
      item.activity_id === activityId &&
      item.page_slug === pageSlug &&
      item.item_type === itemType &&
      item.item_name === itemName,
  )
}

export function insertLocalActivityItem(input: {
  activity_id: number
  page_slug: string
  item_type: string
  item_name: string
}): ActivityItem {
  const store = readStore()
  const now = new Date().toISOString()
  const item: ActivityItem = {
    id: store.nextItemId,
    activity_id: input.activity_id,
    page_slug: input.page_slug,
    item_type: input.item_type as ActivityItem["item_type"],
    item_name: input.item_name,
    started_at: now,
    completed_at: null,
    is_completed: false,
    score: null,
    data: null,
  }

  writeStore({
    ...store,
    items: [...store.items, item],
    nextItemId: store.nextItemId + 1,
  })

  return item
}

export function completeLocalActivityItem(
  itemId: number,
  score?: number,
  data?: unknown,
): ActivityItem | null {
  const store = readStore()
  const index = store.items.findIndex((item) => item.id === itemId)
  if (index === -1) return null

  const items = [...store.items]
  items[index] = {
    ...items[index],
    completed_at: new Date().toISOString(),
    is_completed: true,
    score: score ?? null,
    data: data ?? null,
  }
  writeStore({ ...store, items })
  return items[index]
}

export function hasLocalPageCompletion(activityId: number, pageSlug: string): boolean {
  return readStore().completions.some(
    (completion) => completion.activity_id === activityId && completion.page_slug === pageSlug,
  )
}

export function insertLocalPageCompletion(activityId: number, pageSlug: string): PageCompletion | null {
  const store = readStore()
  if (hasLocalPageCompletion(activityId, pageSlug)) return null

  const completion: PageCompletion = {
    id: store.nextCompletionId,
    activity_id: activityId,
    page_slug: pageSlug,
    completed_at: new Date().toISOString(),
  }

  writeStore({
    ...store,
    completions: [...store.completions, completion],
    nextCompletionId: store.nextCompletionId + 1,
  })

  return completion
}

export function pageCompletionsMapFromStore(store: SkipDbStore): Record<string, boolean> {
  const map: Record<string, boolean> = {}
  store.completions.forEach((completion) => {
    map[completion.page_slug] = true
  })
  return map
}
