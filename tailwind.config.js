/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: 'class',
   content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './src/**/*.{js,ts,jsx,tsx}',
   ],
   theme: {
      extend: {
         colors: {
            primary: '#fdfcff',
            secondary: '#fffdfc',
            darkPrimary: '#1e1e1e',
            darkSecondary: '#2d2d30',
            link: '#482dff',
            darkLink: '#41B375',
         },
         fontFamily: {
            arabic: '"Scheherazade New"',
            ayatArabic: '"Uthmani"',
         },
      },
   },

   plugins: [],
};
