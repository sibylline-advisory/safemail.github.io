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
          <Image src="/Safemail AI Logo.png" alt="Safemail AI Logo" width={40} height={40} className="h-10 w-10" />
          <span className="text-xl font-medium text-slate-900">Safemail AI</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <ScrollLink href="#how-it-works" className="text-sm text-slate-600 hover:text-primary transition-colors">
            How It Works
          </ScrollLink>
          <ScrollLink href="#features" className="text-sm text-slate-600 hover:text-primary transition-colors">
            Features
          </ScrollLink>
          <ScrollLink href="#pricing" className="text-sm text-slate-600 hover:text-primary transition-colors">
            Pricing
          </ScrollLink>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm text-slate-600 hover:text-primary transition-colors hidden md:block">
            Log in
          </Link>
          <Button
            asChild
            size="sm"
            variant="outline"
            className="rounded-full border-primary text-primary hover:bg-primary/5"
          >
            <ScrollLink href="#try-now">Try for Free</ScrollLink>
          </Button>
          <MobileMenuToggle />
        </div>
      </div>
    </header>
  )
}
