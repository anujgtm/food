"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useActivity } from "@/context/activity-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { NavigationGuard } from "@/components/navigation-guard"

export default function CompletionPage() {
  const [isLoading, setIsLoading] = useState(true)
  const { activityItems, completeActivity } = useActivity()

  useEffect(() => {
    // Mark the entire activity as completed
    completeActivity().then(() => {
      setIsLoading(false)
    })
  }, [completeActivity])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <NavigationGuard
      requiredActivities={[
        { page: "foodtopia", type: "game", name: "meal-madness" },
        { page: "foodtopia", type: "game", name: "food-group-sorter" },
        { page: "foodtopia", type: "game", name: "sugar-sorter" },
        { page: "foodtopia", type: "game", name: "sugar-detective" },
        { page: "foodtopia", type: "quiz", name: "final-challenge" },
      ]}
      redirectTo="/island/foodtopia"
    >
      <main className="min-h-screen bg-black text-white flex flex-col items-center">
        <div className="w-full max-w-5xl mx-auto p-4">
          <div className="flex justify-between items-center w-full mb-8">
            <Link href="/">
              <button className="bg-[#333] text-light px-4 py-2 rounded-md font-black btn-rounded">Back to Home</button>
            </Link>
            <div className="relative h-10 w-16">
              <Image
                src="/abstract-brain-bulb.png"
                alt="Food for thought logo"
                width={64}
                height={40}
                className="object-contain"
              />
            </div>
          </div>

          <div className="bg-beige rounded-md p-8 text-dark">
            <h1 className="text-4xl font-black mb-6 text-center">Congratulations!</h1>

            <Card className="mb-8 shadcn-card">
              <CardHeader>
                <CardTitle className="text-dark font-black text-center">You've Completed Your Journey!</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-8">
                  <Image
                    src="/vibrant-food-fest.png"
                    alt="Celebration"
                    width={500}
                    height={300}
                    className="mx-auto rounded-md"
                  />
                </div>
                <p className="text-dark font-extralight mb-4">
                  Congratulations on completing your journey through all the Food Group Islands! You've learned about
                  fruits and vegetables, grains, milk products, and proteins, and how they all work together to create a
                  balanced diet.
                </p>
                <p className="text-dark font-extralight mb-4">
                  Thanks to your help, the transportation device has been fixed, and all the food groups can now reach
                  the people of Foodtopia. You've saved the day!
                </p>
                <p className="text-dark font-black">
                  Remember to apply what you've learned about healthy eating in your own life!
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link href="/">
                  <Button className="bg-[#006400] text-light font-black btn-rounded shadcn-button">
                    Return to Home
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </NavigationGuard>
  )
}
