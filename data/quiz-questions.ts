import type { QuizQuestion } from "@/types/database"

export const initialQuizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the name of your school?",
    type: "text",
    options: [],
    correctAnswer: -1, // Not applicable for text input
  },
]
