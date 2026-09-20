/** Local-only flag: skip Supabase reads/writes and keep activity state in the browser. */
export function isSkipDb(): boolean {
  const value = process.env.NEXT_PUBLIC_SKIP_DB?.trim().toLowerCase()
  return value === "true" || value === "1" || value === "yes"
}
