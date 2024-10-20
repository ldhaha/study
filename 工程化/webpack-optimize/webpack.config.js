const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  // 多入口打包
  entry: {
    index: {
      import: './src/index.js',

      // 用到共享的，实验了 只能写一个

      dependOn: 'shared'
    },
    main: {
      import: './src/main.js'
    },

    // 共享的第三方库
    shared: ['axios']
  },

  // 哪些库不用打包
  externals: {
    // key代表第三包的名字
    // value cnd请i求地址提供的具体名称
    axios: 'axios'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-bundle.js',
    /** 分包的命名（结合webpackChunkName） */
    chunkFilename: '[name].chunk.js',
    clean: true,

    // index.html引入的打包后的文件地址会加前缀（例如cdn）
    publicPath: './' // or  http://www.baidu.com(举例)
  },
  mode: 'development',
  devServer: {
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],

  // 生产环境分包（优化）
  optimization: {
    splitChunks: {
      // development:named, production:deterministic
      // chunkId: '',
      // 默认async  只会将动态导入的分包
      chunks: 'all',
      // // 一个包大于这个数值时，会接着分，但是也不一定，主要有的功能很大，只能连起来写
      // maxSize: 20000,

      // // 每个包最小的大小
      // minSize: 10000,

      // 自定义哪些包需要拆出来
      cacheGroups: {
        axios: {
          test: /[\\/]node_modules[\\/]/,
          filename: 'abc_vendor.js'
        }
      }
    }
  }
}
