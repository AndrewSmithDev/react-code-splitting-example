const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  return {
    devServer: {
      client: {
        webSocketURL: "auto://0.0.0.0:0/ws",
      },
      host: "0.0.0.0",
      port: 8080,
      hot: true,
      historyApiFallback: true,
    },
    mode: env.NODE_ENV,
    entry: {
      src: path.resolve(__dirname, "src/index.tsx"),
    },
    output: {
      path: path.join(__dirname, "public"),
      filename: "[name].js",
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [{ loader: "ts-loader" }],
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [{ loader: MiniCssExtractPlugin.loader }, { loader: "css-loader" }],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html"),
      }),
    ],
  };
};
