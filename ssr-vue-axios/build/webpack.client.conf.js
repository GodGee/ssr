const webpack = require("webpack");
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

module.exports = {
  entry: "./src/entry-client.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.client.js",
    publicPath: "/dist/"
  },
  plugins: [],
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": resolve("src")
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          compilerOptions: {
            preserveWhitespace: false //如果设置为 false，模版中 HTML 标签之间的空格将会被忽略。
          }
        }
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [
          resolve("src"),
          resolve("test"),
          resolve("node_modules/webpack-dev-server/client")
        ]
      }
    ]
  }
};
