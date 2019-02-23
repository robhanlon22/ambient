const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "packages/client"),
  devServer: {
    contentBase: "./dist"
  },
  devtool: "inline-source-map",
  entry: "./src/index.tsx",
  mode: "development",
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: "ts-loader"
      }
    ]
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [new CleanWebpackPlugin(["dist"]), new HtmlWebpackPlugin()],
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
};
