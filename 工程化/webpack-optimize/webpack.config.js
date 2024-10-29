const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const glob = require('glob')
const MiniCsssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { PurgeCssPlugin } = require('purgecss-webpack-plugin')
const webpack = require('webpack')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const smp = new SpeedMeasurePlugin()
const config = {
  mode: 'production',
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
    // 作用域提升
    new webpack.optimize.ModuleConcatenationPlugin(),
    // css treeshaking开启方式
    new PurgeCssPlugin({
      paths: glob.sync(`${path.resolve(__dirname, 'src')}/**/*`, { nodir }),

      // 哪些不受treeshaking控制。不可以删除
      safelist: function () {
        return {
          standard: ['body']
        }
      }
    }),

    new HtmlWebpackPlugin({
      template: './index.html',

      // 压缩
      minify: true
    }),

    // 提取css
    new MiniCsssExtractPlugin({
      filename: '[name]_[hash:6].css',

      // 动态导入
      chunkFilename: '[name]_[hash:6].css'

      // 另外还需要MiniCsssExtractPlugin.loader
    })
  ],

  // 生产环境分包（优化）
  optimization: {
    //  treeshaking开启方式 ：usedExports  sideEffects
    /**
     * 导入模块时。分析哪些模块有被使用（入口文件默认开启（和这个配置无关），生产环境也默认开启）
     * 设置usedExports为true和false对比打包后的代码:
      在usedExports设置为true时，会有一段注释:unused harmonyexport mul;口 这段注释的意义是什么呢?告知Terser在优化时，可以删除掉这段代码;
      或者package.json文件设置sideEffects为false或者数组
      '所有的文件都没有副作用，treeshaking就会整个模块都不会导入,或者写成数组，说明哪些文件有副作用',
     */
    usedExports: true,

    // 开启代码优化。生产默认开启
    minimize: true,

    // 放压缩相关插件
    minimizer: [
      // css压缩插件（底层cssnano）
      new CssMinimizerPlugin({}),

      // js压缩插件
      new TerserPlugin({
        // 抽取注释
        extractComments: true,
        // 多进程打包
        parallel: true,
        terserOptions: {
          compress: {
            arguments: true,

            // 保留不可达的代码要配合 usedExports
            unused: false
          },
          mangle: true
        }
      })
    ],
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

// env可以区别生产还是开发环境，但是命令得加上 --env production
module.exports = function (env) {
  console.log(env)
  console.log(process.env.NODE_ENV)

  // 打包时间分析插件
  return smp.wrap(config)
}
