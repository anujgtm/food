export interface Activity {
  id: number
  session_id: string
  started_at: string
  completed_at: string | null
  is_completed: boolean
}

export interface ActivityItem {
  id: number
  activity_id: number
  page_slug: string
  item_type: "quiz" | "video" | "game"
  item_name: string
  started_at: string
  completed_at: string | null
  is_completed: boolean
  score: number | null
  data: any
}

export interface PageCompletion {
  id: number
  activity_id: number
  page_slug: string
  completed_at: string
}

export interface Page {
  id: number
  slug: string
  title: string
  description: string | null
  created_at: string
}

export interface QuizQuestion {
  id: number
  question: string
  type: "text" | "radio" | "checkbox"
  options: string[]
  correctAnswer: number
}

export interface QuizResponse {
  questionId: number
  textAnswer?: string
  selectedOption?: number
}
