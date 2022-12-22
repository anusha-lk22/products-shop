/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  mode: "jit",
  theme: {
    extend: {},
    backgroundImage: {
      'woovinapro': "url('https://demo-51.woovinapro.com/wp-content/uploads/2020/11/bk-title-header.jpg')",
      
    }
  },
  daisyui: {
    themes: false
  },
  plugins: [require('daisyui')],
}
