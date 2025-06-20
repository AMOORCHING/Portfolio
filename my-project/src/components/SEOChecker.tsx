"use client"

import { useEffect, useState } from 'react';

// This component is for development purposes only to check SEO implementation
const SEOChecker = () => {
  const [seoStatus, setSeoStatus] = useState<{
    title: boolean;
    description: boolean;
    openGraph: boolean;
    twitter: boolean;
    structuredData: boolean;
    manifest: boolean;
  } | null>(null);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    const checkSEO = () => {
      const title = document.querySelector('title')?.textContent;
      const description = document.querySelector('meta[name="description"]')?.getAttribute('content');
      const ogTitle = document.querySelector('meta[property="og:title"]')?.getAttribute('content');
      const twitterCard = document.querySelector('meta[name="twitter:card"]')?.getAttribute('content');
      const structuredData = document.querySelector('script[type="application/ld+json"]');
      const manifest = document.querySelector('link[rel="manifest"]');

      setSeoStatus({
        title: !!title && title.length > 0,
        description: !!description && description.length > 0 && description.length <= 160,
        openGraph: !!ogTitle,
        twitter: !!twitterCard,
        structuredData: !!structuredData,
        manifest: !!manifest,
      });
    };

    // Check after a brief delay to ensure all meta tags are loaded
    setTimeout(checkSEO, 1000);
  }, []);

  if (process.env.NODE_ENV !== 'development' || !seoStatus) return null;

  const allPassed = Object.values(seoStatus).every(Boolean);

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-300 rounded-lg p-4 shadow-lg text-xs max-w-xs z-50">
      <h4 className="font-bold mb-2 text-gray-800">SEO Status {allPassed ? '✅' : '⚠️'}</h4>
      <ul className="space-y-1">
        <li className={seoStatus.title ? 'text-green-600' : 'text-red-600'}>
          {seoStatus.title ? '✅' : '❌'} Title Tag
        </li>
        <li className={seoStatus.description ? 'text-green-600' : 'text-red-600'}>
          {seoStatus.description ? '✅' : '❌'} Meta Description
        </li>
        <li className={seoStatus.openGraph ? 'text-green-600' : 'text-red-600'}>
          {seoStatus.openGraph ? '✅' : '❌'} Open Graph
        </li>
        <li className={seoStatus.twitter ? 'text-green-600' : 'text-red-600'}>
          {seoStatus.twitter ? '✅' : '❌'} Twitter Cards
        </li>
        <li className={seoStatus.structuredData ? 'text-green-600' : 'text-red-600'}>
          {seoStatus.structuredData ? '✅' : '❌'} Structured Data
        </li>
        <li className={seoStatus.manifest ? 'text-green-600' : 'text-red-600'}>
          {seoStatus.manifest ? '✅' : '❌'} Web Manifest
        </li>
      </ul>
    </div>
  );
};

export default SEOChecker; 