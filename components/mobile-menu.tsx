"use client"

import Link from "next/link"
import ScrollLink from "@/components/scroll-link"

export default function MobileMenu() {
  const closeMenu = () => {
    document.body.classList.remove("overflow-hidden")
    document.getElementById("mobile-menu")?.classList.remove("translate-y-0")
    document.getElementById("mobile-menu")?.classList.add("-translate-y-full")
  }

  return (
    <div
      id="mobile-menu"
      className="fixed top-[73px] left-0 right-0 bottom-0 bg-white z-40 transform -translate-y-full transition-transform duration-300 ease-in-out md:hidden overflow-auto"
    >
      <div className="container mx-auto px-4 py-6">
        <nav className="flex flex-col space-y-6">
          <ScrollLink
            href="#how-it-works"
            className="text-lg font-medium text-slate-900 hover:text-primary py-2"
            onClick={closeMenu}
          >
            How It Works
          </ScrollLink>
          <ScrollLink
            href="#features"
            className="text-lg font-medium text-slate-900 hover:text-primary py-2"
            onClick={closeMenu}
          >
            Features
          </ScrollLink>
          <ScrollLink
            href="#pricing"
            className="text-lg font-medium text-slate-900 hover:text-primary py-2"
            onClick={closeMenu}
          >
            Pricing
          </ScrollLink>
          <div className="pt-4 border-t border-slate-100">
            <ScrollLink
              href="#try-now"
              className="mt-4 inline-block bg-gradient-brand text-white px-6 py-3 rounded-full text-base font-medium"
              onClick={closeMenu}
            >
              Try for Free
            </ScrollLink>
          </div>
        </nav>
      </div>
    </div>
  )
}
