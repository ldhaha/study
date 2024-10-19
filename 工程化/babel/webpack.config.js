const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'eval',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
          // options: {
          //   presets: [
          //     [
          //       '@babel/preset-env',
          //       {
          //         targets: '>5%' // 这样写会覆盖browserslistrc(不推荐使用)
          //       }
          //     ]
          //   ]
          // }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  devServer: {
    open: true
  }
}
