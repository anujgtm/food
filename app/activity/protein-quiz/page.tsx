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

export default function ProteinQuizActivity() {
  const [activityItemId, setActivityItemId] = useState<number | null>(null)
  const [isCompleted, setIsCompleted] = useState(false)
  const [activityReady, setActivityReady] = useState(false)
  const [quizScore, setQuizScore] = useState<number | null>(null)
  const { activityItems, completeActivityItem } = useActivity()

  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    targetRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  useEffect(() => {
    // Find the activity item for this quiz
    const item = activityItems.find(
      (item) => item.page_slug === "protein" && item.item_type === "quiz" && item.item_name === "mental-workout",
    )

    if (item) {
      setActivityItemId(item.id)
      setIsCompleted(item.is_completed)
      if (item.score) {
        setQuizScore(item.score)
      }
    }
  }, [activityItems])

  const handleComplete = async (score?: number) => {
    if (activityItemId && !isCompleted) {
      const finalScore = score ?? 100
      await completeActivityItem(activityItemId, finalScore, { completed: true })
      setQuizScore(finalScore)
      setIsCompleted(true)
    }
  }

  const handleActivityLoad = () => {
    setActivityReady(true)
    console.log("Protein quiz activity loaded")
  }

  const handleActivityMessage = (data: any) => {
    console.log("Message from protein quiz activity:", data)

    // Handle quiz completion with score
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
        <div className="flex justify-between items-center w-full mb-8">
          <Link href="/island/protein">
            <button className="bg-[#333] text-light px-4 py-2 rounded-md font-black btn-rounded">
              Back to Island
            </button>
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
          <h1 className="text-4xl font-black mb-6">Mental Workout Challenge</h1>

          <Card className="mb-8 shadcn-card" ref={targetRef}>
            <CardHeader>
              <CardTitle className="text-dark font-black">Test Your Knowledge</CardTitle>
            </CardHeader>
            <CardContent>
              <IframeActivity
                src="/activities/M5.3%20WEB/story.html"
                isExternal={true}
                title="Protein Quiz"
                onLoad={handleActivityLoad}
                onMessage={handleActivityMessage}
                onComplete={() => handleComplete()}
                className="mb-4"
              />
              <p className="text-dark font-extralight">
                Test your knowledge about protein foods with this interactive quiz!
              </p>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4">
              {isCompleted && (
                <Alert className="bg-green-100 border-green-500 w-full">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <AlertDescription className="text-green-600 font-medium">
                    Quiz completed!
                  </AlertDescription>
                </Alert>
              )}
              <div className="flex justify-between w-full">
                <Link href="/island/protein">
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
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  )
}
