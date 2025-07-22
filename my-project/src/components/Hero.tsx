"use client"

import Link from 'next/link'
import { useEffect } from 'react'

const Hero = () => {
  // Preload the about page image when component mounts
  useEffect(() => {
    const img = new Image();
    img.src = '/AboutMeImage.png';
  }, []);

  return (
    <main className="flex min-h-screen px-4 relative mx-4 md:mx-8 lg:mx-36 border-l border-r border-gray-200">
      {/* Top left name section */}
      <div className="absolute top-8 tracking-wide">
        <h1 className="text-sm text-gray-800 font-medium font-neue-montreal">
          Akash Moorching
        </h1>
        <div className="text-sm text-gray-500 font-neue-montreal">
          Building; CS @ UMD
        </div>
      </div>

      {/* Center content - condensed about info */}
      <div className="flex items-center justify-center w-full">
        <div className="max-w-md text-left">
          <p className="text-gray-600 font-neue-montreal text-sm leading-relaxed mb-6">
            Undergraduate at the University of Maryland (&#39;26) studying Computer Science & Math.
            <br /><br />
            Recently built <a 
              href="https://www.saved.gg" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline underline-offset-2 hover:text-gray-800 transition-colors"
              title="Visit Saved.gg - AI tool for content creators"
            >
              Saved
            </a>, an AI tool used by ~3,000 content creators, and raised ~$100k pre-seed at $10 million post.
            <br /><br />
            Looking to apply my skills at a company where I can engineer products that impact millions of users :)
          </p>
          
          <div className="text-gray-500 font-neue-montreal text-sm">
            <a 
              href="mailto:akash.moorching@gmail.com" 
              className="hover:text-gray-800 transition-colors"
              title="Send email to Akash Moorching"
            >
              akash[dot]moorching[at]gmail[dot]com
            </a>
          </div>
        </div>
      </div>

      {/* Right side bottom navigation */}
      <nav className="absolute bottom-8 right-8 flex flex-col gap-4 items-end" aria-label="Main navigation">
        {/* <Link 
          href="/about" 
          className="text-gray-600 hover:text-gray-800 text-sm font-neue-montreal flex items-center gap-2 transition-all duration-200 hover:translate-x-1"
          aria-label="Learn more about Akash Moorching"
          prefetch={true}
        >
          More about me
          <span className="inline-block" aria-hidden="true">
            →
          </span>
        </Link> */}

        <Link 
          href="https://linkedin.com/in/akash-moorching" 
          className="text-gray-600 hover:text-gray-800 text-sm font-neue-montreal flex items-center gap-2 transition-all duration-200 hover:translate-x-1" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Visit Akash Moorching's LinkedIn profile (opens in new tab)"
        >
          LinkedIn
          <span className="inline-block" aria-hidden="true">
            ↗
          </span>
        </Link>

        <Link 
          href="https://github.com/amoorching" 
          className="text-gray-600 hover:text-gray-800 text-sm font-neue-montreal flex items-center gap-2 transition-all duration-200 hover:translate-x-1" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Visit Akash Moorching's GitHub profile (opens in new tab)"
        >
          Github
          <span className="inline-block" aria-hidden="true">
            ↗
          </span>
        </Link>

        <Link 
          href="https://x.com/akashinjune" 
          className="text-gray-600 hover:text-gray-800 text-sm font-neue-montreal flex items-center gap-2 transition-all duration-200 hover:translate-x-1"
          aria-label="Learn more about Akash Moorching"
          prefetch={true}
        >
          Twitter
          <span className="inline-block" aria-hidden="true">
            ↗
          </span>
        </Link>
      </nav>
    </main>
  );
};

export default Hero;