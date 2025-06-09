"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useActivity } from "@/context/activity-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle } from "lucide-react"
import { VimeoPlayer } from "@/components/vimeo-player"

export default function MilkIntroPage() {
  const [activityItemId, setActivityItemId] = useState<number | null>(null)
  const [isCompleted, setIsCompleted] = useState(false)
  const [videoReady, setVideoReady] = useState(false)
  const { activityItems, completeActivityItem, currentSessionId } = useActivity()

  useEffect(() => {
    if (!currentSessionId) return

    // Find the activity item for this video
    const item = activityItems.find(
      (item) => item.page_slug === "milk" && item.item_type === "video" && item.item_name === "milk-intro",
    )

    if (item) {
      setActivityItemId(item.id)
      setIsCompleted(item.is_completed)
    }

    // Check if there's a pending video completion for this session
    const pendingVideoId = sessionStorage.getItem(`pendingVideoCompletion_${currentSessionId}_milk`)

    if (pendingVideoId) {
      // Complete the video activity
      completeActivityItem(Number.parseInt(pendingVideoId))

      // Clear the pending completion
      sessionStorage.removeItem(`pendingVideoCompletion_${currentSessionId}_milk`)
    }
  }, [activityItems, completeActivityItem, currentSessionId])

  const handleComplete = async () => {
    if (activityItemId && !isCompleted) {
      await completeActivityItem(activityItemId, 100, { completed: true })
      setIsCompleted(true)
    }
  }

  const handleVideoEnd = () => {
    if (activityItemId && !isCompleted) {
      handleComplete()
    }
  }

  const handleVideoReady = () => {
    setVideoReady(true)
    console.log("Milk video is ready to play")
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center">
      <div className="w-full max-w-5xl mx-auto p-4">
        <div className="flex justify-between items-center w-full mb-8">
          <Link href="/island/milk">
            <button className="bg-[#333] text-light px-4 py-2 rounded-md font-black btn-rounded">Back to Island</button>
          </Link>
          <div className="relative h-10 w-16">
            {/*
            <Image
              src="/placeholder.svg?height=40&width=64"
              alt="Food for thought logo"
              width={64}
              height={40}
              className="object-contain"
            />*/}
          </div>
        </div>

        <div className="bg-beige rounded-md p-8 text-dark">
          <h1 className="text-4xl font-black mb-6">Milk Products Introduction Video</h1>

          <Card className="mb-8 shadcn-card">
            <CardHeader>
              <CardTitle className="text-dark font-black">Learn About Milk Products</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Using the Vimeo video ID from the script */}
              <VimeoPlayer
                videoId="1070165047"
                autoplay={false}
                loop={false}
                onReady={handleVideoReady}
                onEnd={handleVideoEnd}
                className="mb-4"
                color="006400" // Using the green color to match the theme
              />
              <p className="text-dark font-extralight">
                This video introduces you to the importance of milk products and how they provide calcium for strong
                bones and teeth.
              </p>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4">
              {isCompleted && (
                <Alert className="bg-green-100 border-green-500 w-full">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <AlertDescription className="text-green-600 font-medium">
                    Video watched! You can watch it again if you'd like.
                  </AlertDescription>
                </Alert>
              )}
              <div className="flex justify-between w-full">
                <Link href="/island/milk">
                  <button className="bg-[#333] text-light px-4 py-2 rounded-md btn-rounded">Back to Island</button>
                </Link>
                {!isCompleted && (
                  <button
                    className="bg-[#006400] text-light px-4 py-2 rounded-md btn-rounded"
                    onClick={handleComplete}
                  >
                    Complete Activity
                  </button>
                )}
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  )
}
