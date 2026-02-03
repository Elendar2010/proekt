const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd: boolean = process.env.NODE_ENV === 'production';
const isDev: boolean = !isProd;

const filename = (ext: string): string =>
  isDev ? `build.${ext}` : `build.[contenthash].${ext}`;

const jsLoaders = () => {
  const loaders: (string | { loader: string; options?: any })[] = [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  ];

  if (isDev) {
    loaders.push('eslint-loader');
  }

  return loaders;
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: isProd ? 'production' : 'development',

  entry: './index.ts',

  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  devtool: isDev ? 'source-map' : false,

  devServer: {
    port: 3000,
    open: true,
    hot: true,
    compress: true,
  },

  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@core': path.resolve(__dirname, 'src/core'),
    },
  },

  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin(),

    new HtmlWebpackPlugin({
      template: 'index.html',
      minify: isProd
        ? {
            collapseWhitespace: true,
            removeComments: true,
          }
        : false,
    }),

    new MiniCssExtractPlugin({
      filename: filename('css'),
    }),

    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/favicon.ico'),
          to: path.resolve(__dirname, 'dist'),
        },
      ],
    }),
  ],

  module: {
    rules: [
      // Images
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
      },
      // CSS
      {
        test: /\.css$/i,
        use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
      },
      // TypeScript
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // JavaScript
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: jsLoaders(),
      },
    ],
  },
};
