"use client"

import React from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <Navbar currentPage="about" />
      <main className="bg-[#f5f5f5] min-h-[calc(100vh-65px)] mx-4 md:mx-8 lg:mx-36 border-l border-r border-gray-200">
        <div className="max-w-4xl mx-auto px-12 py-24">
          {/* Using h1 for the main page heading */}
          <h1 className="text-4xl font-neue-montreal font-regular mb-8 mt-20 text-black">Hey, I&apos;m Akash</h1>
          
          <div className="space-y-4 font-neue-montreal">
            <p className="mb-10 text-md text-gray-600">
              I&apos;m an undergraduate at the University of Maryland (&apos;26) studying Computer Science, Math, and Public Policy. 
              <br />
              I love building and designing solutions to interesting problems.
              <br />
              {/* <br />
              I also really like music so follow me on <a href="https://www.instagram.com/akash.moorching/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-800">Spotify</a>! */}
            </p>
            
            {/* Optimized image with proper alt text */}
            <div className="mb-8">
              <Image
                src="/AboutMeImage.png"
                alt="Akash Moorching with Viraaj Singh at University of Maryland, October 2024"
                width={800}
                height={600}
                className="w-full h-auto max-w-4xl mx-auto"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                style={{ objectFit: 'cover' }}
              />
              {/* <p className="text-xs text-gray-500 mt-2 font-supply-mono text-right">
                Me (left) and <a 
                  href="https://www.viraajsingh.me/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="underline hover:text-gray-600"
                  title="Visit Viraaj Singh's website"
                >
                  my friend Viraaj
                </a> (right), Oct &apos;24
              </p> */}
            </div>
          </div>

          <section className="mt-10">
            <h2 className="sr-only">Professional Background</h2>
            <p className="text-md text-gray-600">
              I recently built <a 
                href="https://www.saved.gg" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline underline-offset-2 hover:text-gray-800"
                title="Visit Saved.gg - AI tool for content creators"
              >
                Saved
              </a>, an AI tool used by ~3,000 content creators, and raised ~$100k pre-seed at a $10 million valuation with 2 of my close friends.
              <br />
              <br />
              Now I&apos;m looking to apply these skills at a company where I can build products that impact millions of users.
              <br />
              If you&apos;d like to reach out, please email me at <a 
                href="mailto:akash.moorching@gmail.com" 
                className="underline underline-offset-2 hover:text-gray-800"
                title="Send email to Akash Moorching"
              >
                akash [dot] moorching [at] gmail [dot] com
              </a> :)
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
