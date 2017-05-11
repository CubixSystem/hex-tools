import * as path from 'path';

module.exports = {
  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  // NOTE ./ - project root directory
  entry: {
    bundle: './src'
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
  path: path.resolve(__dirname, './dist')
  },

  resolve: {
    extensions: [ '.webpack.js', '.web.js', '.ts' ]
  }
};
