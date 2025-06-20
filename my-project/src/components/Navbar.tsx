// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavbarProps {
  currentPage?: string;
}

const Navbar = ({ currentPage }: NavbarProps) => {
  return (
    <nav className="top-0 left-0 right-0 p-4 flex justify-between items-center border-b border-gray-200 font-neue-montreal">
      <div className="flex items-center">
        <Link href="/" className="text-gray-800 hover:text-gray-500">
          <Image src="/PortfolioLogo.png" alt="Home Icon" width={32} height={32} className="h-8 w-auto" />
        </Link>
      </div>
      <div className="flex gap-8">
        <Link 
          href="/about" 
          className={`hover:text-gray-800 ${currentPage === 'about' ? 'text-gray-800 underline underline-offset-4' : 'text-gray-500'}`}
        >
            About
        </Link>
        <Link 
          href="https://linkedin.com/in/akash-moorching" 
          className="text-gray-500 hover:text-gray-800" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
        <Link 
          href="https://github.com/amoorching" 
          className="text-gray-500 hover:text-gray-800" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Github
        </Link>
        <Link 
          href="/Akash Moorching Resume.pdf" 
          className="text-gray-500 hover:text-gray-800" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          CV
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;