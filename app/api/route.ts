import { NextResponse } from 'next/server'
 
export async function GET() {
  return NextResponse.json(
    { message: 'Safemail API is operational' },
    { status: 200 }
  )
}

export const runtime = 'edge'
export const preferredRegion = 'auto'
export const dynamic = 'force-dynamic'