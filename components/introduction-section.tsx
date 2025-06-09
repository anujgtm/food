"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { useActivity } from "@/context/activity-context"

export function IntroductionSection() {
  const [videoStarted, setVideoStarted] = useState(false)
  const { startActivityItem, completeActivityItem, currentSessionId, activityItems } = useActivity()
  const startedRef = useRef(false)

  const handleWatchClick = async () => {
    // Prevent multiple clicks from creating multiple activities
    if (startedRef.current) return
    startedRef.current = true

    // Check if we already have a video activity for this session
    const existingVideoItem = activityItems.find(
      (item) => item.item_type === "video" && item.item_name === "introduction-video",
    )

    // If we have an existing item that's not completed, use it
    if (existingVideoItem && !existingVideoItem.is_completed) {
      setVideoStarted(true)
      if (currentSessionId) {
        sessionStorage.setItem(`pendingVideoCompletion_${currentSessionId}_home`, existingVideoItem.id.toString())
      }
      return
    }

    // Start tracking the video activity
    const activityItem = await startActivityItem("home", "video", "introduction-video")

    if (activityItem && currentSessionId) {
      setVideoStarted(true)

      // In a real implementation, you would complete this when the video ends
      // For now, we'll simulate completion after navigation
      sessionStorage.setItem(`pendingVideoCompletion_${currentSessionId}_home`, activityItem.id.toString())
    }
  }

  return (
    <div
      className="w-full bg-beige rounded-md mt-4 p-6 relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/largeButtonBoxv01.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "300px",
        width: "100%",
        alignContent: "center",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-2 -bg-gradient-to-r -from-[#8bc34a] -to-[#f44336]"></div>

      <div className="flex justify-between items-top bg-[#f5f5f5] rounded-md p-4 border border-gray-200">
        <div className="w-1/2">
          <h3 className="text-dark font-black text-xl mb-4">Introduction</h3>
          <p className="text-dark text-sm font-extralight">
            
          </p>
        </div>

        <div className="flex gap-4">
          <div className="relative h-24 w-64">
            <Image
              src="/images/food-bowl.png"
              alt="Food bowl"
              width={484}
              height={182}
              className="object-contain rounded-md"
            />
          </div>

          <Link href="/activity" className="w-28 flex">
            <button
              className="bg-[#006400] text-light px-6 py-3 rounded-md font-black flex-1 h-full"
              onClick={handleWatchClick}
            >
              Watch
            </button>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-full h-2 -bg-gradient-to-r -from-[#f44336] -to-[#8bc34a]"></div>
    </div>
  )
}
