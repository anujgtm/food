"use client"

import { useState, useEffect, useRef } from "react"
import TopMenuBar from "@/components/top-menu-bar"
import { HeroSection } from "@/components/hero-section"
import { InfoSection } from "@/components/info-section"
import { IntroductionSection } from "@/components/introduction-section"
import { GetStartedSection } from "@/components/get-started-section"
import { QuizModal } from "@/components/quiz-modal"
import { useActivity } from "@/context/activity-context"

export default function Home() {
  const [showQuiz, setShowQuiz] = useState(false)
  const { isLoading, activityItems, currentSessionId, markAllActivitiesCompleted } = useActivity()
  const checkedRef = useRef(false)
  const hasMarkedComplete = useRef(false)

  useEffect(() => {
    // Prevent multiple checks
    if (checkedRef.current || isLoading || !currentSessionId) return

    // Check if the quiz has been completed in the current session
    const quizCompleted = activityItems.some(
      (item) => item.item_type === "quiz" && item.item_name === "initial-quiz" && item.is_completed,
    )

    // Show quiz if it hasn't been completed in this session
    setShowQuiz(!quizCompleted)
    checkedRef.current = true
  }, [isLoading, activityItems, currentSessionId])

  // Mark home page as completed when quiz is done
  useEffect(() => {
    if (hasMarkedComplete.current || isLoading || !currentSessionId) return

    const quizCompleted = activityItems.some(
      (item) => item.item_type === "quiz" && item.item_name === "initial-quiz" && item.is_completed,
    )

    if (quizCompleted) {
      hasMarkedComplete.current = true
      markAllActivitiesCompleted("home")
    }
  }, [activityItems, isLoading, currentSessionId, markAllActivitiesCompleted])

  const handleQuizComplete = () => {
    setShowQuiz(false)
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center">
      <div className="w-full max-w-5xl mx-auto">
        <TopMenuBar />
        <HeroSection />
        <InfoSection />
        <IntroductionSection />
        <GetStartedSection />

        {showQuiz && <QuizModal onComplete={handleQuizComplete} />}
      </div>
    </main>
  )
}
