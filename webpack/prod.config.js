var path = require('path');
var webpack = require('webpack');

var CleanPlugin = require('clean-webpack-plugin');

var rootPath = path.resolve(path.join(__dirname, '..'));
var srcPath = path.resolve(path.join(rootPath, 'src'));
var distPath = path.resolve(path.join(rootPath, 'dist', 'static'));

module.exports = {
  context: srcPath,
  entry: [
    './index.js',
  ],
  output: {
    path: distPath,
    publicPath: '/static/',
    filename: 'index.js',
  },
  plugins: [
    new CleanPlugin([distPath], rootPath),
    new webpack.DefinePlugin({
      __APIURL__: JSON.stringify(process.env.APIURL || 'http://localhost:8000/'),
      __DEVELOPMENT__: false,
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
  resolve: {
    root: srcPath,
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style!css', exclude: /node_modules/ },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream',
      },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
    ],
  },
};
