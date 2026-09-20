"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const menuItems = [
  {
    href: "/",
    label: "Welcome!",
    color: "#191919",
    buttonClass: "bg-[#191919] hover:bg-[#191919]",
  },
  {
    href: "/island/fruit-vegetables",
    label: "Fruit & Vegetables",
    color: "#0C5F0F",
    buttonClass: "bg-[#0C5F0F] hover:bg-[#0C5F0F]",
  },
  {
    href: "/island/grains",
    label: "Grain Foods",
    color: "#8F5C31",
    buttonClass: "bg-[#8F5C31] hover:bg-[#8F5C31]",
  },
  {
    href: "/island/milk",
    label: "Milk Products",
    color: "#0B4474",
    buttonClass: "bg-[#0B4474] hover:bg-[#0B4474]",
  },
  {
    href: "/island/protein",
    label: "Protein",
    color: "#260B74",
    buttonClass: "bg-[#260B74] hover:bg-[#260B74]",
  },
  {
    href: "/island/foodtopia",
    label: "Foodtopia Castle",
    color: "#C52436",
    buttonClass: "bg-[#C52436] hover:bg-[#C52436]",
  },
]

export default function TopMenuBar() {
  const pathname = usePathname()

  return (
    <div className="flex justify-between bg-[#ffffff] p-0 btn-rounded menu-bar">
      {menuItems.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href)

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`w-1/6 m-0 flex menu-bar-item ${
              isActive ? "active border-b-2" : ""
            }`}
            style={isActive ? { borderBottomColor: item.color } : undefined}
          >
            <button
              className={`${item.buttonClass} text-light px-6 py-3 rounded-md text-sm font-semibold flex-1 h-full btn-rounded`}
            >
              {item.label}
            </button>
          </Link>
        )
      })}
    </div>
  )
}