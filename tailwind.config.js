/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF3C63",
        secondary: "#212135",
        third: "#65F7FD",
      },
      backgroundImage: {
        "bef-down": "url(/src/assets/homepage/bef_down.png)",
        "youtube-bg": "url(/src/assets/homepage/youtube_bg.png)",
        "whatsOn-bg": "url(/src/assets/homepage/bg_btm.png)",
        "faq-bg": "url(/src/assets/homepage/bg_faq.png)",
        "bef-bg": "url(/src/assets/bef_bg.png)",
      },
      height: {
        683: "42.68rem",
        "30rem": "30rem",
      },
      dropShadow: { text: "0 4px 4px rgba(0, 0, 0, 0.25)" },
    },
  },
  plugins: [],
};
