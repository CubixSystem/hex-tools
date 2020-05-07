import * as path from "path";
import { Configuration } from "webpack";

const baseConfig: Configuration = {
  devtool: "source-map", // Enable sourcemaps for debugging webpack's output.

  entry: {
    bundle: "./src", // NOTE ./ - project root directory
  },

  mode: "production",

  module: {
    rules: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, loader: "source-map-loader", enforce: "pre" },

      // General files
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: {
          configFile: path.join(__dirname, "./tsconfig.dev.json"),
        },
      },
    ],
  },

  output: {
    filename: "bundle.js",
    library: "hex-tools",
    libraryTarget: "umd",
    path: path.resolve(__dirname, "./dist"),
  },

  resolve: {
    extensions: [".ts"],
  },
};

const serverConfig: Configuration = {
  ...baseConfig,
  output: {
    ...baseConfig.output,
    filename: "bundle.node.js",
  },
  target: "node",
};
const clientConfig: Configuration = baseConfig;

module.exports = [serverConfig, clientConfig];
