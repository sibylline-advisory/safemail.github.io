"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import ScrollLink from "@/components/scroll-link"
import MobileMenuToggle from "@/components/mobile-menu-toggle"

export default function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm py-4" : "bg-white py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/safemail_ai_logo.png" alt="Safemail AI Logo" width={40} height={40} className="h-10 w-10" />
          <span className="text-xl font-medium text-slate-900">Safemail AI</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6 mr-4">
            <ScrollLink 
              href="#how-it-works" 
              className="text-sm text-slate-600 hover:text-primary transition-colors relative group"
            >
              How It Works
              <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
            </ScrollLink>
            <ScrollLink 
              href="#features" 
              className="text-sm text-slate-600 hover:text-primary transition-colors relative group"
            >
              Features
              <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
            </ScrollLink>
            <ScrollLink 
              href="#pricing" 
              className="text-sm text-slate-600 hover:text-primary transition-colors relative group"
            >
              Pricing
              <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
            </ScrollLink>
          </nav>
          <Button
            asChild
            size="sm"
            variant="outline"
            className="rounded-full border-primary text-primary hover:bg-primary/5"
          >
            <ScrollLink href="#pricing">Try for Free</ScrollLink>
          </Button>
          <MobileMenuToggle />
        </div>
      </div>
    </header>
  )
}
