module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        // modules: 'commonjs'
        // corejs: 3.6,
        /**
         * false 不用polyfill
         * usage 根据代码内容自动引入对应的垫片
         * entry 由于开发会用到第三方包，babel没有处理第三方代码，并且需要在入口文件里import 'core-js/stable' rengenerator-runtime/runtime
         * 然后根据browserslistrc引入相应的垫片
         */
        // useBuiltIns: 'usage'
      }
    ]

    // 支持react
    // ['@babel/preset-react']
  ]
}
