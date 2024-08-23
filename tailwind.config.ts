// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#063542', 
        secondary: '#073b4c',
        buttoncolor:'#0075FF',
        accent: '#118ab2',
        muted: '#666',
        background: '#063542',
        darkText: '#333',
        gradientStart: 'rgba(6, 11, 38, 0.74)',
        gradientEnd: 'rgba(26, 31, 55, 0.5)',
      },
      borderRadius: {
        'custom': '16px',
      },
      fontFamily: {
        montserrat: ['"Montserrat Alternates"', 'sans-serif'],
        poppins: ["Poppins", "sans-serif"],
      },
      
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
export default config;
