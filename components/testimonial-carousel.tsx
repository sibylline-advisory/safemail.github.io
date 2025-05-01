"use client"

import { useState, useEffect } from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: "Sean P.",
      role: "Founder and CEO",
      company: "Seshat Bank",
      content:
        "In our line of work, information security is paramount. Safemail AI makes identifying potential threats over email easy and helps us keep focused and safe.",
      avatar: "SP",
    },
    {
      name: "Seyi T.",
      role: "Founder",
      company: "Shopthru",
      content:
        "As someone who relies heavily on email for client communications, Safemail gives me a way to quickly identify potential threats without losing focus.",
      avatar: "ST",
    },
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center text-center px-4"
          >
            <Avatar className="h-16 w-16 mb-6">
              <AvatarFallback className="bg-primary/5 text-primary">{testimonials[activeIndex].avatar}</AvatarFallback>
            </Avatar>
            <blockquote className="text-xl mb-6 text-slate-700">"{testimonials[activeIndex].content}"</blockquote>
            <div>
              <p className="font-medium text-slate-900">{testimonials[activeIndex].name}</p>
              <p className="text-sm text-slate-500">
                {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-10 gap-2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-slate-200 text-slate-400 hover:text-slate-900 hover:bg-white"
          onClick={prevTestimonial}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-slate-200 text-slate-400 hover:text-slate-900 hover:bg-white"
          onClick={nextTestimonial}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}