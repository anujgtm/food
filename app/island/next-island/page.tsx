"use client"

import Link from "next/link"
import Image from "next/image"
import { NavigationGuard } from "@/components/navigation-guard"

export default function NextIsland() {
  return (
    <NavigationGuard
      requiredActivities={[
        { page: "fruit-vegetables", type: "video", name: "fruit-vegetables-intro" },
        { page: "fruit-vegetables", type: "game", name: "guess-colors" },
        { page: "fruit-vegetables", type: "game", name: "supermarket-shopper" },
        { page: "fruit-vegetables", type: "quiz", name: "mental-workout" },
      ]}
      redirectTo="/island/fruit-vegetables"
    >
      <main className="min-h-screen bg-black text-white flex flex-col items-center">
        <div className="w-full max-w-5xl mx-auto p-4">
          <div className="flex justify-between items-center w-full mb-8">
            <Link href="/island/fruit-vegetables">
              <button className="bg-[#333] text-light px-4 py-2 rounded-md font-black">Back to Fruit Island</button>
            </Link>
            <div className="relative h-10 w-16">
              <Image
                src="/placeholder.svg?height=40&width=64"
                alt="Food for thought logo"
                width={64}
                height={40}
                className="object-contain"
              />
            </div>
          </div>

          <div className="bg-beige rounded-md p-8 text-dark">
            <h1 className="text-4xl font-black mb-6">Next Island Coming Soon!</h1>
            <p className="text-dark font-extralight mb-4">
              This is a placeholder for the next island in your Foodtopia journey.
            </p>
            <Link href="/">
              <button className="bg-[#006400] text-light px-6 py-3 rounded-md font-black">Back to Home</button>
            </Link>
          </div>
        </div>
      </main>
    </NavigationGuard>
  )
}
