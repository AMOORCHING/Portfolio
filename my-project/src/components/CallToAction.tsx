import Link from 'next/link';
import React from 'react';
import { ArrowDownRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <div className="flex flex-col items-start justify-between px-4 relative mx-4 md:mx-8 lg:mx-36 border-t border-l border-r border-gray-200">
      <h1 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-800 mb-2 font-medium font-neue-montreal mt-4">
        get in touch!
      </h1>  
      <p className="text-gray-500 text-sm md:text-lg lg:text-xl font-neue-montreal self-end mt-4 mb-2">
        
      </p>
      <p className="text-gray-500 text-sm md:text-lg lg:text-xl font-neue-montreal self-end mt-4 mb-2">
        akash [dot] moorching [at] gmail [dot] com
      </p>
    </div>
  );
};

export default CallToAction; 