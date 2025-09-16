/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './src/app/**/*.{js,ts,jsx,tsx}',
  './src/pages/**/*.{js,ts,jsx,tsx}',
  './src/components/**/*.{js,ts,jsx,tsx}',
  './src/hook/**/*.{js,ts,jsx,tsx}',
  './src/lib/**/*.{js,ts,jsx,tsx}',
  './src/shared/**/*.{js,ts,jsx,tsx}',
  './src/store/**/*.{js,ts,jsx,tsx}',
  './src/utils/**/*.{js,ts,jsx,tsx}',
],
  theme: {
    extend: {
      colors: {
        primary: '#4ADE80',    
        secondary: '#DB2777',  
      },
    },
  },
  plugins: [],
};
