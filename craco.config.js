const path = require('path')

module.exports = {
    webpack: {
        alias: {
            components: path.resolve(__dirname, 'src/components'),
            sections: path.resolve(__dirname, 'src/sections'),
        },
    },
}
