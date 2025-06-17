// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="top-0 left-0 right-0 p-6 flex justify-between items-center border-b border-gray-200 font-neue-montreal">
      <div className="flex items-center">
        <Link href="/" className="text-gray-800 hover:text-gray-600">
          Home
        </Link>
      </div>
      <div className="flex gap-8">
        <Link href="/about" className="text-gray-800 hover:text-gray-600">
            About
        </Link>
        <Link href="https://linkedin.com/in/akash-moorching" className="text-gray-800 hover:text-gray-600" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </Link>
        <Link href="https://github.com/amoorching" className="text-gray-800 hover:text-gray-600" target="_blank" rel="noopener noreferrer">
          Github
        </Link>
        <Link href="/Akash Moorching Resume.pdf" className="text-gray-800 hover:text-gray-600" target="_blank" rel="noopener noreferrer">
          CV
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;