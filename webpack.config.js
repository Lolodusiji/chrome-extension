const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    Popup: './src/Popup.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/Popup.html', // Change this to your HTML template file
      filename: 'Popup.html',       // Change the output HTML file name
      chunks: ['Popup'],           // Specify which entry chunks to include in the HTML
    }),
    new CopyPlugin({
        patterns: [
          { from: "public" },
        ],
      }),
  ],
};
