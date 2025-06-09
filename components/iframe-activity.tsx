"use client"

import { useEffect, useRef, useState } from "react"

interface IframeActivityProps {
  src: string
  title: string
  isExternal?: boolean
  onLoad?: () => void
  onMessage?: (data: any) => void
  onComplete?: () => void
  className?: string
}

export function IframeActivity({
  src,
  title,
  isExternal = false,
  onLoad,
  onMessage,
  onComplete,
  className = "",
}: IframeActivityProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [iframeHeight, setIframeHeight] = useState(600)

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Only process messages from our iframe
      if (iframeRef.current && event.source === iframeRef.current.contentWindow) {
        try {
          const data = event.data
          if (onMessage) {
            onMessage(data)
          }

          // Auto-complete if the message indicates completion
          if (data && typeof data === "object" && data.type === "activity-complete" && onComplete) {
            onComplete()
          }

          // Adjust height if requested
          if (data && typeof data === "object" && data.type === "resize" && typeof data.height === "number") {
            setIframeHeight(data.height)
          }
        } catch (error) {
          console.error("Error processing iframe message:", error)
        }
      }
    }

    window.addEventListener("message", handleMessage)
    return () => {
      window.removeEventListener("message", handleMessage)
    }
  }, [onMessage, onComplete])

  const handleIframeLoad = () => {
    if (onLoad) {
      onLoad()
    }
  }

  return (
    <iframe
      ref={iframeRef}
      src={src}
      title={title}
      width="100%"
      height={iframeHeight}
      className={`border-0 rounded-md ${className}`}
      onLoad={handleIframeLoad}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )
}
