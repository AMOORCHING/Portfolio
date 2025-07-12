import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WorkGrid from "@/components/WorkGrid";
import WorkTitle from "@/components/WorkTitle";
import Box from "@/components/Box";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="mx-4 flex h-full justify-evenly md:mx-8 lg:mx-36">
          <div className="h-full w-px bg-[repeating-linear-gradient(to_bottom,theme(colors.neutral.300),theme(colors.neutral.300)_4px,transparent_4px,transparent_8px)] opacity-50" />
          <div className="h-full w-px bg-[repeating-linear-gradient(to_bottom,theme(colors.neutral.300),theme(colors.neutral.300)_4px,transparent_4px,transparent_8px)] opacity-50" />
          <div className="h-full w-px bg-[repeating-linear-gradient(to_bottom,theme(colors.neutral.300),theme(colors.neutral.300)_4px,transparent_4px,transparent_8px)] opacity-50" />
        </div>
      </div>
      <Navbar />
      <Hero />
      <WorkTitle />
      <WorkGrid />
      <Box />
      <Footer />
    </div>
  );
}
