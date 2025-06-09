"use client"

import { useState, useEffect, useRef } from "react"

interface VimeoPlayerProps {
  videoId: string
  autoplay?: boolean
  loop?: boolean
  title?: boolean
  byline?: boolean
  portrait?: boolean
  color?: string
  className?: string
  onReady?: () => void
  onPlay?: () => void
  onPause?: () => void
  onEnd?: () => void
}

export function VimeoPlayer({
  videoId,
  autoplay = false,
  loop = false,
  title = true,
  byline = true,
  portrait = true,
  color = "00adef",
  className = "",
  onReady,
  onPlay,
  onPause,
  onEnd,
}: VimeoPlayerProps) {
  const [playerReady, setPlayerReady] = useState(false)
  const loaderTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    // Create a message listener for Vimeo events
    const handleMessage = (event: MessageEvent) => {
      // Only process messages from Vimeo
      if (!event.origin.match(/^https?:\/\/(player\.)?vimeo\.com/)) return

      try {
        const data = typeof event.data === "string" ? JSON.parse(event.data) : event.data

        // Check if this is a Vimeo player event
        if (data && typeof data === "object" && "event" in data) {
          if (data.event === "ready") {
            console.log("Vimeo player ready")
            setPlayerReady(true)
            if (onReady) onReady()

            // Clear the timeout if it exists
            if (loaderTimeoutRef.current) {
              clearTimeout(loaderTimeoutRef.current)
            }
          } else if (data.event === "play" && onPlay) {
            onPlay()
          } else if (data.event === "pause" && onPause) {
            onPause()
          } else if (data.event === "ended" && onEnd) {
            onEnd()
          }
        }
      } catch (error) {
        console.error("Error processing Vimeo message:", error)
      }
    }

    window.addEventListener("message", handleMessage)

    // Set a fallback timeout to hide the loader after 5 seconds
    // in case we miss the ready event
    loaderTimeoutRef.current = setTimeout(() => {
      if (!playerReady) {
        console.log("Forcing player ready state after timeout")
        setPlayerReady(true)
      }
    }, 5000)

    return () => {
      window.removeEventListener("message", handleMessage)
      if (loaderTimeoutRef.current) {
        clearTimeout(loaderTimeoutRef.current)
      }
    }
  }, [onReady, onPlay, onPause, onEnd, playerReady])

  // Construct the Vimeo URL with parameters
  const vimeoUrl = `https://player.vimeo.com/video/${videoId}?autoplay=${autoplay ? 1 : 0}&loop=${
    loop ? 1 : 0
  }&title=${title ? 1 : 0}&byline=${byline ? 1 : 0}&portrait=${portrait ? 1 : 0}&color=${color.replace(
    "#",
    "",
  )}&api=1&player_id=vimeo_player_${videoId}`

  return (
    <div className={`relative w-full aspect-video ${className}`}>
      <iframe
        ref={iframeRef}
        src={vimeoUrl}
        className="absolute top-0 left-0 w-full h-full"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Vimeo Video Player"
        id={`vimeo_player_${videoId}`}
      ></iframe>
      {!playerReady && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 pointer-events-none">
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  )
}
