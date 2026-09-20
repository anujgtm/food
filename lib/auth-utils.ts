import { getSupabaseBrowserClient } from "@/lib/supabase"
import { isSkipDb } from "@/lib/skip-db"
import { SKIP_DB_USER_ID } from "@/lib/local-activity-store"

const skipDbUser = { id: SKIP_DB_USER_ID } as { id: string }

export const ensureAnonymousAuth = async () => {
  if (isSkipDb()) {
    return skipDbUser
  }

  const supabase = getSupabaseBrowserClient()

  // Check if user is already authenticated
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    console.log("User already authenticated:", user.id)
    return user
  }

  // Sign in anonymously if not authenticated
  const { data: authData, error } = await supabase.auth.signInAnonymously()

  if (error) {
    console.error("Error signing in anonymously:", error)
    return null
  }

  console.log("Signed in anonymously:", authData.user?.id)
  return authData.user
}

export const getCurrentUserId = async (): Promise<string | null> => {
  if (isSkipDb()) {
    return SKIP_DB_USER_ID
  }

  const supabase = getSupabaseBrowserClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return user?.id || null
}
