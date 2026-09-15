"use client"

import { useCallback, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

type OverflowMetrics = {
  canScroll: boolean
  moreBelow: boolean
  thumbHeightPct: number
  thumbTopPct: number
}

function metricsFromElement(el: HTMLElement): OverflowMetrics {
  const { scrollTop, scrollHeight, clientHeight } = el
  const overflow = scrollHeight - clientHeight
  const canScroll = overflow > 8
  const moreBelow = canScroll && scrollTop < overflow - 8
  const thumbHeightPct = canScroll ? Math.max((clientHeight / scrollHeight) * 100, 12) : 100
  const thumbTopPct = canScroll ? (scrollTop / scrollHeight) * 100 : 0
  return { canScroll, moreBelow, thumbHeightPct, thumbTopPct }
}

function ScrollTrack({
  metrics,
  className,
}: {
  metrics: OverflowMetrics
  className?: string
}) {
  return (
    <div
      className={cn(
        "pointer-events-none z-10 flex flex-col items-center rounded-full bg-[#191919] px-1.5 py-2 shadow-md ring-2 ring-[#EEE7DC]",
        className,
      )}
      aria-hidden
    >
      <div className="relative w-1.5 flex-1 rounded-full bg-[#EEE7DC]/35">
        <div
          className="absolute left-0 right-0 rounded-full bg-[#8fd98a]"
          style={{
            height: `${metrics.thumbHeightPct}%`,
            top: `${metrics.thumbTopPct}%`,
          }}
        />
      </div>
      {metrics.moreBelow && (
        <ChevronDown className="mt-1 h-5 w-5 shrink-0 text-[#EEE7DC] animate-bounce" strokeWidth={3} />
      )}
    </div>
  )
}

function ScrollRail({ metrics }: { metrics: OverflowMetrics }) {
  if (!metrics.canScroll) return null

  return (
    <ScrollTrack
      metrics={metrics}
      className="absolute right-1.5 top-3 bottom-3 w-7"
    />
  )
}

export function ScrollHintViewport({
  children,
  className,
  style,
}: {
  children: ReactNode
  className?: string
  style?: CSSProperties
}) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [metrics, setMetrics] = useState<OverflowMetrics>({
    canScroll: false,
    moreBelow: false,
    thumbHeightPct: 100,
    thumbTopPct: 0,
  })

  const update = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setMetrics(metricsFromElement(el))
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    update()
    const observer = new ResizeObserver(update)
    observer.observe(el)
    Array.from(el.children).forEach((child) => observer.observe(child))
    el.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)

    return () => {
      observer.disconnect()
      el.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [update])

  return (
    <div className={cn("relative overflow-hidden", className)} style={style}>
      <div
        ref={scrollRef}
        className="h-full overflow-y-auto overflow-x-hidden p-6 pr-11 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>
      <ScrollRail metrics={metrics} />
      {metrics.moreBelow && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-14 bg-gradient-to-t from-black/25 to-transparent" />
      )}
    </div>
  )
}

export function PageScrollHint() {
  const [metrics, setMetrics] = useState<OverflowMetrics>({
    canScroll: false,
    moreBelow: false,
    thumbHeightPct: 100,
    thumbTopPct: 0,
  })

  useEffect(() => {
    const update = () => {
      const scrolling = document.scrollingElement ?? document.documentElement
      setMetrics(metricsFromElement(scrolling as HTMLElement))
    }

    update()
    const observer = new ResizeObserver(update)
    observer.observe(document.documentElement)
    observer.observe(document.body)
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  if (!metrics.canScroll) return null

  return (
    <ScrollTrack
      metrics={metrics}
      className="fixed right-2 top-1/2 z-[60] h-44 w-7 -translate-y-1/2"
    />
  )
}
