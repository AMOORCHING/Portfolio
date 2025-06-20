import Link from 'next/link'
import { Metadata } from 'next'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: '404 - Page Not Found | Akash Moorching',
  description: 'The page you are looking for does not exist. Return to Akash Moorching\'s portfolio homepage.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-65px)] px-4 bg-[#f5f5f5]">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-neue-montreal font-medium text-gray-800 mb-20">Page Not Found :(</h1>
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block px-10 py-3 bg-[#0100FF] text-white hover:bg-[#0000ffbb] transition-colors font-supply-mono text-lg"
            >
              Go Home
            </Link>
            <div className="text-xs text-gray-400 font-supply-mono">
              or <Link href="/about" className="underline hover:text-gray-600">learn more about me</Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
} 