const path = require('path');
const webpack = require('webpack');

const config = {
  entry: {
    'billboard-ng': './src/billboard-ng.js',
  },
  externals: ['angular', 'billboard.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `[name]${process.env.NODE_ENV === 'production' ? '.min' : ''}.js`,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /(\.js)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
    ]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
};

module.exports = config;