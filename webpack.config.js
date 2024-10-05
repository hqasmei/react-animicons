const path = require("path");

module.exports = [
  {
    entry: "./src/index.ts",
    output: {
      filename: "index.js",
      path: path.resolve(__dirname, "dist"),
      libraryTarget: "commonjs2", // CommonJS output
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
  },
  {
    entry: "./src/index.ts",
    output: {
      filename: "index.esm.js",
      path: path.resolve(__dirname, "dist"),
      libraryTarget: "module", // ES Module output
    },
    experiments: {
      outputModule: true,
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
  },
];
