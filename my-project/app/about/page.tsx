"use client"

import React from 'react';
import Navbar from '../../components/Navbar';

export default function About() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-12 py-24 bg-[#f5f5f5] min-h-screen">
        <h2 className="text-4xl font-neue-montreal font-regular mb-8 mt-20 text-black">Akash (uh-kah-sh)</h2>
        
        <div className="space-y-4 font-neue-montreal">
          <p className="mb-10 text-md text-gray-600">
            University of Maryland '26 studying Computer Science, Math, and Public Policy. 
            <br />
            I love designing and building products that help people.
          </p>
          <details className="bg-[#f5f5f5] pb-4 border-b border-gray-200 group">
            <summary className="font-medium cursor-pointer flex justify-between items-center text-black">
              Background
              <svg className="w-6 h-6 transform group-open:rotate-180 transition-transform duration-200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="group-open:opacity-0 transition-opacity duration-200"/>
                <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </summary>
            <div className="mt-3">
              <p className="mt-3 text-md text-gray-600">
                
              </p>
            </div>
          </details>

          <details className="bg-[#f5f5f5] pb-4 border-b border-gray-200 group">
            <summary className="font-medium cursor-pointer flex justify-between items-center text-black">
              Philosophy
              <svg className="w-6 h-6 transform group-open:rotate-180 transition-transform duration-200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="group-open:opacity-0 transition-opacity duration-200"/>
                <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </summary>
            <div className="mt-3 text-md text-gray-600">
              <p>
                filler
              </p>
            </div>
          </details>

          <details className="bg-[#f5f5f5] pb-4 border-b border-gray-200 group">
            <summary className="font-medium cursor-pointer flex justify-between items-center text-black">
              Things I Love
              <svg className="w-6 h-6 transform group-open:rotate-180 transition-transform duration-200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="group-open:opacity-0 transition-opacity duration-200"/>
                <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </summary>
            <div className="mt-3 text-md text-gray-600">
              <p>
                filler
              </p>
            </div>
          </details>
        </div>
      </main>
    </>
  );
}
