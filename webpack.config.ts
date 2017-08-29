/* tslint:disable no-var-requires no-console */

import * as path from "path";
import * as webpack from "webpack";
const TypedocWebpackPlugin = require("typedoc-webpack-plugin");

module.exports = {
  devtool: "source-map", // Enable sourcemaps for debugging webpack's output.

  entry: {
    bundle: "./src", // NOTE ./ - project root directory
  },

  externals: [
    (context, request, callback) => {
      if (/^\w/.test(request)) {
        console.log(`'${request}' is external module`);
        return callback(null, request);
      }
      callback();
    },
  ],

  module: {
    rules: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, loader: "source-map-loader", enforce: "pre" },
      { test: /\.ts$/, loader: "tslint-loader", enforce: "pre" },

      // General files
      { test: /\.ts$/, loader: "ts-loader" },
    ],
  },

  output: {
    filename: "bundle.js",
    library: "hex-tools",
    libraryTarget: "umd",
    path: path.resolve(__dirname, "../dist"),
  },

  plugins: [new TypedocWebpackPlugin({ out: "../docs" }, "./src")],

  resolve: {
    extensions: [".ts"],
  },
};
