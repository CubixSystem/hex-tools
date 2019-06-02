import * as path from "path";
import { ExternalsFunctionElement } from "webpack";

const externals: ExternalsFunctionElement = (_context, request, callback) => {
  if (/^\w/.test(request)) {
    // tslint:disable-next-line:no-console
    console.info(`External deps used: '${request}'`);
    return callback(undefined, request);
  } else {
    callback(undefined, undefined);
  }
};

const baseConfig = {
  devtool: "source-map", // Enable sourcemaps for debugging webpack's output.

  entry: {
    bundle: "./src", // NOTE ./ - project root directory
  },

  externals,

  mode: "production",

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

  resolve: {
    extensions: [".ts"],
  },
};

const serverConfig = {
  ...baseConfig,
  output: {
    ...baseConfig.output,
    filename: "bundle.node.js",
  },
  target: "node",
};
const clientConfig = baseConfig;

module.exports = [serverConfig, clientConfig];
