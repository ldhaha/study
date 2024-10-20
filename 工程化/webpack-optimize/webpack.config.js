const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { output, plugins, devServer } = require('../babel/webpack.config')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  devServer: {
    open: true
  }
}
