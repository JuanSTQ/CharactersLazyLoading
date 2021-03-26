const path = require('path');
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output : {
    path: path.resolve(__dirname, "dist"),
    filename: 'main.js'
  },
  resolve:{
    extensions:['.js']
  },
  module:{
    rules: [
      {
        test: /\.(js)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/style/index.css'),
          to: './assets/style/index.css'
        }
      ]
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html'
    })
  ],
  devServer:{
    contentBase: path.join(__dirname,"dist"),
    compress: true,
    historyApiFallback: true,
    port: 3004,
    open: true,
  }
}