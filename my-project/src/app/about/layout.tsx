import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Akash Moorching | Computer Science Student & Product Engineer",
  description: "Learn more about Akash Moorching, a Computer Science student at University of Maryland who built Saved, an AI tool used by 3,000+ content creators. Passionate about designing and building scalable products.",
  openGraph: {
    title: "About Akash Moorching | Computer Science Student & Product Engineer",
    description: "Learn more about Akash Moorching, a Computer Science student at University of Maryland who built Saved, an AI tool used by 3,000+ content creators.",
    url: 'https://moorching.com/about',
    images: [
      {
        url: '/MetadataImage.png',
        width: 1200,
        height: 630,
        alt: 'About Akash Moorching - Product Engineer and CS Student',
      },
    ],
  },
  twitter: {
    title: "About Akash Moorching | Computer Science Student & Product Engineer",
    description: "Learn more about Akash Moorching, a Computer Science student at University of Maryland who built Saved, an AI tool used by 3,000+ content creators.",
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