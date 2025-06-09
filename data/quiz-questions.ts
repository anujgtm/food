import type { QuizQuestion } from "@/types/database"

export const initialQuizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "How many students are using this device?",
    type: "text",
    options: [],
    correctAnswer: -1, // Not applicable for text input
  },
  {
    id: 2,
    question: "Are you completing this activity at home or at school?",
    type: "radio",
    options: ["Home", "School"],
    correctAnswer: -1, // "Yes" is the correct answer
  },
]
