const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');
// eslint-disable-next-line import/no-extraneous-dependencies
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/@client/index.client.js',
  output: {
    path: path.join(__dirname, '../dist-client'),
    filename: 'js/client.bundle.js',
  },
  // mode: 'development',
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, '../src')],
  },
  devtool: 'inline-source-map', // inlines SourceMap into original file
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // {
      //     test: /\.css$/,
      //     use: ["style-loader", "css-loader"]
      // }
      {
        test: /\.scss$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|j?g|svg|gif)?$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
      hmr: process.env.NODE_ENV === 'development',
    }),
    // new HtmlWebpackPlugin({
    //     // inject: false,
    //     // hash: true,
    //     template: './src/index.html',
    //     // filename: 'index.html'
    // })
  ],
};
