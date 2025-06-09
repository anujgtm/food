"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useActivity } from "@/context/activity-context"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function GetStartedSection() {
  const [canProceed, setCanProceed] = useState(false)
  const { isLoading, activityItems, currentSessionId } = useActivity()

  useEffect(() => {
    if (isLoading || !currentSessionId) return

    // Check if the required activities are completed in the current session
    const quizCompleted = activityItems.some(
      (item) => item.item_type === "quiz" && item.item_name === "initial-quiz" && item.is_completed,
    )

    const videoWatched = activityItems.some(
      (item) => item.item_type === "video" && item.item_name === "introduction-video" && item.is_completed,
    )

    // User can proceed if both quiz and video are completed
    // setCanProceed(quizCompleted && videoWatched)
    setCanProceed(true)
  }, [activityItems, isLoading, currentSessionId])

  return (
    <div className="w-full mt-8 mb-8 flex">
      <div className="w-1/4 relative">
        <div className="relative h-40 w-40">
          <Image
            src="/images/landing-footer-char.png"
            alt="Small mushroom character"
            width={160}
            height={160}
            className="object-contain"
          />
        </div>
      </div>

      <div className="w-3/4 flex flex-col items-center justify-center">
        <h2 className="text-light text-3xl font-black mb-2">Ready to get started?</h2>
        <p className="text-light text-center mb-6 font-extralight">
          If you've watched the introduction animation then you're ready!
        </p>

        <TooltipProvider>
          {canProceed ? (
            <Link href="/island/fruit-vegetables">
              <Button className="bg-[#006400] text-light px-8 py-4 rounded-md font-black">Continue</Button>
            </Link>
          ) : (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="bg-gray-500 text-light px-8 py-4 rounded-md font-black cursor-not-allowed" disabled>
                  Continue
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Complete the quiz and watch the introduction video first</p>
              </TooltipContent>
            </Tooltip>
          )}
        </TooltipProvider>
      </div>
    </div>
  )
}
