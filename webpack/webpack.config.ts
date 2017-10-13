/* tslint:disable no-var-requires no-console */

import * as path from "path";
// const TypedocWebpackPlugin = require("typedoc-webpack-plugin");

type ExternalsFunctionElement = (
  context: any,
  request: string,
  callback: (error?: any, result?: any) => void,
) => void;
const externals: ExternalsFunctionElement = (_context, request, callback) => {
  if (/^\w/.test(request)) {
    console.info(`External deps used: '${request}'`);
    return callback(undefined, request);
  } else {
    callback();
  }
};

module.exports = {
  devtool: "source-map", // Enable sourcemaps for debugging webpack's output.

  entry: {
    bundle: "./src", // NOTE ./ - project root directory
  },

  externals,

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

  // plugins: [new TypedocWebpackPlugin({ out: "../docs" }, "./src")],

  resolve: {
    extensions: [".ts"],
  },
};
