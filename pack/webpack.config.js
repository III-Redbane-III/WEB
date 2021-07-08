const path = require('path');

module.exports = {
  mode: 'development',
  entry: './js/main.js',
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(gif|png|jpe?g|svg|xml|mp3)?$/i,
        use: "file-loader"
    },
    ],
  },
};