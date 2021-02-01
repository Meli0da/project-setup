const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const copyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    public: ["./src/js/index.js", "./src/sass/index.scss"],
  },
  output: {
    path: path.resolve(__dirname, "./dist/"),
  },
  module: {
    rules: [
      {
        test: /.scss$/,
        use: [
          {
            loader: "file-loader",

            options: {
              name: "[name].css",
              outputPath: "./",
            },
          },
          {
            loader: "extract-loader",
          },
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Desgin System von jessica-hein.de",
      description:"Sammlung der Designinhalte von jessica-hein.de.",
      template: "src/design-system.html",
      filename: "design-system.html",
    }),
    new HtmlWebpackPlugin({
      title: "Illustrator, Grafik- und Webdesigner Jessica Hein",
      description:"Jessica Hein, Dein professioneller Illustrator, Grafik- und Webdesigner.",
      template: "src/index.html",
      filename: "index.html",
    }),
    new copyWebpackPlugin({
      patterns: [
        {
        from: "src/images",
         to: "images",
        },
        {
        from: "src/favicons", 
        to: "favicons"
        }
      ] 
    }),
  ],

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
};
