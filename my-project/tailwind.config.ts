import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'space-grotesk': ['var(--font-space-grotesk)'],
        'poppins': ['var(--font-poppins)'],
        'neue-montreal': ['var(--font-neue-montreal)'],
        'supply-mono': ['var(--font-supply-mono)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
