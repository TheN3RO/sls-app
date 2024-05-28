import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      boxShadow: {
        "supportersShadow": "0px -20px 45px 20px rgba(0, 0, 0, 1)",
      },
      colors: {
        primary: {
          light: '#6466F1',
          DEFAULT: '#3F3DFF',
          dark: '#1613FF',
        },
        secondary: {
          light: '#E255D0',
          DEFAULT: '#D307A5',
          dark: '#9A0075',
        },
        accent: {
          light: '#FF609D',
          DEFAULT: '#FF2179',
          dark: '#D6004D',
        },
        neutral: {
          light: '#FF8F70',
          DEFAULT: '#FF5C39',
          dark: '#D62800',
        },
        custom1: {
          light: '#FFC659',
          DEFAULT: '#FFB400',
          dark: '#C68E00',
        },
        custom2: {
          light: '#F9F871',
          DEFAULT: '#E6E600',
          dark: '#B3B300',
        },
        chessLightBlock: '#f0d9b5',
        chessDarkBlock: '#b58863',
      },      
    },
  },
  plugins: [],
};
export default config;
