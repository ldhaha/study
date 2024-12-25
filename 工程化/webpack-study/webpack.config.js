const path = require('path');
module.exports = {
    entry: {
        index: {
            import: './src/index.js',
        },
        main: {
            import: './src/main.js'
        },
    },
    output: {
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname, 'build'),
        clean: true // 删除之前的目录 和 CleanWebpackPlugin差不多
    },
    mode: 'development',
    devtool: 'source-map'
}