'use client';

// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavbarProps {
  currentPage?: string;
}

const Navbar = ({ currentPage }: NavbarProps) => {
  // Function to preload the about page image on hover
  const preloadAboutImage = () => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = '/AboutMeImage.png';
    link.as = 'image';
    document.head.appendChild(link);
  };

  return (
    <nav className="relative top-0 p-4 flex justify-between items-center border-b border-l border-r border-gray-200 font-neue-montreal mx-4 md:mx-8 lg:mx-36 z-10 bg-[#f5f5f5]" role="navigation" aria-label="Main navigation">
      <div className="flex items-center">
        <Link href="/" className="text-gray-800 hover:text-gray-500" aria-label="Go to homepage">
          <Image 
            src="/PortfolioLogo.png" 
            alt="Akash Moorching Portfolio Logo" 
            width={32} 
            height={32} 
            className="h-8 w-auto" 
            priority
          />
        </Link>
      </div>
      <div className="flex gap-8" role="menubar">
        <Link 
          href="/about" 
          className={`hover:text-gray-800 ${currentPage === 'about' ? 'text-gray-800 underline underline-offset-4' : 'text-gray-500'}`}
          role="menuitem"
          aria-current={currentPage === 'about' ? 'page' : undefined}
          onMouseEnter={preloadAboutImage}
          prefetch={true}
        >
            About
        </Link>
        <Link 
          href="https://linkedin.com/in/akash-moorching" 
          className="text-gray-500 hover:text-gray-800" 
          target="_blank" 
          rel="noopener noreferrer"
          role="menuitem"
          aria-label="Visit Akash Moorching's LinkedIn profile (opens in new tab)"
        >
          LinkedIn
        </Link>
        <Link 
          href="https://github.com/amoorching" 
          className="text-gray-500 hover:text-gray-800" 
          target="_blank" 
          rel="noopener noreferrer"
          role="menuitem"
          aria-label="Visit Akash Moorching's GitHub profile (opens in new tab)"
        >
          Github
        </Link>
        <Link 
          href="/Akash Moorching Resume.pdf" 
          className="text-gray-500 hover:text-gray-800" 
          target="_blank" 
          rel="noopener noreferrer"
          role="menuitem"
          aria-label="Download Akash Moorching's resume (PDF, opens in new tab)"
        >
          CV
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;