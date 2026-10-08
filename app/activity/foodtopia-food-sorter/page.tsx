"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { useActivity } from "@/context/activity-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle } from "lucide-react"
import { IframeActivity } from "@/components/iframe-activity"

export default function FoodtopiaFoodSorterActivity() {
  const [activityItemId, setActivityItemId] = useState<number | null>(null)
  const [isCompleted, setIsCompleted] = useState(false)
  const [activityReady, setActivityReady] = useState(false)
  const [score, setScore] = useState<number | null>(null)
  const { activityItems, completeActivityItem } = useActivity()
  const targetRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   targetRef.current?.scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //   });
  // }, []);

  useEffect(() => {
    // Find the activity item for this game
    const item = activityItems.find(
      (item) => item.page_slug === "foodtopia" && item.item_type === "game" && item.item_name === "food-group-sorter",
    )

    if (item) {
      setActivityItemId(item.id)
      setIsCompleted(item.is_completed)
      if (item.score) {
        setScore(item.score)
      }
    }
  }, [activityItems])

  const handleComplete = async (activityScore?: number) => {
    if (activityItemId && !isCompleted) {
      const finalScore = activityScore ?? 100
      await completeActivityItem(activityItemId, finalScore, { completed: true })
      setScore(finalScore)
      setIsCompleted(true)
    }
  }

  const handleActivityLoad = () => {
    setActivityReady(true)
    console.log("Food sorter activity loaded")
  }

  const handleActivityMessage = (data: any) => {
    console.log("Message from food sorter activity:", data)

    // Example of auto-completion through iframe messages
    if (data && typeof data === "object" && data.type === "activity-complete") {
      // If the activity sends a score, use it
      if (typeof data.score === "number") {
        handleComplete(data.score)
      } else {
        handleComplete()
      }
    }
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center">
      <div className="w-full max-w-5xl mx-auto p-4">
        <div className="bg-beige rounded-md p-8 text-dark">
          {/* <h1 className="text-4xl font-black mb-6">Food Group Sorter Activity</h1> */}

          <Card className="mb-8 shadcn-card" ref={targetRef}>
            <CardHeader>
              <CardTitle className="text-dark font-black">Food Group Sorter Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeActivity
                src="/activities/M6.2%20WEB/story.html"
                isExternal={true}
                title="Food Group Sorter Game"
                onLoad={handleActivityLoad}
                onMessage={handleActivityMessage}
                onComplete={() => handleComplete()}
                className="mb-4"
              />
              {/* <p className="text-dark font-extralight">
                Sort different foods into their correct food groups. Test your knowledge of all the food groups!
              </p> */}
            </CardContent>
            {/* <CardFooter className="flex flex-col items-start gap-4">
              {isCompleted && (
                <Alert className="bg-green-100 border-green-500 w-full">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <AlertDescription className="text-green-600 font-medium">
                    Activity completed! You can play again if you'd like.
                  </AlertDescription>
                </Alert>
              )}
              <div className="flex justify-between w-full">
                <Link href="/island/foodtopia">
                  <button className="bg-[#333] text-light px-4 py-2 rounded-md btn-rounded">Back to Island</button>
                </Link>
                {!isCompleted && (
                  <button
                    className="bg-[#006400] text-light px-4 py-2 rounded-md btn-rounded"
                    onClick={() => handleComplete()}
                  >
                    Complete Activity
                  </button>
                )}
              </div>
            </CardFooter> */}
          </Card>
        
          <div className="flex justify-end mt-4">
            <Link href="/island/foodtopia">
              <button className="bg-[#333] text-light px-4 py-2 rounded-md font-black btn-rounded">Back to Island</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
