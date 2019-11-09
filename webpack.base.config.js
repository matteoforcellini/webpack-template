const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const PAGES = require("./pages.js");

module.exports = {
 entry: {
  app: "./src/pages/index/index.js" // entry point for development (src)
 },

 //  entry: (() => {
 //   const entries = {};
 //   PAGES.forEach(page => (entries[page] = `src/pages/${page}/${page}.js`));
 //   return entries;
 //  })(),

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
   // {
   //   // Now we apply rule for images
   //   test: /\.(png|jpe?g|gif)$/,
   //   use: [
   //     {
   //       // Using file-loader for these files
   //       loader: "file-loader",
   //       // In options we can set different things like format
   //       // and directory to save
   //       options: {
   //         name: "[name].[ext]",
   //         // path where files will be saved
   //         outputPath: "assets/img",
   //         //custom public path for the target file(s).
   //         publicPath: "../img"
   //       }
   //     }
   //   ]
   // },
   // {
   //   // Now we apply rule for fonts
   //   test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
   //   use: [
   //     {
   //       // Using file-loader for these files
   //       loader: "file-loader",
   //       // In options we can set different things like format
   //       // and directory to save
   //       options: {
   //         name: "[name].[ext]",
   //         // path where files will be saved
   //         outputPath: "assets/fonts",
   //         //custom public path for the target file(s).
   //         publicPath: "../fonts"
   //       }
   //     }
   //   ]
   // }
  ]
 },
 plugins: [
  new HtmlWebpackPlugin({
   // start index.html
   hash: false,
   template: __dirname + "/src/pages/index/index.html",
   inject: "body"
  }),
  new MiniCssExtractPlugin({
   // Options similar to the same options in webpackOptions.output
   // both options are optional
   filename: "[name].css",
   chunkFilename: "[id].css"
  })
 ]
};
