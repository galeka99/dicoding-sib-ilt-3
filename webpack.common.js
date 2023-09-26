const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: `${__dirname}/src/scripts/app.js`,
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Dicoding SIB Batch 5',
      template: `${__dirname}/src/index.html`,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${__dirname}/src/public/`,
          to: `${__dirname}/dist/`,
        }
      ],
    }),
  ],
}