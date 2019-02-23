const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const context = path.resolve(__dirname, "packages/client");
const public = path.resolve(context, "public");

module.exports = {
  context,
  devServer: {
    contentBase: public
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
    path: public
  },
  plugins: [new CleanWebpackPlugin([public]), new HtmlWebpackPlugin()],
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
};
