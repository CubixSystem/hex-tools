/* tslint:disable:no-var-requires */

import * as path from 'path';
const TypedocWebpackPlugin = require('typedoc-webpack-plugin');

module.exports = {
  devtool: 'source-map', // Enable sourcemaps for debugging webpack's output.

  entry: {
    bundle: './src' // NOTE ./ - project root directory
  },

  module: {
    rules: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, loader: 'source-map-loader', enforce: 'pre' },
      { test: /\.ts$/, loader: 'tslint-loader', enforce: 'pre' },

      // General files
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },

  output: {
    filename: 'bundle.js',
    library: 'hex-tools',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '../dist')
  },

  plugins: [new TypedocWebpackPlugin({ out: '../docs' }, './src')],

  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts']
  }
};
