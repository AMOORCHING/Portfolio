import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk, Poppins } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";

const neueMontreal = localFont({
  src: '../public/fonts/PP Neue Montreal - Free for Personal Use v2.6/OTF/PPNeueMontreal-Medium.otf',
  variable: '--font-neue-montreal',
});

const supplyMono = localFont({
  src: '../public/fonts/Supply-Free for Personal Use v2.0/PPSupplyMono-Regular.otf',
  variable: '--font-supply-mono',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Akash Moorching",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${neueMontreal.variable} ${supplyMono.variable} antialiased`}
      >
        <div className="bg-[#f5f5f5]">
          {children}
        </div>
      </body>
    </html>
  );
}
