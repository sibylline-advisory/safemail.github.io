"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function MobileMenuToggle() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    document.body.classList.toggle("overflow-hidden")
    document.getElementById("mobile-menu")?.classList.toggle("translate-y-0")
    document.getElementById("mobile-menu")?.classList.toggle("-translate-y-full")
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const mobileMenu = document.getElementById("mobile-menu")
      if (isOpen && mobileMenu && !mobileMenu.contains(event.target as Node)) {
        setIsOpen(false)
        document.body.classList.remove("overflow-hidden")
        mobileMenu.classList.remove("translate-y-0")
        mobileMenu.classList.add("-translate-y-full")
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  // Close menu when ESC key is pressed
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (isOpen && event.key === "Escape") {
        setIsOpen(false)
        document.body.classList.remove("overflow-hidden")
        document.getElementById("mobile-menu")?.classList.remove("translate-y-0")
        document.getElementById("mobile-menu")?.classList.add("-translate-y-full")
      }
    }

    document.addEventListener("keydown", handleEscKey)
    return () => {
      document.removeEventListener("keydown", handleEscKey)
    }
  }, [isOpen])

  return (
    <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
      {isOpen ? <X className="h-6 w-6 text-slate-600" /> : <Menu className="h-6 w-6 text-slate-600" />}
    </Button>
  )
}
