"use client"

import React from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <Navbar currentPage="about" />
      <main className="max-w-4xl mx-auto px-12 py-24 bg-[#f5f5f5] min-h-[calc(100vh-65px)]">
        <h2 className="text-4xl font-neue-montreal font-regular mb-8 mt-20 text-black">Hey, I&apos;m Akash</h2>
        
        <div className="space-y-4 font-neue-montreal">
          <p className="mb-10 text-md text-gray-600">
            I&apos;m a student at the University of Maryland (&apos;26) studying Computer Science, Math, and Public Policy. 
            <br />
            I love building and designing solutions to interesting problems.
            <br />
            {/* <br />
            I also really like music so follow me on <a href="https://www.instagram.com/akash.moorching/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-800">Spotify</a>! */}
          </p>
          
          {/* Add your image here - replace the src with your actual image URL */}
          <div className="mb-8">
            <Image
              src="/AboutMeImage.png" // Replace with your actual image path
              alt="Akash Moorching"
              width={1000}
              height={1000}
              className=""
              priority
            />
            <p className="text-xs text-gray-500 mt-2 font-supply-mono text-right">Me (left) and <a href="https://www.viraajsingh.me/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">my friend</a> (right), Oct &apos;24</p>
          </div>
        </div>

        <p className="mt-10 text-md text-gray-600">
            I recently built <a href="https://www.saved.gg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-gray-800">Saved</a>, an AI tool used by ~3,000 content creators, and raised ~$100k pre-seed at a $10 million valuation with 2 of my best friends.
            <br />
            <br />
            Now, I&apos;m working on products at scale to become a better engineer.
            <br />
            If you&apos;d like to reach out, please email me at <a href="mailto:akash.moorching@gmail.com" className="underline underline-offset-2 hover:text-gray-800">akash [dot] moorching [at] gmail [dot] com</a> :)
          </p>
      </main>
    </>
  );
}
