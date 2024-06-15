const path = require("path");
const fs = require("fs");
const Dotenv = require("dotenv-webpack");

var nodeModules = {};
fs.readdirSync("node_modules")
  .filter(function (x) {
    return [".bin"].indexOf(x) === -1;
  })
  .forEach(function (mod) {
    nodeModules[mod] = "commonjs " + mod;
  });

module.exports = {
  entry: "./api/index.js",
  mode: "production",
  target: "node",
  output: {
    path: path.join(__dirname, "..", "dist"),
    filename: "index.js",
  },
  plugins: [
    new Dotenv({
      path: path.join(__dirname, "local.env"),
    }),
  ],
  // module: {
  // 	noParse: [/dtrace.js$/, /dtrace-provider.js$/, /serializer.js$/],
  // 	rules: [
  // 		{
  // 			test: /\.js$/,
  // 			// exclude: /(node_modules)/,
  // 			use: {
  // 				loader: 'babel-loader'
  // 			}
  // 		}
  // 	]
  // }
};
