const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const BundleAnalyzerPlugin =
//   require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  entry: "./assets/js/main.js",
  output: {
    publicPath: '/dist/',
    path: path.resolve(__dirname, "dist"),
    filename: "portfolio_bundle.js",
  },
  devtool: 'source-map',
  // plugins: [new HtmlWebpackPlugin({ title: "Development" })],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./"),
    compress: true,
    port: 9000,
  },
};
