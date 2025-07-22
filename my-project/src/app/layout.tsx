import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
// import SEOChecker from "@/components/SEOChecker";

const neueMontreal = localFont({
  src: '../../public/fonts/PP Neue Montreal - Free for Personal Use v2.6/OTF/PPNeueMontreal-Medium.otf',
  variable: '--font-neue-montreal',
  display: 'swap',
  preload: true,
});

const supplyMono = localFont({
  src: '../../public/fonts/Supply-Free for Personal Use v2.0/PPSupplyMono-Regular.otf',
  variable: '--font-supply-mono',
  display: 'swap',
  preload: false,
});

const writer = localFont({
  src: '../../public/fonts/PP Writer - Free for Personal Use/PPWriter-Regular.otf',
  variable: '--font-writer',
  display: 'swap',
  preload: false,
});

const writerBold = localFont({
  src: '../../public/fonts/PP Writer - Free for Personal Use/PPWriter-Bold.otf',
  variable: '--font-writer-bold',
  display: 'swap',
  preload: false,
});

const writerUltrabold = localFont({
  src: '../../public/fonts/PP Writer - Free for Personal Use/PPWriter-Ultrabold.otf',
  variable: '--font-writer-ultrabold',
  display: 'swap',
  preload: false,
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

// Add preload hints for critical resources
export const viewport = {
  themeColor: '#f5f5f5',
};

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Akash Moorching | CS Student & Builder",
    description: "Computer Science student at University of Maryland. Co-founder of Saved.gg, an AI tool for content creators. Building and designing software solutions.",
    authors: [{ name: "Akash Moorching" }],
    creator: "Akash Moorching",
    publisher: "Akash Moorching",
          keywords: [
      "Akash Moorching",
      "Computer Science",
      "University of Maryland",
              "Builder",
      "Startup Founder",
      "Saved.gg",
      "Full Stack Developer",
      "Web Developer",
      "AI Tools"
    ],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://moorching.com',
      siteName: 'Akash Moorching',
      title: 'Akash Moorching | CS Student & Builder',
      description: 'Computer Science student at University of Maryland. Co-founder of Saved.gg, an AI tool for content creators. Building and designing software solutions.',
      images: [
        {
          url: '/MetadataImage.png',
          width: 1200,
          height: 630,
          alt: 'Akash Moorching - Product Engineer',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Akash Moorching | CS Student & Builder',
      description: 'Computer Science student at University of Maryland. Co-founder of Saved.gg, an AI tool for content creators.',
      images: ['/MetadataImage.png'],
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: '32x32' },
        { url: '/PortfolioLogo.png', sizes: '180x180', type: 'image/png' },
      ],
      apple: [
        { url: '/PortfolioLogo.png', sizes: '180x180' },
      ],
    },
    metadataBase: new URL('https://moorching.com'),
    alternates: {
      canonical: '/',
    },
    other: {
      'link': [
        '</AboutMeImage.png>; rel=preload; as=image',
        '</PortfolioLogo.png>; rel=preload; as=image',
      ],
    },
  };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Akash Moorching",
              "jobTitle": "Builder",
              "description": "Computer Science student and Builder at University of Maryland",
              "url": "https://moorching.com",
              "image": "https://moorching.com/MetadataImage.png",
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "University of Maryland"
              },
              "knowsAbout": [
                "Computer Science",
                "Software Engineering",
                "Product Development",
                "Artificial Intelligence",
                "Web Development",
                "Startup Development"
              ],
              "sameAs": [
                "https://linkedin.com/in/akash-moorching",
                "https://github.com/amoorching"
              ]
            })
          }}
        />
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Additional performance hints */}
        <meta name="format-detection" content="telephone=no" />
        {/* Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />
        {/* Additional SEO meta tags */}
        <meta name="google-site-verification" content="" />
        <meta name="msvalidate.01" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </head>
      <body
        className={`${poppins.variable} ${neueMontreal.variable} ${supplyMono.variable} ${writer.variable} ${writerBold.variable} ${writerUltrabold.variable} antialiased`}
      >
        <div className="bg-[#f5f5f5]">
          {children}
        </div>
        {/* <SEOChecker /> */}
      </body>
    </html>
  );
}
