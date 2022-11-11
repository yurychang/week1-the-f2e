const path = require('path')

module.exports = {
    webpack: {
        alias: {
            components: path.resolve(__dirname, 'src/components'),
            screens: path.resolve(__dirname, 'src/screens'),
            assets: path.resolve(__dirname, 'src/assets'),
        },
    },
}
