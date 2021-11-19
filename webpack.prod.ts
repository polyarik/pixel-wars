import * as common from "./webpack.common";
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";
const TerserJSPlugin = require("terser-webpack-plugin");
const merge = require("webpack-merge");

export default merge(common, {
  mode: "production",
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
});
