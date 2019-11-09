const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const PAGES = require("./pages.js");

module.exports = {
  entry: (() => {
    const entries = {};
    PAGES.forEach(page => (entries[page] = `./src/pages/${page}/${page}.js`));
    return entries;
  })(),

  output: {
    filename: "js/[name].js", // output point for production (dist)
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        // Convert JS file(s) to another version ES
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/"
      },
      {
        test: /\.(sass|scss)$/,
        include: /src/,
        use: [
          {
            // create links & scripts in index.html
            loader: "style-loader"
          },
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            // CSS to JS
            loader: "css-loader"
          },
          {
            // SASS/SCSS to CSS
            loader: "sass-loader"
          },
          {
            //autoprefixer + cssnano in postcss.config.js, powered by postcss-loader
            loader: "postcss-loader",
            options: { sourceMap: true, config: { path: "./postcss.config.js" } }
          }
        ]
      }
    ]
  },
  plugins: PAGES.map(
    page =>
      new HtmlWebpackPlugin({
        template: __dirname + `/src/pages/${page}/${page}.html`,
        filename: `${page}.html`,
        chunks: ["common", page],
        title: page,
        inject: "body"
      })
  ).concat([
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "style/[name].css",
      chunkFilename: "style/[id].css"
    })
  ])
};
