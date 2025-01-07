/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),


  ],
  theme: {
    extend: {
      colors:{
        darkBlue:"#2A3663"
      }
    },
  },
  plugins: [
    flowbite.plugin(),

  ],
}

