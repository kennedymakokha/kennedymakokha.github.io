module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'skills': "url('assets/skills.jpg')",
        // 'bg': "url('assets/bg.jpg')",
      },
      fontFamily: {
          sans: ["Poppins"],
      },
      colors: {
        'grait': {
          '600': '#252525',
          
        },
        "appStore": { '600': "#1aaaf3" },
        "android": "#91b939"
      }
  },
  },
  plugins: [],
}
