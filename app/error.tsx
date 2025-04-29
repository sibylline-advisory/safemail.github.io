'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex flex-1 items-center justify-center">
        <div className="text-center px-4 py-10 md:py-20">
          <h1 className="text-3xl md:text-4xl font-bold text-red-500 mb-4">Something went wrong</h1>
          <p className="text-slate-600 max-w-[500px] mx-auto mb-8">
            We apologize for the inconvenience. Our team has been notified about this issue.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button onClick={() => reset()} variant="default">
              Try again
            </Button>
            <Button asChild variant="outline">
              <Link href="/">Return Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}