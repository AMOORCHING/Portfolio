"use client"

const Hero = () => {

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="relative">
        <div className="relative text-[#000000] text-center mb-4 text-sm sm:text-base font-poppins">
            <a href="https://saved.gg" target="_blank" rel="noopener noreferrer" className="animate-pulse underline">currently building Saved</a>
        </div>
        <h1 className="relative text-4xl sm:text-6xl text-gray-800 mb-2 font-semibold">
          Akash Moorching
        </h1>
      </div>
      
      <div className="text-center mt-4">
        <p className="text-gray-600 mb-4 text-sm sm:text-base font-poppins">i am a software engineer and designer</p>
      </div>
    </main>
  );
};

export default Hero;