'use client'
 
import { Button } from '@/components/ui/button'
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center">
          <div className="text-center px-4 py-10 md:py-20">
            <h1 className="text-4xl font-bold text-red-500 mb-4">Critical Error</h1>
            <p className="text-slate-600 max-w-[500px] mx-auto mb-8">
              The application encountered a critical error and cannot continue.
              Our engineering team has been automatically notified.
            </p>
            <Button onClick={() => reset()} variant="default">
              Try again
            </Button>
          </div>
        </div>
      </body>
    </html>
  )
}