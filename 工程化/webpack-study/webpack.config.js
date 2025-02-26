const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    index: {
      import: "./src/index.js",
    },
    main: {
      import: "./src/main.js",
    },
  },
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "build"),
    clean: true, // 删除之前的目录 和 CleanWebpackPlugin差不多
  },
  optimization: {
    runtimeChunk: "multiple",
  },
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/index.html"),
    }),
  ],
};
