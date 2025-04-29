"use client"

import type React from "react"

import type { ReactNode } from "react"
import Link from "next/link"

interface ScrollLinkProps {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

export default function ScrollLink({ href, children, className = "", onClick }: ScrollLinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()

    // Extract the target ID from the href
    const targetId = href.replace(/.*#/, "")
    const element = document.getElementById(targetId)

    if (element) {
      // Scroll to the element
      element.scrollIntoView({ behavior: "smooth" })

      // Call additional onClick handler if provided
      if (onClick) onClick()
    }
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}
