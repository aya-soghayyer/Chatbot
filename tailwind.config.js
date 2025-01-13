
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.jsx', './index.html', './App.jsx'],
  theme: {
    fontFamily:{
      Outfit: ['Outfit' , 'sans-serif'],
    },
    extend: {
      screens:{
        "2md": "960px"
      },
      colors:{
        BgPrimary: '#213C84',
        secondaryText:'#6B7280',
        mainText:'#111928'
      }
    },
  },
  plugins: [],
}

