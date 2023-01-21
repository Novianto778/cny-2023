/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                heading: ['"Shojumaru"', 'sans-serif'],
                body: ['"Montserrat"', 'sans-serif'],
                primary: ['"Bai Jamjuree"', 'sans-serif'],
            },
            backgroundColor: {
                hero2: '#121212',
            },
            spacing: {
                68: '17rem',
            }
        },
    },
    plugins: [],
};
