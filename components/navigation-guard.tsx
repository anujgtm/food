"use client"

import { type ReactNode, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useActivity } from "@/context/activity-context"

interface RequiredActivity {
  page: string
  type: string
  name: string
}

interface NavigationGuardProps {
  children: ReactNode
  requiredActivities: RequiredActivity[]
  redirectTo: string
}

export function NavigationGuard({ children, requiredActivities, redirectTo }: NavigationGuardProps) {
  const router = useRouter()
  const { activityItems } = useActivity()
  const [isAllowed, setIsAllowed] = useState(false)
  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {
    // Check if all required activities are completed
    const allCompleted = requiredActivities.every((required) => {
      return activityItems.some(
        (item) =>
          item.page_slug === required.page &&
          item.item_type === required.type &&
          item.item_name === required.name &&
          item.is_completed,
      )
    })

    if (!allCompleted && !isChecking) {
      router.push(redirectTo)
    } else if (allCompleted) {
      setIsAllowed(true)
    }

    setIsChecking(false)
  }, [activityItems, requiredActivities, redirectTo, router, isChecking])

  if (isChecking) {
    return <div>Checking access...</div>
  }

  return isAllowed ? <>{children}</> : null
}
