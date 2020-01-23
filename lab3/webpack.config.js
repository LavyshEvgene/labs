const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const path = require('path');

const {
  NODE_ENV = 'production',
} = process.env;

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".scss", ".png"]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    publicPath: "/",
    open: true
  },
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: 'http://localhost:8080/'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: "awesome-typescript-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(jpg|png)$/,
        include: path.join(__dirname, 'public/assets'),
        use: {
          loader: 'url-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({ filename: "style.css" })
  ]
};