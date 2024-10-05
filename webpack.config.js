const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const commonConfig = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
};

module.exports = [
  {
    ...commonConfig,
    entry: "./src/index.ts",
    output: {
      filename: "index.js",
      path: path.resolve(__dirname, "dist"),
      libraryTarget: "commonjs2", // CommonJS output
    },
  },
  {
    ...commonConfig,
    entry: "./src/index.ts",
    output: {
      filename: "index.esm.js",
      path: path.resolve(__dirname, "dist"),
      libraryTarget: "module", // ES Module output
    },
    experiments: {
      outputModule: true,
    },
  },
];
