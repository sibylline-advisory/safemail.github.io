import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="h-16 bg-white shadow-sm p-4">
        <Skeleton className="h-8 w-32" />
      </div>
      <main className="flex-1 pt-0">
        <section className="py-20 md:py-32 bg-gradient-brand relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="flex flex-col gap-6">
                <Skeleton className="h-12 w-3/4 mb-2" />
                <Skeleton className="h-12 w-1/2" />
                <Skeleton className="h-6 w-full max-w-[500px]" />
                <Skeleton className="h-6 w-3/4 max-w-[400px]" />
                <div className="mt-2">
                  <Skeleton className="h-12 w-36 rounded-full" />
                </div>
              </div>
              <div className="relative h-[400px] lg:h-[500px]">
                <Skeleton className="h-full w-full rounded-xl" />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <Skeleton className="h-8 w-64 mx-auto mb-4" />
              <Skeleton className="h-4 w-96 mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex flex-col items-center">
                  <Skeleton className="h-16 w-16 rounded-full mb-6" />
                  <Skeleton className="h-4 w-32 mb-4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6 mt-2" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}