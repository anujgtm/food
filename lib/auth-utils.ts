import { getSupabaseBrowserClient } from "@/lib/supabase"

export const ensureAnonymousAuth = async () => {
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
  const supabase = getSupabaseBrowserClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return user?.id || null
}
