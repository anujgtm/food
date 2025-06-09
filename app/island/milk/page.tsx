"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import TopMenuBar from "@/components/top-menu-bar"
import { useActivity } from "@/context/activity-context"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function MilkIsland() {
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [allActivitiesCompleted, setAllActivitiesCompleted] = useState(false)
  const router = useRouter()
  const { activityItems, startActivityItem, currentSessionId } = useActivity()

  useEffect(() => {
    // Check if user has completed required activities on the previous island
    const grainsVideoCompleted = activityItems.some(
      (item) =>
        item.page_slug === "grains" &&
        item.item_type === "video" &&
        item.item_name === "grains-intro" &&
        item.is_completed,
    )

    const grainsDragDropCompleted = activityItems.some(
      (item) =>
        item.page_slug === "grains" && item.item_type === "game" && item.item_name === "drag-drop" && item.is_completed,
    )

    const grainsShopperCompleted = activityItems.some(
      (item) =>
        item.page_slug === "grains" &&
        item.item_type === "game" &&
        item.item_name === "supermarket-shopper" &&
        item.is_completed,
    )

    const grainsQuizCompleted = activityItems.some(
      (item) =>
        item.page_slug === "grains" &&
        item.item_type === "quiz" &&
        item.item_name === "mental-workout" &&
        item.is_completed,
    )

    // All previous island activities must be completed to access this island
    //const canAccess = grainsVideoCompleted && grainsDragDropCompleted && grainsShopperCompleted && grainsQuizCompleted
    const quizCompleted = activityItems.some(
      (item) => item.item_type === "quiz" && item.item_name === "initial-quiz" && item.is_completed,
    )
    const canAccess = quizCompleted
    setIsAuthorized(canAccess)

    // Check if all current island activities are completed
    const milkVideoCompleted = activityItems.some(
      (item) =>
        item.page_slug === "milk" && item.item_type === "video" && item.item_name === "milk-intro" && item.is_completed,
    )

    const milkDragDropCompleted = activityItems.some(
      (item) =>
        item.page_slug === "milk" && item.item_type === "game" && item.item_name === "drag-drop" && item.is_completed,
    )

    const milkShopperCompleted = activityItems.some(
      (item) =>
        item.page_slug === "milk" &&
        item.item_type === "game" &&
        item.item_name === "supermarket-shopper" &&
        item.is_completed,
    )

    const milkQuizCompleted = activityItems.some(
      (item) =>
        item.page_slug === "milk" &&
        item.item_type === "quiz" &&
        item.item_name === "mental-workout" &&
        item.is_completed,
    )

    // All activities must be completed to enable the continue button
    const allCompleted = milkVideoCompleted && milkDragDropCompleted && milkShopperCompleted && milkQuizCompleted
    setAllActivitiesCompleted(allCompleted)

    setIsLoading(false)

    // Redirect if not authorized
    if (!canAccess && !isLoading) {
      router.push("/island/grains")
    } else if (canAccess) {
      // Record visit to this page
      startActivityItem("milk", "page-visit", "milk-visit")
    }
  }, [activityItems, router, isLoading, startActivityItem])

  const handleWatchClick = async () => {
    // Start tracking the video activity
    const activityItem = await startActivityItem("milk", "video", "milk-intro")

    if (activityItem && currentSessionId) {
      // In a real implementation, you would complete this when the video ends
      // For now, we'll simulate completion after navigation
      sessionStorage.setItem(`pendingVideoCompletion_${currentSessionId}_milk`, activityItem.id.toString())
    }
  }

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
        <div className="relative w-full bg-gradient-to-r from-[#c8e6c9] to-[#b2ebf2] rounded-b-md overflow-hidden">
          <img src="/images/4_milkBannerv2.png" />
        </div>

        {/* Guardian introduction */}
        <div className="w-full bg-beige rounded-md mt-4 p-6 pb-0 relative overflow-hidden">
          <div className="flex">
            <div className="w-1/4 relative content-end">
              <Image
                src="/images/4_milkKnight.png"
                alt="Milk Knight character"
                width={200}
                height={213}
                className="object-contain"
              />
            </div>

            <div className="w-3/4 pl-8 pb-6">
              <p className="text-dark font-extralight mb-4">
                Welcome to Milk Products Island, it's here that we make our members sturdy and powerful by providing them
                with calcium for strong bones and feeding them delicious food and drinks.
              </p>
              <p className="text-dark font-extralight mb-4">
                Complete the missions around the island, as you go, make sure to keep an eye out for the sources of
                goodness that are scattered across the island.
              </p>
              <p className="text-dark font-extralight mb-4">
                If you pass the Mental Workout Challenge, you will receive the island's token that will prove to anyone that you are a Calcium Champion.
              </p>
              <p className="text-dark font-black">Choose an activity to complete.</p>
            </div>
          </div>
        </div>

        {/* Activities section */}
        <div
          className="w-full bg-beige rounded-md mt-4 p-6 relative overflow-hidden"
          style={{
            backgroundImage: "url('/images/megaButtonBox_FruitVeg_v01.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "720px",
            width: "100%",
            alignContent: "center",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-2"></div>

          {/* Activity 1 */}
          <div className="flex justify-between items-center bg-[#f5f5f5] rounded-md p-4 border border-gray-200 mb-4">
            <div className="w-1/2">
              <h3 className="text-dark font-black text-xl">Introduction to Milk Products Island</h3>
              <p className="text-dark font-black text-xl">Whakataki ki ngā hua miraka</p>
            </div>

            <div className="flex gap-4">
              <div className="relative h-24 w-64">
                <Image
                  src="/images/thumbnail_A4.png"
                  alt="Food bowl"
                  width={484}
                  height={183}
                  className="object-contain rounded-md"
                />
              </div>

              <Link href="/activity/milk-intro" className="w-28 flex">
                <button
                  className="bg-[#006400] text-light px-6 py-3 rounded-md font-black flex-1 h-full btn-rounded"
                  onClick={handleWatchClick}
                >
                  Watch
                </button>
              </Link>
            </div>
          </div>

          {/* Activity 2 */}
          <div className="flex justify-between items-center bg-[#f5f5f5] rounded-md p-4 border border-gray-200 mb-4">
            <div className="w-1/2">
              <h3 className="text-dark font-black text-xl">Milk Choices</h3>
              <p className="text-dark font-black text-xl">Tōtaka</p>
            </div>

            <div className="flex gap-4">
              <div className="relative h-24 w-64">
                <Image
                  src="/images/thumbnail_M4.1.png"
                  alt="Food bowl"
                  width={484}
                  height={183}
                  className="object-contain rounded-md"
                />
              </div>

              <Link href="/activity/milk-drag-drop" className="w-28 flex">
                <button
                  className="bg-[#006400] text-light px-6 py-3 rounded-md font-black flex-1 h-full btn-rounded"
                  onClick={() => startActivityItem("milk", "game", "drag-drop")}
                >
                  Start
                </button>
              </Link>
            </div>
          </div>

          {/* Activity 3 */}
          <div className="flex justify-between items-center bg-[#f5f5f5] rounded-md p-4 border border-gray-200 mb-4">
            <div className="w-1/2">
              <h3 className="text-dark font-black text-xl">Supermarket Shopper</h3>
              <p className="text-dark font-black text-xl">Kirihokomaha</p>
            </div>

            <div className="flex gap-4">
              <div className="relative h-24 w-64">
                <Image
                  src="/images/thumbnail_M4.2.png"
                  alt="Food bowl"
                  width={484}
                  height={183}
                  className="object-contain rounded-md"
                />
              </div>

              <Link href="/activity/milk-shopper" className="w-28 flex">
                <button
                  className="bg-[#006400] text-light px-6 py-3 rounded-md font-black flex-1 h-full btn-rounded"
                  onClick={() => startActivityItem("milk", "game", "supermarket-shopper")}
                >
                  Start
                </button>
              </Link>
            </div>
          </div>

          {/* Activity 4 */}
          <div className="flex justify-between items-center bg-[#f5f5f5] rounded-md p-4 border border-gray-200">
            <div className="w-1/2">
              <h3 className="text-dark font-black text-xl">Mental Workout Challenge</h3>
              <p className="text-dark font-black text-xl">Wero Hinengaro</p>
            </div>

            <div className="flex gap-4">
              <div className="relative h-24 w-64">
                <Image
                  src="/images/thumbnail_M4.3.png"
                  alt="Food bowl"
                  width={484}
                  height={183}
                  className="object-contain rounded-md"
                />
              </div>

              <Link href="/activity/milk-quiz" className="w-28 flex">
                <button
                  className="bg-[#006400] text-light px-6 py-3 rounded-md font-black flex-1 h-full btn-rounded"
                  onClick={() => startActivityItem("milk", "quiz", "mental-workout")}
                >
                  Start
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer section */}
        {/*
        <div className="w-full mt-8 mb-8 flex flex-col items-center justify-center">
          <h2 className="text-light text-3xl font-black mb-2">Ready for the next island?</h2>
          <p className="text-light text-center mb-6 font-extralight">
            When you've completed all the activities on this island press Continue.
          </p>

          <TooltipProvider>
            {allActivitiesCompleted ? (
              <Link href="/island/protein">
                <button
                  className="bg-[#006400] text-light px-8 py-4 rounded-md font-black btn-rounded"
                  onClick={() => startActivityItem("milk", "navigation", "next-island")}
                >
                  Continue
                </button>
              </Link>
            ) : (
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    className="bg-gray-500 text-light px-8 py-4 rounded-md font-black cursor-not-allowed btn-rounded"
                    disabled
                  >
                    Continue
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Complete all activities on this island first</p>
                </TooltipContent>
              </Tooltip>
            )}
          </TooltipProvider>
        </div>
        */}
      </div>
    </main>
  )
}
