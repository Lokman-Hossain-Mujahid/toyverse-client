/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-banner': "url('./public/pictures/avengerbanner.png')",
        'add-banner': "url('./public/pictures/actionfiguresblurr.png')",
      },
    },
    fontFamily: {
      nunito: ['Nunito'],
      bebas: ['Bebas Neue'],
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "luxury",
  },
}

