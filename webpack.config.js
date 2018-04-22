const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './examples/index.js',
  output: {
    path: path.resolve(__dirname, 'examples/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './examples/index.html'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'examples'),
    port: 8088
  },
};
