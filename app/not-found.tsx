import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Not Found',
}

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex flex-1 items-center justify-center">
        <div className="text-center px-4 py-10 md:py-20">
          <h1 className="text-6xl md:text-8xl font-bold text-primary">404</h1>
          <h2 className="text-2xl md:text-3xl font-medium mt-4 mb-6 text-slate-900">Page Not Found</h2>
          <p className="text-slate-600 max-w-[500px] mx-auto mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button asChild>
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}