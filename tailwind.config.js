/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors : {
        "bg-primary" : '#3C3C3C',
        "bg-secendary":'#292929'
      },
      fontFamily: {'myFont' :"'Chakra Petch', sans-serif"}
    },
  },
  plugins: [],
};
