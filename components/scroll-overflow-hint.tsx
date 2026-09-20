"use client"

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react"

import { ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils"

type OverflowMetrics = {
  canScroll: boolean
  moreBelow: boolean
  progressPct: number
}

function metricsFromElement(el: HTMLElement): OverflowMetrics {
  const { scrollTop, scrollHeight, clientHeight } = el

  const overflow = scrollHeight - clientHeight
  const canScroll = overflow > 8
  const moreBelow = canScroll && scrollTop < overflow - 8

  const progressPct = canScroll
    ? Math.min((scrollTop / overflow) * 100, 100)
    : 0

  return {
    canScroll,
    moreBelow,
    progressPct,
  }
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
        "pointer-events-none z-10 flex flex-col items-center rounded-full bg-[#191919] shadow-md ring-2 ring-[#EEE7DC]",
        className,
      )}
      aria-hidden
    >
      <div className="relative w-[14px] flex-1 rounded-full bg-[#191919]">
        {/* Green scroll progress */}
        <div
          className={cn(
            "absolute left-0 right-0 top-0 bg-[#AAC335]",
            metrics.moreBelow ? "rounded-t-full" : "rounded-full",
          )}
          style={{
            height: `${metrics.progressPct}%`,
          }}
        />

        {/* Scroll hint arrow */}
        {metrics.moreBelow && (
          <div
            className="absolute left-1/2 flex h-[26px] w-[26px] -translate-x-1/2 items-center justify-center rounded-full border-2 border-black bg-[#006400]"
            style={{
              top: `calc(${metrics.progressPct}% - 13px)`,
            }}
          >
            <ArrowDown
              className="h-[16px] w-[16px] text-white"
              strokeWidth={3}
            />
          </div>
        )}
      </div>
    </div>
  )
}

function ScrollRail({
  metrics,
}: {
  metrics: OverflowMetrics
}) {
  if (!metrics.canScroll) return null

  return (
    <ScrollTrack
      metrics={metrics}
      className="absolute right-1.5 top-3 bottom-3 w-[14px]"
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
    progressPct: 0,
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

    Array.from(el.children).forEach((child) => {
      observer.observe(child)
    })

    el.addEventListener("scroll", update, {
      passive: true,
    })

    window.addEventListener("resize", update)

    return () => {
      observer.disconnect()

      el.removeEventListener("scroll", update)

      window.removeEventListener("resize", update)
    }
  }, [update])

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={style}
    >
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
    progressPct: 0,
  })

  useEffect(() => {
    const update = () => {
      const scrolling =
        document.scrollingElement ?? document.documentElement

      setMetrics(metricsFromElement(scrolling as HTMLElement))
    }

    update()

    const observer = new ResizeObserver(update)

    observer.observe(document.documentElement)
    observer.observe(document.body)

    window.addEventListener("scroll", update, {
      passive: true,
    })

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
      className="fixed right-2 top-1/2 z-[60] h-44 w-[14px] -translate-y-1/2"
    />
  )
}