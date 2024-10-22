/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
        light: {
          background: '#ffffff',
          text: '#000000',
          primary: '#3b82f6', 
        },
        
        dark: {
          background: '#1a1a1a',
          text: '#ffffff',
          primary: '#3b82f6', 
        },
        
        default: {
          background: '#f9fafb',
          text: '#374151',
          primary: '#3b82f6', 
        },
      },
    },
  },
  plugins: [],
}
