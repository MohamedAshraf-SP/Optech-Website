/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, rgb(25, 36, 59) 24%, rgba(25, 35, 59, 0) 78%)",
      },
      plugins: [require("tailwind-scrollbar")],
      animation: {
        fadeinbounceup: "fadeinbounceup .4s ease-in-out  forwards",
      },
      keyframes: {
        fadeinbounceup: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      container: {
        center: true,
        padding: "15px",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"], // Replace 'sans' with your desired font family key
      },
      colors: {
        primary: "#2b4dff",
        secondary: "#0A165E",
        textcolor: "#585b6f",
        ButtonColor: "#289EFD",
      },
    },
  },
  plugins: [],
};
