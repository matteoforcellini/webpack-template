# Webpack 4

Webpack template for frontend development.
This assembly includes:

- [HTML to Pug](https://pugjs.org/api/getting-started.html)
- [JavaScript](https://javascript.info/)
- [jQuery](https://jquery.com/)
- [Babel](https://babeljs.io/)
- [Bootstrap](https://getbootstrap.com/)
- [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/)
- [MiniCssExtractPlugin](https://webpack.js.org/plugins/mini-css-extract-plugin/)
- [file-loader](https://github.com/webpack-contrib/file-loader)
- [css-loader](https://github.com/webpack-contrib/css-loader)
- [sass-loader](https://github.com/webpack-contrib/sass-loader)
- [style-loader](https://github.com/webpack-contrib/style-loader)
- [postcss-loader](https://github.com/postcss/postcss-loader)
- Fonts, images, settings to automatic pages compiler.

## Installation

Install dependencies:

```sh
$ npm i
```

For development environment:

```sh
$ npm run dev
```

For production environment:

```sh
$ npm run build
```

For remove production folder:

```sh
$ npm run clean
```

## Structure

```bash
.webpack-template
├── dist                          # production folder
├── src                           # development folder (fonts, img, pages)
│   │── fonts                     # Here you can include your fonts in folder
│   │   ├─ Roboto                 # For example folder `Roboto` with fonts `Roboto-BlackItalic` etc.
│   │   └──index.scss             # In this file you must include your fonts
│   │── img                       # Here you can include your images
│   └── pages                     # This folder include your pages and modules of this pages
│       ├── index                 # Main index folder (Main page)
│       │   │── js                # Folder for JavaScript files
│       │   │   └── main.js       # JavaScript file
│       │   ├── style             # Folder for styles
│       │   │   └── index.scss    # SCSS file
│       │   ├── index.js          # File for import JS, SCSS, Fonts and entry point
│       │   └── index.pug         # Main pug file
│       ├── second                # These names must be the same! (Second page)
│       │   │── js                # Folder for JavaScript files
│       │   │   └── main.js       # JavaScript file
│       │   ├── style             # Folder for styles
│       │   │   └── second.scss   # These names must be the same!
│       │   ├── second.js         # These names must be the same!
│       │   └── second.pug        # These names must be the same!
│       └── modules                   # This folder include scss & pug files for duplicate blocks
│           │── blocks                # Folder for duplicate blocks
│           │   ├── footer.pug        # Footer pug file for all pages
│           │   ├── header.pug        # Header pug file for all pages
│           │   └── navigation.pug    # Navigation pug file for all pages
│           ├── config                # This folder include html markup, CDN jQuery and Bootstrap
│           │   ├── head.pug          # Header markup
│           │   └── scripts.pug       # Scripts markup
│           │── styles                # Folder for styles duplicate blocks
│           │   ├── footer.scss       # Style for footer
│           │   ├── header.scss       # Style for header
│           │   └── navigation.scss   # Style for navigation
│           └── index.scss            # This file import styles for duplicate blocks
├── develop.pages.js              # File for adding new pages (index, second, ...)
├── webpack.base.config.js        # Main config for webpack
├── webpack.build.config.js       # Build config for webpack
├── webpack.dev.config.js         # Development config for webpack
├── postcss.config.js             # Postcss config for webpack
├── .babelrc                      # Settings for Babel
└── package.json                  # Config
```

## Fonts installation

- Open 'src' -> 'fonts'
- Make folder [font-name]
- Paste in folder [font-name] your fonts
- Format **eot**, **ttf**, **woff**
- Open index.scss file in folder 'fonts'
- @font-face your fonts as in example with font 'Roboto'
- In 'pages' -> 'page_folder' -> 'styles' -> 'page_folder.scss' -> font-family: { [font-name], sans-serif; }

## New page installation

- Copy index page
- Give a name for new folder
- For example **third**
- Rename index.pug, index.js and file index.scss (in style) to **third**.pug, **third**.js, **third**.scss
- Open **develop.pages.js**
- Add folder name to const pages
- const pages = ["index", "second", "third"];
- **If you want to use only one page, for example 'index' remove second & antoher pages from const page**

## Copyright

**@eng1n3x**
