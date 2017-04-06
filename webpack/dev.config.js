var path = require('path');

var webpack = require('webpack');

var rootPath = path.resolve(path.join(__dirname, '..'));
var srcPath = path.resolve(path.join(rootPath, 'src'));
var distPath = path.resolve(path.join(rootPath, 'dist'));

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  context: srcPath,
  entry: [
    'webpack/hot/dev-server',
    './index.js',
  ],
  output: {
    path: distPath,
    filename: '/static/index.js',
  },
  devServer: {
    hot: true,
    contentBase: distPath,
    publicPath: '/',
    port: process.env.PORT || 8080,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __APIURL__: JSON.stringify(process.env.APIURL || 'http://localhost:8000/'),
      __DEVELOPMENT__: true,
    }),
  ],
  resolve: {
    root: srcPath,
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {test: /\.(js|jsx)$/, loader: 'babel', exclude: /node_modules/},
      {test: /\.css$/, loader: 'style!css', exclude: /node_modules/},
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
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['file-loader?context=src/images&name=images/[path][name].[ext]', {
          loader: 'image-webpack-loader',
          query: {
            mozjpeg: {
              progressive: true,
            },
            gifsicle: {
              interlaced: false,
            },
            optipng: {
              optimizationLevel: 4,
            },
            pngquant: {
              quality: '75-90',
              speed: 3,
            },
          },
        }],
        exclude: /node_modules/,
        include: __dirname,
      },
    ],
  },
};
