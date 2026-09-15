"use client"

import { useEffect, useState, useRef } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import TopMenuBar from "@/components/top-menu-bar"
import { ScrollHintViewport } from "@/components/scroll-overflow-hint"
import { useActivity } from "@/context/activity-context"

export default function ProteinIsland() {
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [allActivitiesCompleted, setAllActivitiesCompleted] = useState(false)
  const router = useRouter()
  const { activityItems, startActivityItem, currentSessionId, markAllActivitiesCompleted } = useActivity()
  const hasRecordedVisit = useRef(false)
  const hasMarkedComplete = useRef(false)

  useEffect(() => {
    // Check if user has completed required activities on the previous island
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

    // All previous island activities must be completed to access this island
    //const canAccess = milkVideoCompleted && milkDragDropCompleted && milkShopperCompleted && milkQuizCompleted
    const quizCompleted = activityItems.some(
      (item) => item.item_type === "quiz" && item.item_name === "initial-quiz" && item.is_completed,
    )
    const canAccess = quizCompleted
    setIsAuthorized(canAccess)

    // Check if all current island activities are completed
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

    // All activities must be completed to enable the continue button
    const allCompleted =
      proteinVideoCompleted && proteinDragDropCompleted && proteinShopperCompleted && proteinQuizCompleted
    setAllActivitiesCompleted(allCompleted)

    setIsLoading(false)

    // Redirect if not authorized
    if (!canAccess && !isLoading) {
      router.push("/island/milk")
    }
  }, [activityItems, router, isLoading])

  // Record page visit when user is authorized
  useEffect(() => {
    if (isAuthorized && !hasRecordedVisit.current && currentSessionId) {
      hasRecordedVisit.current = true
      startActivityItem("protein", "page-visit", "protein-visit")
    }
  }, [isAuthorized, currentSessionId, startActivityItem])

  // Mark page as completed when all activities are done
  useEffect(() => {
    if (allActivitiesCompleted && !hasMarkedComplete.current) {
      hasMarkedComplete.current = true
      markAllActivitiesCompleted("protein")
    }
  }, [allActivitiesCompleted, markAllActivitiesCompleted])

  const handleWatchClick = async () => {
    // Start tracking the video activity
    const activityItem = await startActivityItem("protein", "video", "protein-intro")

    if (activityItem && currentSessionId) {
      // In a real implementation, you would complete this when the video ends
      // For now, we'll simulate completion after navigation
      sessionStorage.setItem(`pendingVideoCompletion_${currentSessionId}_protein`, activityItem.id.toString())
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
        <div className="relative w-full bg-[#260B74] rounded-b-md overflow-hidden pt-4">
          <img src="/images/ProteinIsland_Header.png" />
        </div>

        {/* Guardian introduction */}
        <div className="w-full bg-beige rounded-md mt-4 p-6 pb-0 relative overflow-hidden">
          <div className="flex">
            <div className="w-1/4 relative content-end">
              <Image
                src="/images/5_protein.png"
                alt="Eggbert Braveyolk character"
                width={200}
                height={213}
                className="object-contain"
              />
            </div>

            <div className="w-3/4 pl-8 pb-6">
              <p className="text-dark font-extralight mb-4">
                Welcome! I'm gonna fill you in on the wonders of protein and how it helps me kick butt!
              </p>
              <p className="text-dark font-extralight mb-4">
                Let's take a quick lap around the island. You'll see plenty of things that help keep us full, help our
                growing bodies and build strong muscles. That way, you can become a fearless hero like me!
              </p>
              <p className="text-dark font-extralight mb-4">
                Once you know all about how awesome our island is, we'll get you to test your brain and pass a quiz.
                Then, you'll get a token to show that you're a hero, too – and you can show off to the other islands!
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
              <h3 className="text-dark font-black text-xl">Introduction to Protein Island</h3>
              <p className="text-dark font-black text-xl">Whakataki ki te pūmua</p>
            </div>

            <div className="flex gap-4">
              <div className="relative h-24 w-64">
                <Image
                  src="/images/thumbnail_A5.png"
                  alt="Food bowl"
                  width={484}
                  height={183}
                  className="object-contain rounded-md"
                />
              </div>

              <Link href="/activity/protein-intro" className="w-28 flex">
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
              <h3 className="text-dark font-black text-xl">Protein Sorter</h3>
              <p className="text-dark font-black text-xl">Tōtaka</p>
            </div>

            <div className="flex gap-4">
              <div className="relative h-24 w-64">
                <Image
                  src="/images/thumbnail_M5.1.png"
                  alt="Food bowl"
                  width={484}
                  height={183}
                  className="object-contain rounded-md"
                />
              </div>

              <Link href="/activity/protein-drag-drop" className="w-28 flex">
                <button
                  className="bg-[#006400] text-light px-6 py-3 rounded-md font-black flex-1 h-full btn-rounded"
                  onClick={() => startActivityItem("protein", "game", "drag-drop")}
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
                  src="/images/thumbnail_M5.2.png"
                  alt="Food bowl"
                  width={484}
                  height={183}
                  className="object-contain rounded-md"
                />
              </div>

              <Link href="/activity/protein-shopper" className="w-28 flex">
                <button
                  className="bg-[#006400] text-light px-6 py-3 rounded-md font-black flex-1 h-full btn-rounded"
                  onClick={() => startActivityItem("protein", "game", "supermarket-shopper")}
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

              <Link href="/activity/protein-quiz" className="w-28 flex">
                <button
                  className="bg-[#006400] text-light px-6 py-3 rounded-md font-black flex-1 h-full btn-rounded"
                  onClick={() => startActivityItem("protein", "quiz", "mental-workout")}
                >
                  Start
                </button>
              </Link>
            </div>
          </div>
        </ScrollHintViewport>

        {/* Footer section */}
        {/*
        <div className="w-full mt-8 mb-8 flex flex-col items-center justify-center">
          <h2 className="text-light text-3xl font-black mb-2">Ready to head to Foodtopia?</h2>
          <p className="text-light text-center mb-6 font-extralight">
            When you've completed all the activities on this island press Continue to travel to Foodtopia.
          </p>

          <TooltipProvider>
            {allActivitiesCompleted ? (
              <Link href="/island/foodtopia">
                <button
                  className="bg-[#006400] text-light px-8 py-4 rounded-md font-black btn-rounded"
                  onClick={() => startActivityItem("protein", "navigation", "next-island")}
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
