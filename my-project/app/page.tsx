import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1>Hello World</h1>
      </div>
    </div>
  );
}
