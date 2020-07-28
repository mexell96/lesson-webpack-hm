const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index-bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader"],
      },
      {
        test: /\.css$/,
        use: [
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                    esModule: true,
                },
            },
            "css-loader",
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader","css-loader","sass-loader"],
      },
      {
        test: /\.(png|jpg|swg)$/,
        use: ["file-loader", "url-loader"]
      }
    ],
  },
  plugins: 
    [new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    ],
  mode: "development",
  devServer: {
    https: true,
  },
};