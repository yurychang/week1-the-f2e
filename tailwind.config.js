/** @type {import('tailwindcss').Config} */

const colors = {
    dark: '#333',
    yellow: '#FFF1AA',
    black: '#000',
    'black-70': 'rgba(0, 0, 0, 0.7)',
    light: '#Fafafa',
    'light-70': 'rgba(255, 255, 255, 0.7)',
    primary: '#F1CB04',
}

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        extend: {
            colors,
            fontFamily: {
                'do-hyeon': 'Do Hyeon',
                'noto-sans': 'Noto Sans TC',
            },
        },
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
                light: {
                    ...require('daisyui/src/colors/themes')[
                        '[data-theme=light]'
                    ],
                    ...colors,
                },
            },
        ],
    },
}
