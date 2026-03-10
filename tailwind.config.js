/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", // Les pages (Expo Router)
    "./src/components/**/*.{js,jsx,ts,tsx}", // Tes composants réutilisables
    "./src/screens/**/*.{js,jsx,ts,tsx}", // Tes écrans si tu en as hors de /app
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        lightBlue: "#3B82F6",
        darkBlue: "#2563EB",
        lightDark: "#18181B",
        dark: "#000000",
        grey: "#777777",
      },
      fontFamily: {
        title: ["Inter"],
        body: ["Roboto"],
      },
      fontSize: {
        title: "24px",
        subtitle: "18px",
        body: "14px",
      },
    },
  },
  plugins: [],
};
