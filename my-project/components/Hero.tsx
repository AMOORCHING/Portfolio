"use client"

const Hero = () => {

  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-73px)] px-4">
      <div className="relative">
        <div className="relative text-[#9c9c9c] text-center mb-4 text-2xl font-neue-montreal">
            Product Engineer
        </div>
        <h1 className="relative text-5xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-800 mb-2 font-medium font-neue-montreal">
          Akash Moorching
        </h1>
      </div>
      
      <div className="text-center mt-4">
        <p className="text-gray-600 mb-4 text-sm sm:text-base font-supply-mono"></p>
      </div>
    </main>
  );
};

export default Hero;