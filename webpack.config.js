import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { dirname } from "path";
import { fileURLToPath } from "url";
import postcss from "postcss";
const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  mode: "development",
  entry: { bundle: path.resolve(__dirname, "src/index.jsx") },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
    assetModuleFilename: "assets/[name][ext]",
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 5900,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "linCliq",
      template: "./public/index.html",
      filename: "index.html",
    }),
  ],
};
