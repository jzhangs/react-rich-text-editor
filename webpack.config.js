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
      }, {
        test: /\.s?css/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }, {
        test: /\.(ttf|png|svg)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name]_[hash:6].[.ext]'
            }
          }
        ]
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
