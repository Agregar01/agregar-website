import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     
      colors: {
        'primary': '#FD850D',
        'secondary': '#0D093A',
        "background": "#F1F6FB",
        "textcolor":"#2A2929",
        "graytext1":"#666666"
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.2' },
        },
      },
      animation: {
        'bounce-on-hover': 'bounce 0.3s ease-in-out',
        blink: 'blink 1s infinite',
      },
    },
  },
  plugins: [],
};
export default config;
