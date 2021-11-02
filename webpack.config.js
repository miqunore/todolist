const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
var ghpages = require('gh-pages');

ghpages.publish('dist', function(err) {});


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    open: true,
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.s?ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ]
    
  }
};