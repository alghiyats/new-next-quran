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
            lightBg: 'rgba(0,0,0,.03)',
            darkPrimary: '#1e1e1e',
            darkSecondary: '#2d2d30',
            darkBg: 'rgba(0,0,0,.15)',
            link: '#482dff',
            darkLink: '#41B375',
         },
         fontFamily: {
            arabic: '"Uthmani"',
            arti: '"arti"',
            latin: '"latin"',
            quicksand: '"Quicksand", sans-serif',
         },
         borderRadius: {
            cardRadius: '10px',
         },
      },
   },

   plugins: [],
};
