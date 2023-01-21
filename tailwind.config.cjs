/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                heading: ['"Shojumaru"', 'sans-serif'],
                body: ['"Montserrat"', 'sans-serif'],
            },
            backgroundColor: {
                hero2: '#121212',
            },
        },
    },
    plugins: [],
};
