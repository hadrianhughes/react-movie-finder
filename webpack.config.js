const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
  },
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /.ttf$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          },
        },
      },
    ],
  },
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js',
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'static' }
    ]),
  ],
  mode: 'development',
};
