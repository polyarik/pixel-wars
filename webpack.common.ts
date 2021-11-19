import * as path from "path";
import MiniCssExtractPlugin, {
  loader as _loader,
} from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import RemovePlugin from "remove-files-webpack-plugin";

export const entry = {
  game: "./src/client/index.ts",
};

export const output = {
  filename: "[name].[contenthash].js",
  path: path.resolve(__dirname, "dist"),
};

export const resolve = {
  extensions: [".ts", ".js"],
};

export const module = {
  rules: [
    {
      test: /\.ts$/,
      loader: "ts-loader",
      exclude: /node_modules/,
    },
    {
      test: /\.css$/,
      use: [
        {
          loader: _loader,
        },
        "css-loader",
      ],
    },
  ],
};

export const plugins = [
  new RemovePlugin({
    before: {
      test: [
        {
          folder: "dist",
          method: () => true,
          recursive: true,
        },
      ],
    },
  }),
  new MiniCssExtractPlugin({
    filename: "[name].[contenthash].css",
  }),
  new HtmlWebpackPlugin({
    filename: "index.html",
    template: "src/client/html/index.html",
  }),
];
