const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
      path: path.resolve('./dist'),
      filename: 'main.js',
  },
  module: {
    rules: [   
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
        loader: 'babel-loader',
      }
    ],
  },
  devServer: {
    static: {
      directory: path.resolve('./'),
    },
    compress: true,
    port: 8080,
  },
};