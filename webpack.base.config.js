const path = require("path");
const PAGES = require("./develop.pages.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  //entry point
  entry: () => {
    // forEach for all pages entry .js points
    const entries = {};
    PAGES.forEach(page => (entries[page] = `./src/pages/${page}/${page}.js`));
    return entries;
  },
  //output point
  output: {
    filename: "js/[name].js", // output point for production
    path: path.resolve(__dirname, "dist") // path for output
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
            //Minimize css plugin
            loader: MiniCssExtractPlugin.loader
          },
          {
            // CSS to JS
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            // SASS/SCSS to CSS
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
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
      //HTML loader for all .html files
      new HtmlWebpackPlugin({
        template: __dirname + `/src/pages/${page}/${page}.html`,
        filename: `${page}.html`,
        chunks: ["common", page],
        title: page,
        inject: "body"
      })
  ).concat(
    //Minimize css files
    new MiniCssExtractPlugin({
      filename: `styles/[name].css`,
      chunkFilename: `styles/[id].css`
    })
  )
};
