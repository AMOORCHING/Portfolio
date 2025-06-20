import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import Footer from "@/components/Footer";
// import SEOChecker from "@/components/SEOChecker";

const neueMontreal = localFont({
  src: '../../public/fonts/PP Neue Montreal - Free for Personal Use v2.6/OTF/PPNeueMontreal-Medium.otf',
  variable: '--font-neue-montreal',
});

const supplyMono = localFont({
  src: '../../public/fonts/Supply-Free for Personal Use v2.0/PPSupplyMono-Regular.otf',
  variable: '--font-supply-mono',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Akash Moorching | Product Engineer & CS Student",
  description: "Product Engineer and Computer Science student at University of Maryland. Built Saved.gg used by 3,000+ creators, raised $100k pre-seed. Building and designing scalable products.",
  authors: [{ name: "Akash Moorching" }],
  creator: "Akash Moorching",
  publisher: "Akash Moorching",
  keywords: [
    "Akash Moorching",
    "Product Engineer",
    "Computer Science",
    "University of Maryland",
    "Software Engineer",
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
    url: 'https://portfolio-git-main-amoorchings-projects.vercel.app',
    siteName: 'Akash Moorching',
    title: 'Akash Moorching | Product Engineer & CS Student',
    description: 'Product Engineer and Computer Science student at University of Maryland. Built Saved.gg used by 3,000+ creators, raised $100k pre-seed. Building and designing scalable products.',
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
    title: 'Akash Moorching | Product Engineer & CS Student',
    description: 'Product Engineer and Computer Science student at University of Maryland. Built Saved.gg used by 3,000+ creators, raised $100k pre-seed.',
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
  metadataBase: new URL('https://portfolio-git-main-amoorchings-projects.vercel.app'),
  alternates: {
    canonical: '/',
  },
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
              "jobTitle": "Product Engineer",
              "description": "Product Engineer and Computer Science student at University of Maryland",
              "url": "https://portfolio-git-main-amoorchings-projects.vercel.app",
              "image": "https://portfolio-git-main-amoorchings-projects.vercel.app/MetadataImage.png",
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
        <meta name="theme-color" content="#f5f5f5" />
        {/* Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />
        {/* Additional SEO meta tags */}
        <meta name="google-site-verification" content="" />
        <meta name="msvalidate.01" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </head>
      <body
        className={`${poppins.variable} ${neueMontreal.variable} ${supplyMono.variable} antialiased`}
      >
        <div className="bg-[#f5f5f5]">
          {children}
        </div>
        <Footer />
        {/* <SEOChecker /> */}
      </body>
    </html>
  );
}
