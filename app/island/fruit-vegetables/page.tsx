"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import TopMenuBar from "@/components/top-menu-bar"
import { useActivity } from "@/context/activity-context"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function FruitVegetablesIsland() {
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [allActivitiesCompleted, setAllActivitiesCompleted] = useState(false)
  const router = useRouter()
  const { activityItems, startActivityItem, currentSessionId } = useActivity()

  useEffect(() => {
    // Check if user has completed required activities on the home page
    const quizCompleted = activityItems.some(
      (item) => item.item_type === "quiz" && item.item_name === "initial-quiz" && item.is_completed,
    )

    const videoWatched = activityItems.some(
      (item) => item.item_type === "video" && item.item_name === "introduction-video" && item.is_completed,
    )

    const canAccess = quizCompleted
    setIsAuthorized(canAccess)

    // Check if all island activities are completed
    const fruitVideoCompleted = activityItems.some(
      (item) =>
        item.page_slug === "fruit-vegetables" &&
        item.item_type === "video" &&
        item.item_name === "fruit-vegetables-intro" &&
        item.is_completed,
    )

    const colorsGameCompleted = activityItems.some(
      (item) =>
        item.page_slug === "fruit-vegetables" &&
        item.item_type === "game" &&
        item.item_name === "guess-colors" &&
        item.is_completed,
    )

    const shopperGameCompleted = activityItems.some(
      (item) =>
        item.page_slug === "fruit-vegetables" &&
        item.item_type === "game" &&
        item.item_name === "supermarket-shopper" &&
        item.is_completed,
    )

    const quizGameCompleted = activityItems.some(
      (item) =>
        item.page_slug === "fruit-vegetables" &&
        item.item_type === "quiz" &&
        item.item_name === "mental-workout" &&
        item.is_completed,
    )

    // All activities must be completed to enable the continue button
    const allCompleted = fruitVideoCompleted && colorsGameCompleted && shopperGameCompleted && quizGameCompleted
    setAllActivitiesCompleted(allCompleted)

    setIsLoading(false)

    // Redirect if not authorized
    if (!canAccess && !isLoading) {
      router.push("/")
    } else if (canAccess) {
      // Record visit to this page
      startActivityItem("fruit-vegetables", "page-visit", "fruit-vegetables-visit")
    }
  }, [activityItems, router, isLoading, startActivityItem])

  const handleWatchClick = async () => {
    // Start tracking the video activity
    const activityItem = await startActivityItem("fruit-vegetables", "video", "fruit-vegetables-intro")

    if (activityItem && currentSessionId) {
      // In a real implementation, you would complete this when the video ends
      // For now, we'll simulate completion after navigation
      sessionStorage.setItem(`pendingVideoCompletion_${currentSessionId}_fruit-vegetables`, activityItem.id.toString())
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
        <TopMenuBar/>

        {/* Island header section */}
        <div className="relative w-full bg-gradient-to-r from-[#c8e6c9] to-[#b2ebf2] rounded-b-md overflow-hidden">
          <img src="/images/2_fruitNvegBanner.png" />
        </div>

        {/* Guardian introduction */}
        <div className="w-full bg-beige rounded-md mt-4 p-6 pb-0 relative overflow-hidden">
          <div className="flex">
            <div className="w-1/4 relative content-end">
              <Image
                src="/images/2_carrot.png"
                alt="Carrot character close-up"
                width={200}
                height={213}
                className="object-contain"
              />
            </div>

            <div className="w-3/4 pl-8 pb-6">
              <p className="text-dark font-extralight mb-4">
                I'm Cassy Rootshine, the Guardian of this island, and I'm here to guide you on your knowledge-seeking
                journey!
              </p>
              <p className="text-dark font-extralight mb-4">
                Here at Fruit and Vegetables Island/Motu Huarākau, Huawhenua, we take our job very seriously. We provide
                much needed vitamins and minerals!
              </p>
              <p className="text-dark font-extralight mb-4">
                Come and look at what we do here on our island. We'll show you why Foodtopia needs our produce!
              </p>
              <p className="text-dark font-extralight mb-4">
                Once you master the knowledge of fruit and vegetables, you can take our token with you on the rest of
                your adventure.
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
          <div className="absolute top-0 left-0 w-full h-2 -bg-gradient-to-r -from-[#f44336] -to-[#8bc34a]"></div>

          {/* Activity 1 */}
          <div className="flex justify-between items-center bg-[#f5f5f5] rounded-md p-4 border border-gray-200 mb-4">
            <div className="w-1/2">
              <h3 className="text-dark font-black text-xl">Introduction to Fruit and Vegetables Island</h3>
              <p className="text-dark font-black text-xl">Whakataki ki Motu Huarākau, Huawhenua</p>
            </div>

            <div className="flex gap-4">
              <div className="relative h-24 w-64">
                <Image
                  src="/images/thumbnail_A2.png"
                  alt="Food bowl"
                  width={484}
                  height={183}
                  className="object-contain rounded-md"
                />
              </div>

              <Link href="/activity/fruit-vegetables-intro" className="w-28 flex">
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
              <h3 className="text-dark font-black text-xl">Guess the colours</h3>
              <p className="text-dark font-black text-xl">He aha ngā tae</p>
            </div>

            <div className="flex gap-4">
              <div className="relative h-24 w-64">
                <Image
                  src="/images/thumbnail_M2.1.png"
                  alt="Fruit colors"
                  width={484}
                  height={183}
                  className="object-contain rounded-md"
                />
              </div>

              <Link href="/activity/colors" className="w-28 flex">
                <button
                  className="bg-[#006400] text-light px-6 py-3 rounded-md font-black flex-1 h-full btn-rounded"
                  onClick={() => startActivityItem("fruit-vegetables", "game", "guess-colors")}
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
                  src="/images/thumbnail_M2.2.png"
                  alt="Supermarket"
                  width={484}
                  height={183}
                  className="object-contain rounded-md"
                />
              </div>

              <Link href="/activity/shopper" className="w-28 flex">
                <button
                  className="bg-[#006400] text-light px-6 py-3 rounded-md font-black flex-1 h-full btn-rounded"
                  onClick={() => startActivityItem("fruit-vegetables", "game", "supermarket-shopper")}
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
                  src="/images/thumbnail_M2.3.png"
                  alt="Vegetables"
                  width={484}
                  height={183}
                  className="object-contain rounded-md"
                />
              </div>

              <Link href="/activity/quiz" className="w-28 flex">
                <button
                  className="bg-[#006400] text-light px-6 py-3 rounded-md font-black flex-1 h-full btn-rounded"
                  onClick={() => startActivityItem("fruit-vegetables", "quiz", "mental-workout")}
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
              <Link href="/island/grains">
                <button
                  className="bg-[#006400] text-light px-8 py-4 rounded-md font-black btn-rounded"
                  onClick={() => startActivityItem("fruit-vegetables", "navigation", "next-island")}
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
