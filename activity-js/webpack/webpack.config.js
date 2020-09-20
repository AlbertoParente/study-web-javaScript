const modeDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  mode: modeDev ? 'development' : 'production',
  entry: './src/main.js',
  output: {
    filename: "main.js",
    path: __dirname + '/build'
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
            ecma: 6,
        },
    }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ],
  module: {
    rules: [{
      test: /\.s?[ac]ss$/,
      use: [
        MiniCssExtractPlugin.loader,
        //'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: ['file-loader']
    }]
  }
}