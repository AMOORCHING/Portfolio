import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Akash Moorching | Computer Science Student & Builder",
  description: "Learn more about Akash Moorching, a Computer Science student at University of Maryland who co-founded Saved, an AI tool for content creators. Passionate about designing and building software solutions.",
  openGraph: {
    title: "About Akash Moorching | Computer Science Student & Builder",
    description: "Learn more about Akash Moorching, a Computer Science student at University of Maryland who co-founded Saved, an AI tool for content creators.",
    url: 'https://moorching.com/about',
    images: [
      {
        url: '/MetadataImage.png',
        width: 1200,
        height: 630,
        alt: 'About Akash Moorching - Builder and CS Student',
      },
    ],
  },
  twitter: {
    title: "About Akash Moorching | Computer Science Student & Builder",
    description: "Learn more about Akash Moorching, a Computer Science student at University of Maryland who co-founded Saved, an AI tool for content creators.",
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 