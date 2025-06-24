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
        'writer': ['var(--font-writer)'],
        'writer-bold': ['var(--font-writer-bold)'],
        'writer-ultrabold': ['var(--font-writer-ultrabold)'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "mahika-bg": "url('/7368c5f4-38a2-487b-a7b1-767cf7ee0a99.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
