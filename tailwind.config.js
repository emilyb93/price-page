module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
      },
      colors: {
        purple: {
          100: "#F3E8FF",
          500: "#7E3AF2",
          600: "#6C2BD9",
          800: "#4A148C",
        },
        orange: {
          500: "#FF8800",
          600: "#E67600",
        },
      },
    },
  },
  plugins: [],
};
