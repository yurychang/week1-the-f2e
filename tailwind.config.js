/** @type {import('tailwindcss').Config} */
const defaultColors = require('tailwindcss/colors')

const colors = {
    yellow: '#FFF1AA',
    dark: '#333',
    light: '#Fafafa',
    primary: '#F1CB04',
    'primary-focus': '#F1AF04',
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
            transitionProperty: {
                colors: 'color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-stroke-color',
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
