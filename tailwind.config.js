/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1440px",
      },
      fontFamily: {
        'PlusJaka': ["Plus Jakarta Sans", 'sans-serif'],
      },
      colors: {
        'highlight': '#2EBB77',
      },
    },
  },
  plugins: [],
}
