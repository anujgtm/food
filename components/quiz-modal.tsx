"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { initialQuizQuestions } from "@/data/quiz-questions"
import { useActivity } from "@/context/activity-context"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import type { QuizResponse } from "@/types/database"

interface QuizModalProps {
  onComplete: () => void 
}

export function QuizModal({ onComplete }: QuizModalProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [textAnswer, setTextAnswer] = useState("")
  const [selectedOption, setSelectedOption] = useState<number | string | null>(null)
  const [responses, setResponses] = useState<QuizResponse[]>([])
  const [showResults, setShowResults] = useState(false)
  const [activityItemId, setActivityItemId] = useState<number | null>(null)
  const initRef = useRef(false)

  const { startActivityItem, completeActivityItem, currentSessionId, activityItems } = useActivity()

  const questions = initialQuizQuestions
  const currentQuestion = questions[currentQuestionIndex]

  useEffect(() => {
    if (initRef.current) return
    // Before any await: effect can re-fire when activityItems updates (insert) or Strict Mode remounts
    initRef.current = true

    const initQuiz = async () => {
      const existingQuizItem = activityItems.find(
        (item) => item.item_type === "quiz" && item.item_name === "initial-quiz",
      )

      if (existingQuizItem) {
        if (!existingQuizItem.is_completed) {
          setActivityItemId(existingQuizItem.id)
        }
        return
      }

      const activityItem = await startActivityItem("home", "quiz", "initial-quiz")
      if (activityItem) {
        setActivityItemId(activityItem.id)
      }
    }

    void initQuiz()
  }, [startActivityItem, activityItems])

  const handleOptionSelect = (optionIndex: number) => {
    if (currentQuestion.id === 2) {
      // For the second question, store the actual text value
      setSelectedOption(currentQuestion.options[optionIndex])
    } else {
      // For other questions, keep storing the index
      setSelectedOption(optionIndex)
    }
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextAnswer(e.target.value)
  }

  const handleNext = () => {
    // For text question
    if (currentQuestion.type === "text") {
      if (!textAnswer.trim()) return

      // Save response
      setResponses([
        ...responses,
        {
          questionId: currentQuestion.id,
          textAnswer: textAnswer,
        },
      ])
    }
    // For radio question
    else if (currentQuestion.type === "radio") {
      if (selectedOption === null) return

      // Save response
      setResponses([
        ...responses,
        {
          questionId: currentQuestion.id,
          selectedOption:
            typeof selectedOption === "number"
              ? selectedOption
              : currentQuestion.options.indexOf(selectedOption as string),
          textAnswer: typeof selectedOption === "string" ? selectedOption : undefined,
        },
      ])
    }

    // Move to next question or show results
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
      setTextAnswer("")
      setSelectedOption(null)
    } else {
      handleFinish();
      //setShowResults(true)

      // Complete the activity item and store responses in Supabase
      if (activityItemId) {
        let newResponses

        if (currentQuestion.type === "text") {
          newResponses = [...responses, { questionId: currentQuestion.id, textAnswer }]
        } else if (currentQuestion.type === "radio") {
          newResponses = [
            ...responses,
            {
              questionId: currentQuestion.id,
              selectedOption:
                typeof selectedOption === "number"
                  ? selectedOption
                  : currentQuestion.options.indexOf(selectedOption as string),
              textAnswer: typeof selectedOption === "string" ? selectedOption : undefined,
            },
          ]
        } else {
          newResponses = responses
        }

        completeActivityItem(activityItemId, 100, {
          responses: newResponses,
          completed: true,
        })

        // Store completion in sessionStorage with the session ID to make it session-specific
        if (currentSessionId) {
          sessionStorage.setItem(`quizCompleted_${currentSessionId}`, "true")
        }
      }
    }
  }

  const handleFinish = () => {
    onComplete()
  }

  const renderQuestion = () => {
    if (currentQuestion.type === "text") {
      return (
        <div className="space-y-4 quiz-modal-form">
          <p className="text-dark font-extralight mb-4">{currentQuestion.question}</p>
          <Input
            type="text"
            value={textAnswer}
            onChange={handleTextChange}
            placeholder="Type your answer here"
            className="w-full border border-gray-300 rounded-md p-2 text-dark"
            style={{ color: "#191919" }}
          />
        </div>
      )
    } else if (currentQuestion.type === "radio") {
      // Special case for question ID 2 - horizontal buttons
      if (currentQuestion.id === 2) {
        return (
          <div className="space-y-4 quiz-modal-form">
            <p className="text-dark font-extralight mb-4">{currentQuestion.question}</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleOptionSelect(index)}
                  className={`px-6 py-3 rounded-full border-2 transition-all ${
                    selectedOption === option
                      ? "bg-[#006400] text-white border-[#006400]"
                      : "bg-white text-dark border-gray-300 hover:border-[#006400]"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )
      }

      // Standard radio buttons for other questions
      return (
        <div className="space-y-4 quiz-modal-form">
          <p className="text-dark font-extralight mb-4">{currentQuestion.question}</p>
          <RadioGroup
            value={typeof selectedOption === "number" ? selectedOption?.toString() : (selectedOption as string)}
            className="space-y-3"
          >
            {currentQuestion.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem
                  id={`option-${index}`}
                  value={index.toString()}
                  onClick={() => handleOptionSelect(index)}
                  className="h-4 w-4 border-2 border-gray-500 radio-item"
                  style={{
                    borderColor: selectedOption === index || selectedOption === option ? "#006400" : "#666",
                    backgroundColor: selectedOption === index || selectedOption === option ? "#006400" : "transparent",
                  }}
                />
                <Label htmlFor={`option-${index}`} className="text-dark font-extralight">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      )
    }
    return null
  }

  const isNextDisabled = () => {
    if (currentQuestion.type === "text") {
      return !textAnswer.trim()
    } else if (currentQuestion.type === "radio") {
      return selectedOption === null
    }
    return true
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md bg-white shadcn-card">
        {!showResults ? (
          <>
            <CardHeader>
              <CardTitle className="text-dark font-black text-xl">
                Question {currentQuestionIndex + 1} of {questions.length}
              </CardTitle>
            </CardHeader>
            <CardContent>{renderQuestion()}</CardContent>
            <CardFooter className="flex justify-end">
              <button
                onClick={handleNext}
                disabled={isNextDisabled()}
                className="bg-[#006400] text-light px-4 py-2 rounded-md btn-rounded"
              >
                {currentQuestionIndex < questions.length - 1 ? "Next" : "Finish"}
              </button>
            </CardFooter>
          </>
        ) : (
          <>
            <CardHeader>
              <CardTitle className="text-dark font-black text-xl">Thank You!</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-dark font-extralight mb-2">Thanks for sharing your information with us.</p>
              <p className="text-dark font-extralight">You can now explore Foodtopia!</p>
            </CardContent>
            <CardFooter className="flex justify-end">
              <button onClick={handleFinish} className="bg-[#006400] text-light px-4 py-2 rounded-md btn-rounded">
                Continue to Foodtopia
              </button>
            </CardFooter>
          </>
        )}
      </Card>
    </div>
  )
}
