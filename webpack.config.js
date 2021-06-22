const path = require("path");
// const BundleAnalyzerPlugin =
//   require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
// const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./assets/js/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "portfolio_bundle.js",
  },
  // plugins: [new HtmlWebpackPlugin(), new BundleAnalyzerPlugin()],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "/"),
    port: 5500,
  },
};
