import { createClient } from "@supabase/supabase-js"
import { isSkipDb } from "@/lib/skip-db"

function assertDbEnabled(context: string) {
  if (isSkipDb()) {
    throw new Error(`${context} was requested while NEXT_PUBLIC_SKIP_DB is enabled`)
  }
}

// For client-side usage (with auth)
const createBrowserClient = () => {
  assertDbEnabled("Supabase browser client")
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

  return createClient(supabaseUrl, supabaseAnonKey)
}

// For server-side usage (without auth)
const createServerClient = () => {
  assertDbEnabled("Supabase server client")
  const supabaseUrl = process.env.SUPABASE_URL as string
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string

  return createClient(supabaseUrl, supabaseServiceKey)
}

// Use a singleton pattern for the browser client to prevent multiple instances
let browserClient: ReturnType<typeof createBrowserClient> | null = null

export const getSupabaseBrowserClient = () => {
  if (!browserClient) {
    browserClient = createBrowserClient()
  }
  return browserClient
}

export const getSupabaseServerClient = () => {
  return createServerClient()
}
