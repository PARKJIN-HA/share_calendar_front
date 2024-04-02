const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry:'./src/index.js',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    static: './dist',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'APP',
      hash: true,
      template: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[contenthash:8].css',
      chunkFilename: 'assets/css/[name].[contenthash:8].chunk.css',
    }),
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization:{
    runtimeChunk: 'single',
  },
  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              cacheCompression: false,
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          }
        ]
      },
      {
        test: /\.css$/i,
        exclude: /\.module\.css$/i, // 모듈 파일 제외 설정
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.module\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
      }]},
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
