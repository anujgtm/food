"use client"

import { useEffect, useState, useRef } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import TopMenuBar from "@/components/top-menu-bar"
import { ScrollHintViewport } from "@/components/scroll-overflow-hint"
import { useActivity } from "@/context/activity-context"

export default function FoodtopiaIsland() {
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [allActivitiesCompleted, setAllActivitiesCompleted] = useState(false)
  const router = useRouter()
  const { activityItems, startActivityItem, markAllActivitiesCompleted } = useActivity()
  const hasRecordedVisit = useRef(false)
  const hasMarkedComplete = useRef(false)

  useEffect(() => {
    // Check if user has completed required activities on the previous island
    const proteinVideoCompleted = activityItems.some(
      (item) =>
        item.page_slug === "protein" &&
        item.item_type === "video" &&
        item.item_name === "protein-intro" &&
        item.is_completed,
    )

    const proteinDragDropCompleted = activityItems.some(
      (item) =>
        item.page_slug === "protein" &&
        item.item_type === "game" &&
        item.item_name === "drag-drop" &&
        item.is_completed,
    )

    const proteinShopperCompleted = activityItems.some(
      (item) =>
        item.page_slug === "protein" &&
        item.item_type === "game" &&
        item.item_name === "supermarket-shopper" &&
        item.is_completed,
    )

    const proteinQuizCompleted = activityItems.some(
      (item) =>
        item.page_slug === "protein" &&
        item.item_type === "quiz" &&
        item.item_name === "mental-workout" &&
        item.is_completed,
    )

    // All previous island activities must be completed to access this island
    //const canAccess =
    //  proteinVideoCompleted && proteinDragDropCompleted && proteinShopperCompleted && proteinQuizCompleted
    const quizCompleted = activityItems.some(
      (item) => item.item_type === "quiz" && item.item_name === "initial-quiz" && item.is_completed,
    )
    const canAccess = quizCompleted
    setIsAuthorized(canAccess)

    // Check if all current island activities are completed
    const mealMadnessCompleted = activityItems.some(
      (item) =>
        item.page_slug === "foodtopia" &&
        item.item_type === "game" &&
        item.item_name === "meal-madness" &&
        item.is_completed,
    )

    const foodGroupSorterCompleted = activityItems.some(
      (item) =>
        item.page_slug === "foodtopia" &&
        item.item_type === "game" &&
        item.item_name === "food-group-sorter" &&
        item.is_completed,
    )

    const sugarSorterCompleted = activityItems.some(
      (item) =>
        item.page_slug === "foodtopia" &&
        item.item_type === "game" &&
        item.item_name === "sugar-sorter" &&
        item.is_completed,
    )

    const finalChallengeCompleted = activityItems.some(
      (item) =>
        item.page_slug === "foodtopia" &&
        item.item_type === "quiz" &&
        item.item_name === "final-challenge" &&
        item.is_completed,
    )

    // All activities must be completed to enable the continue button
    const allCompleted =
      mealMadnessCompleted && foodGroupSorterCompleted && sugarSorterCompleted && finalChallengeCompleted
    setAllActivitiesCompleted(allCompleted)

    setIsLoading(false)

    // Redirect if not authorized
    if (!canAccess && !isLoading) {
      router.push("/island/protein")
    }
  }, [activityItems, router, isLoading])

  // Record page visit when user is authorized
  useEffect(() => {
    if (isAuthorized && !hasRecordedVisit.current) {
      hasRecordedVisit.current = true
      startActivityItem("foodtopia", "page-visit", "foodtopia-visit")
    }
  }, [isAuthorized, startActivityItem])

  // Mark page as completed when all activities are done
  useEffect(() => {
    if (allActivitiesCompleted && !hasMarkedComplete.current) {
      hasMarkedComplete.current = true
      markAllActivitiesCompleted("foodtopia")
    }
  }, [allActivitiesCompleted, markAllActivitiesCompleted])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Loading...</p>
      </div>
    )
  }

  if (!isAuthorized) {
    return null // Will redirect in useEffect
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center">
      <div className="w-full max-w-5xl mx-auto">
        {/* Top navigation bar */}
        <TopMenuBar />

        {/* Island header section */}
        <div className="relative w-full bg-[#C52436] rounded-b-md overflow-hidden pt-4">
          <img src="/images/Foodtopia_Header.png" />
        </div>

        {/* Guardian introduction */}
        <div className="w-full bg-beige rounded-md mt-4 p-6 pb-0 relative overflow-hidden">
          <div className="flex">
            <div className="w-1/4 relative">
              <div className="absolute -left-8 top-0">
                <div className="relative h-48 w-48">
                  <Image
                    src="/images/6_main.png"
                    alt="Wizard character with staff"
                    width={192}
                    height={192}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="w-3/4 pl-8 pb-6">
              <p className="text-dark font-extralight mb-4">
                Welcome to Foodtopia. Before you travel to the Castle, it's important you prove that you have the
                knowledge from the four food group islands so you can defeat the Sneaky Snail and help fix the food
                transportation device.
              </p>
              <p className="text-dark font-extralight mb-4">
                To prove you are worthy, you must help out around the island. There are four activities for you to
                complete.
              </p>
              <p className="text-dark font-black">Choose an activity to complete.</p>
            </div>
          </div>
        </div>

        {/* Activities section */}
        <ScrollHintViewport
          className="w-full bg-beige rounded-md mt-4"
          style={{
            backgroundImage: "url('/images/megaButtonBox_FruitVeg_v01.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "720px",
            width: "100%",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-2"></div>

          {/* Activity 1 */}
          <div className="flex justify-between items-center bg-[#f5f5f5] rounded-md p-4 border border-gray-200 mb-4">
            <div className="w-1/2">
              <h3 className="text-dark font-black text-xl">Meal Madness</h3>
              <p className="text-dark font-black text-xl">Tāngata Huhua, Kai Huhua</p>
            </div>

            <div className="flex gap-4">
              <div className="relative h-24 w-64">
                <Image
                  src="/images/thumbnail_M6.1.png"
                  alt="Food bowl"
                  width={484}
                  height={183}
                  className="object-contain rounded-md"
                />
              </div>

              <Link href="/activity/foodtopia-meal-madness" className="w-28 flex">
                <button
                  className="bg-[#006400] text-light px-6 py-3 rounded-md font-black flex-1 h-full btn-rounded"
                  onClick={() => startActivityItem("foodtopia", "game", "meal-madness")}
                >
                  Start
                </button>
              </Link>
            </div>
          </div>

          {/* Activity 2 */}
          <div className="flex justify-between items-center bg-[#f5f5f5] rounded-md p-4 border border-gray-200 mb-4">
            <div className="w-1/2">
              <h3 className="text-dark font-black text-xl">Food Group Sorter</h3>
              <p className="text-dark font-black text-xl">Whakarōpū Kai</p>
            </div>

            <div className="flex gap-4">
              <div className="relative h-24 w-64">
                <Image
                  src="/images/thumbnail_M6.2.png"
                  alt="Food bowl"
                  width={484}
                  height={183}
                  className="object-contain rounded-md"
                />
              </div>

              <Link href="/activity/foodtopia-food-sorter" className="w-28 flex">
                <button
                  className="bg-[#006400] text-light px-6 py-3 rounded-md font-black flex-1 h-full btn-rounded"
                  onClick={() => startActivityItem("foodtopia", "game", "food-group-sorter")}
                >
                  Start
                </button>
              </Link>
            </div>
          </div>

          {/* Activity 3 */}
          <div className="flex justify-between items-center bg-[#f5f5f5] rounded-md p-4 border border-gray-200 mb-4">
            <div className="w-1/2">
              <h3 className="text-dark font-black text-xl">Sugar Sorter gameshow</h3>
              <p className="text-dark font-black text-xl">Kēmu Whakarōpū Huka</p>
            </div>

            <div className="flex gap-4">
              <div className="relative h-24 w-64">
                <Image
                  src="/images/thumbnail_M6.3.png"
                  alt="Food bowl"
                  width={484}
                  height={183}
                  className="object-contain rounded-md"
                />
              </div>

              <Link href="/activity/foodtopia-sugar-sorter" className="w-28 flex">
                <button
                  className="bg-[#006400] text-light px-6 py-3 rounded-md font-black flex-1 h-full btn-rounded"
                  onClick={() => startActivityItem("foodtopia", "game", "sugar-sorter")}
                >
                  Start
                </button>
              </Link>
            </div>
          </div>

          {/* Activity 4 */}
          <div className="flex justify-between items-center bg-[#f5f5f5] rounded-md p-4 border border-gray-200">
            <div className="w-1/2">
              <h3 className="text-dark font-black text-xl">The Final Challenge</h3>
              <p className="text-dark font-black text-xl">Wero Whakamutunga</p>
            </div>

            <div className="flex gap-4">
              <div className="relative h-24 w-64">
                <Image
                  src="/images/thumbnail_M6.4.png"
                  alt="Food bowl"
                  width={484}
                  height={183}
                  className="object-contain rounded-md"
                />
              </div>

              <Link href="/activity/foodtopia-final-challenge" className="w-28 flex">
                <button
                  className="bg-[#006400] text-light px-6 py-3 rounded-md font-black flex-1 h-full btn-rounded"
                  onClick={() => startActivityItem("foodtopia", "quiz", "final-challenge")}
                >
                  Start
                </button>
              </Link>
            </div>
          </div>
        </ScrollHintViewport>

        {/* Footer section */}
        <div className="w-full mt-8 mb-8 flex flex-col items-center justify-center"></div>
        {/* Footer section with congratulatory message */}
        {allActivitiesCompleted && (
          <div className="w-full bg-green-600 text-white py-4 px-6 rounded-md mt-8 text-center">
            <h2 className="text-2xl font-black mb-2">Congratulations! You've Completed Your Journey.</h2>
            <p className="text-lg">You've mastered all the food groups and helped save Foodtopia!</p>
          </div>
        )}
      </div>
    </main>
  )
}
