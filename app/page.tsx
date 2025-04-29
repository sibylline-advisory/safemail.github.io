import { Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { Shield, FileCheck, Zap, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import HeroAnimation from "@/components/hero-animation"
import TestimonialCarousel from "@/components/testimonial-carousel"
import PricingTable from "@/components/pricing-table"
import TrustedBy from "@/components/trusted-by"
import HowItWorks from "@/components/how-it-works"
import ScrollLink from "@/components/scroll-link"
import ScrollToTop from "@/components/scroll-to-top"
import StickyHeader from "@/components/sticky-header"
import MobileMenu from "@/components/mobile-menu"
import { Skeleton } from "@/components/ui/skeleton"

export const metadata = {
  title: "Email Security, Simplified",
  description: "Forward any suspicious email and get instant analysis. No installation. No configuration needed.",
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <StickyHeader />
      <MobileMenu />

      <main className="flex-1 pt-0">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-brand relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10"></div>
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="flex flex-col gap-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white">
                  Email security,
                  <span className="block"> simplified.</span>
                </h1>
                <p className="text-xl text-white/80 max-w-[500px]">
                  Forward any suspicious email and get instant analysis. No installation. No configuration.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                  <Button size="lg" className="rounded-full px-6 bg-white text-primary-dark hover:bg-white/90" asChild>
                    <ScrollLink href="#pricing">
                      <span>Try for Free</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </ScrollLink>
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] lg:h-[500px]">
                <Suspense fallback={<Skeleton className="h-full w-full rounded-xl" />}>
                  <HeroAnimation />
                </Suspense>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-24 md:py-32 bg-gradient-to-b from-white to-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900">How It Works</h2>
              <p className="text-slate-600 mt-6 max-w-[700px] mx-auto text-xl">Start protecting your business in under 60 seconds</p>
            </div>
            <Suspense fallback={
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <Skeleton className="h-20 w-20 rounded-full mb-6" />
                    <Skeleton className="h-6 w-40 mb-4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6 mt-2" />
                  </div>
                ))}
              </div>
            }>
              <div className="max-w-5xl mx-auto">
                <HowItWorks />
              </div>
            </Suspense>
            <div className="mt-16 text-center">
              <Button size="lg" className="rounded-full px-8 bg-gradient-brand text-white hover:bg-blue-600" asChild>
                <ScrollLink href="#pricing">
                  <span>Get Started Free</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </ScrollLink>
              </Button>
            </div>
          </div>
        </section>

        {/* Threats We Detect Section */}
        <section id="features" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-medium tracking-tight text-slate-900">Threats We Detect</h2>
              <p className="text-slate-600 mt-4 max-w-[600px] mx-auto">
                Our advanced security engine identifies these common email threats
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-none shadow-sm bg-white">
                <CardContent className="pt-6">
                  <Shield className="h-10 w-10 text-primary mb-6" />
                  <h3 className="text-xl font-medium mb-2 text-slate-900">Sophisticated Phishing</h3>
                  <p className="text-slate-600">
                    Detects impersonation attempts, fake login pages, and social engineering tactics
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-sm bg-white">
                <CardContent className="pt-6">
                  <FileCheck className="h-10 w-10 text-primary mb-6" />
                  <h3 className="text-xl font-medium mb-2 text-slate-900">Malicious Attachments</h3>
                  <p className="text-slate-600">
                    Identifies dangerous file types, hidden malware, and ransomware attempts
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-sm bg-white">
                <CardContent className="pt-6">
                  <Zap className="h-10 w-10 text-primary mb-6" />
                  <h3 className="text-xl font-medium mb-2 text-slate-900">Unsafe Links</h3>
                  <p className="text-slate-600">Spots credential harvesters, malware distribution sites, and scam pages</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section id="testimonials" className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-medium tracking-tight text-slate-900">What Our Users Say</h2>
              <p className="text-slate-600 mt-4 max-w-[600px] mx-auto">
                See why companies across industries rely on Safemail AI
              </p>
            </div>
            <Suspense fallback={<Skeleton className="h-64 w-full rounded-xl" />}>
              <TestimonialCarousel />
            </Suspense>
            <div className="mt-20">
              <Suspense fallback={<Skeleton className="h-12 w-full" />}>
                <TrustedBy />
              </Suspense>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-medium tracking-tight text-slate-900">Pricing Plans</h2>
              <p className="text-slate-600 mt-4 max-w-[600px] mx-auto">Choose the plan that fits your security needs</p>
            </div>
            <Suspense fallback={
              <div className="grid gap-8 md:grid-cols-3">
                {[...Array(3)].map((_, i) => (
                  <Skeleton key={i} className="h-[500px] w-full rounded-xl" />
                ))}
              </div>
            }>
              <PricingTable />
            </Suspense>
          </div>
        </section>

        {/* CTA Section */}
        <section id="try-now" className="py-20 bg-gradient-brand relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10"></div>
          <div className="container mx-auto px-4 md:px-6 text-center relative">
            <div className="max-w-[600px] mx-auto">
              <h2 className="text-3xl font-medium tracking-tight text-white">Start Securing Your Emails Today</h2>
              <p className="mt-4 text-white/80 text-lg">
                Forward your first suspicious email and experience the peace of mind that comes with Safemail AI
              </p>
              <div className="mt-8">
                <Button size="lg" className="rounded-full px-8 bg-white text-primary-dark hover:bg-white/90" asChild>
                  <ScrollLink href="#features">Learn More</ScrollLink>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* About Us Section */}
        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-medium tracking-tight text-slate-900">About Us</h2>
            </div>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-slate-600 text-lg mb-6">
                Safemail was created by product executives and cyber security experts coming from leading firms including Accenture, Revolut, and PwC.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="/safemail_ai_logo.png" alt="Safemail AI Logo" width={32} height={32} className="h-8 w-8" priority />
                <span className="text-lg font-medium text-white">Safemail AI</span>
              </div>
              <p className="text-slate-400 text-sm">Instant email security with zero configuration.</p>
            </div>
            <div>
              <h3 className="font-medium text-sm text-white mb-4">Product</h3>
              <ul className="space-y-3">
                <li>
                  <ScrollLink href="#features" className="text-slate-400 hover:text-white text-sm">
                    Features
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink href="#pricing" className="text-slate-400 hover:text-white text-sm">
                    Pricing
                  </ScrollLink>
                </li>
                <li>
                  <Link href="/enterprise" className="text-slate-400 hover:text-white text-sm">
                    Enterprise
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-sm text-white mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <ScrollLink href="#about" className="text-slate-400 hover:text-white text-sm">
                    About Us
                  </ScrollLink>
                </li>
                <li>
                  <Link href="/blog" className="text-slate-400 hover:text-white text-sm">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="mailto:contact@sibylline.group" className="text-slate-400 hover:text-white text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-sm text-white mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/privacy" className="text-slate-400 hover:text-white text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-slate-400 hover:text-white text-sm">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-400">© {new Date().getFullYear()} Sibylline Group. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="https://twitter.com" className="text-slate-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link href="https://linkedin.com" className="text-slate-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  )
}
