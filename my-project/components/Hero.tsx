"use client"

import useTextScramble from '../hooks/useTextScramble';

const Hero = () => {
  const scrambledText = useTextScramble({
    finalText: "Akash Moorching",
    scrambleSpeed: 60
  });

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="relative">
        <div className="relative text-gray-500 text-center mb-2 text-sm sm:text-base">
            swe & startups
        </div>
        <h1 className="relative text-4xl sm:text-6xl text-gray-800 mb-2 font-semibold">
          {scrambledText}
        </h1>
      </div>
      
      <div className="text-center mt-4">
        <p className="text-gray-600 mb-4 text-sm sm:text-base">I am a software engineer and designer</p>
      </div>
    </main>
  );
};

export default Hero;