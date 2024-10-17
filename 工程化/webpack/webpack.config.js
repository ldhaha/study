const { VueLoaderPlugin } = require('vue-loader/dist/index')
const path = require('path')

// 清楚上次打包内容的插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const HtmlWebpackPlugin = require('html-webpack-plugin')

// 定义变量,任意模块里都能用到，默认注入process.env.NODE_ENV
const { DefinePlugin } = require('webpack')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
    // assetModuleFilename: 'sd'  配置图片等静态资源名字
  },

  // 配置loader（对特定的模块进行转换）
  module: {
    rules: [
      {
        // test：匹配什么文件
        test: /\.css$/,
        // use：使用什么loader处理,use中loader使用顺序是从后往前
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },

          // css加前缀，兼容
          {
            loader: 'postcss-loader'
            // options: {
            //   postcssOptions: {
            //     plugins: ['autoprefixer']
            //   }
            // }  可以写到postcss.config.js里
          }
        ]
        // 简写，不用use  loader:'css-loader' 或者 use:['style-loader','css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },

      // 文件

      {
        test: /\.(png|jpe?g|svg|gif)$/,
        // asset/resouce 会将图片生成新的图片放到dist文件夹里  asset/inline则是base64(少发送网络请求，但是打包生成后的js文件很大)
        // 小一点的图片可以base64,大一点的可以生成新图片
        // asset可以做到这一点，但是需要配置parser
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 1 * 1024
          }
        },
        // 文件设置别名
        generator: {
          // 占位符
          /**
           * name指向原来图片的名字
           * ext原来后缀名
           * hash哈希值
           */
          filename: 'img/[name]_[hash:8][ext]'
        }
      },

      // babel处理js
      {
        test: /\.js$/,
        use: ['babel-loader']
      },

      // 对vue处理
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },

  // 插件用于执行更加广泛的任务，比如优化，资源管理
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '网页标题'
      // template:"" 指定模板
    }),
    new DefinePlugin({
      BASE_URL: "'./'"
    })
  ],

  resolve: {
    // 默认 .js .json .wasm
    extensions: ['.js', '.vue', '.jsx', '.ts', '.tsx'],

    // 目录别名
    alias: {
      '@src': path.resolve(__dirname, './src')
    }
  }
}
