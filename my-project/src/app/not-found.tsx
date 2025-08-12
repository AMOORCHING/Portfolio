import Link from 'next/link'
import { Metadata } from 'next'
// import Navbar from '@/components/Navbar'

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
      {/* <Navbar /> */}
      <div className="relative">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="mx-4 flex h-full justify-evenly md:mx-8 lg:mx-36">
            <div className="h-full w-px bg-[repeating-linear-gradient(to_bottom,theme(colors.neutral.300),theme(colors.neutral.300)_4px,transparent_4px,transparent_8px)] opacity-50" />
            <div className="h-full w-px bg-[repeating-linear-gradient(to_bottom,theme(colors.neutral.300),theme(colors.neutral.300)_4px,transparent_4px,transparent_8px)] opacity-50" />
            <div className="h-full w-px bg-[repeating-linear-gradient(to_bottom,theme(colors.neutral.300),theme(colors.neutral.300)_4px,transparent_4px,transparent_8px)] opacity-50" />
          </div>
        </div>
        <main className="flex min-h-screen px-4 relative mx-4 md:mx-8 lg:mx-36 border-l border-r border-gray-200">
        {/* Left side - large text */}
        <div className="flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-neue-montreal font-medium text-gray-800 leading-tight">
              Page Not Found :(
            </h1>
          </div>
        </div>

        {/* Right side bottom navigation */}
        <nav className="absolute bottom-8 right-8 flex flex-col gap-4 items-end" aria-label="Navigation">
          <Link 
            href="/" 
            className="text-gray-600 hover:text-gray-800 text-sm font-neue-montreal flex items-center gap-2 transition-all duration-200 hover:translate-x-1"
            aria-label="Return to homepage"
          >
            Go Home
            <span className="inline-block" aria-hidden="true">
              →
            </span>
          </Link>
        </nav>
      </main>
      </div>
    </>
  )
} 