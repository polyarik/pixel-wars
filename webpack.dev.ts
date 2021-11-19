import { Configuration } from "webpack";
import * as common from "./webpack.common";
const merge = require("webpack-merge");

export default merge(common, { mode: "development" });
