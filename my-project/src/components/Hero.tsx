"use client"

import Link from 'next/link'

const Hero = () => {
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-65px)] px-4 relative mx-4 md:mx-8 lg:mx-36 border-l border-r border-gray-200">
      <header className="relative text-center">
        <div className="relative text-gray-500 mb-4 text-md sm:text-lg md:text-xl lg:text-2xl font-neue-montreal">
            Product Engineer
        </div>
        <h1 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-800 mb-2 font-medium font-neue-montreal">
          Akash Moorching
        </h1>
      </header>

      <nav className="absolute bottom-6 left-0 right-0 flex justify-between items-center px-4 sm:px-4" aria-label="Page navigation">
        <div className="text-gray-500 text-sm font-supply-mono">
          <time dateTime={new Date().toISOString().split('T')[0]}>
            Last updated: {today}
          </time>
        </div> 
        <Link 
          href="/about" 
          className="text-gray-600 hover:text-gray-800 text-sm font-supply-mono flex items-center gap-1 transition-colors duration-200"
          aria-label="Learn more about Akash Moorching"
        >
          More about me 
          <span className="inline-block transition-transform duration-200 hover:translate-x-1" aria-hidden="true">
            →
          </span>
        </Link>
      </nav>
    </main>
  );
};

export default Hero;