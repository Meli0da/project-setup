const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

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
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico|webmanifest|xml)$/i,
        type: 'asset/resource'
      },    
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Illustrator, Grafik- und Webdesigner Jessica Hein",
      description:"Jessica Hein, Dein professioneller Illustrator, Grafik- und Webdesigner.",
      template: "src/index.html",
      filename: "index.html",
      favicon: "src/favicons/favicon.ico",
    }),
    new HtmlWebpackPlugin({
      title: "Mehr über Jessica Hein",
      description:"Jessica Hein; Werdegang, Motivation und Hobbies.",
      template: "src/ueber-mich.html",
      filename: "ueber-mich.html",
      favicon: "src/favicons/favicon.ico",
    }),
    new HtmlWebpackPlugin({
      title: "Leistungen von Jessica Hein",
      description:"Illustrationen, Grafik- und Webdesigns sind Teil des Leistungsspektrums von Jessica Hein.",
      template: "src/leistungen.html",
      filename: "leistungen.html",
      favicon: "src/favicons/favicon.ico",
    }),
    new HtmlWebpackPlugin({
      title: "Portfolio von Jessica Hein",
      description:"Das Portfolio von Jessica Hein enthält diverse Digital- und Printprojekte.",
      template: "src/portfolio.html",
      filename: "portfolio.html",
      favicon: "src/favicons/favicon.ico",
    }),
    new HtmlWebpackPlugin({
      title: "Kontaktaufnahme mit Jessica Hein",
      description:"Jetzt mit Jessica Hein Kontakt aufnehmen und zusammen spannende Designs realisieren.",
      template: "src/kontakt.html",
      filename: "kontakt.html",
      favicon: "src/favicons/favicon.ico",
    }),
    new HtmlWebpackPlugin({
      title: "Datenschutz von Jessica Hein",
      description:"Hier findest du die Datenschutzrichtlinien von Jessica Hein.",
      template: "src/datenschutz.html",
      filename: "datenschutz.html",
      favicon: "src/favicons/favicon.ico",
    }),
    new HtmlWebpackPlugin({
      title: "Impressum von Jessica Hein",
      description:"Hier findest du das Impressum von Jessica Hein.",
      template: "src/impressum.html",
      filename: "impressum.html",
      favicon: "src/favicons/favicon.ico",
    }),
    new HtmlWebpackPlugin({
      title: "Danke für Deine Nachricht ",
      description:"Danke für die Kontaktaufnahme! Du hast das Formular erfolgreich abgesendet.",
      template: "src/danke.html",
      filename: "danke.html",
      favicon: "src/favicons/favicon.ico",
    }),
    new HtmlWebpackPlugin({
      title: "Fehler 404, Seite nicht gefunden",
      description:"Fehler 404, die Seite die Du suchst wurde nicht gefunden.",
      template: "src/error404.html",
      filename: "error404.html",
      favicon: "src/favicons/favicon.ico",
    }),
    new HtmlWebpackPlugin({
      title: "Desgin System von jessica-hein.de",
      description:"Sammlung der Designinhalte von jessica-hein.de.",
      template: "src/design-system.html",
      filename: "design-system.html",
      favicon: "src/favicons/favicon.ico",
    }),
    new CopyWebpackPlugin({
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
