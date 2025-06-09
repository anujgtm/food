import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { ActivityProvider } from "@/context/activity-context"
import "./globals.css"

// Load Poppins font with multiple weights
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "900"], // 200 for Extra Light, 900 for Black
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Nutrition Quest",
  description: "Welcome to Foodtopia - Food Group Islands Adventure",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        <ActivityProvider>{children}</ActivityProvider>
      </body>
    </html>
  )
}
