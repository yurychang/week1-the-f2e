/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        extend: {
            colors: {
                dark: '#333',
                yellow: '#FFF1AA',
                primary: '#F1CB04',
                black: '#000',
                'black-70': 'rgba(0, 0, 0, 0.7)',
                light: '#Fafafa',
                'light-70': 'rgba(255, 255, 255, 0.7)',
                'primary-btn': '#F1CB04',
                'primary-btn-hover': '#F1AF04',
                'Secondary-btn': '#FFF1AA',
                'dark-card-bg': '＃424242',
                'dark-card-bg-hover': '#4F4F4F',
            },
            fontFamily: {
                'do-hyeon': 'Do Hyeon',
                'noto-sans': 'Noto Sans TC',
            },
        },
    },
    plugins: [],
}
