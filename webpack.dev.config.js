const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.config");
module.exports = merge(baseWebpackConfig, {
  mode: "development",
  devServer: {
    port: 8081,
    overlay: {
      warnings: false,
      errors: true
    },
    contentBase: "./src/pages"
  },
  devtool: "cheap-module-eval-source-map",
  plugins: []
});
