"use client"

import { useEffect } from "react"
import { disableConsoleLogInProduction } from "@/lib/logger"

export function DevLogGuard() {
  useEffect(() => {
    disableConsoleLogInProduction()
  }, [])

  return null
}
