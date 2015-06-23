var webpack = require('webpack');

module.exports = {
  entry: {
    app: ['./src/application.js']
  },
  output: {
    path: './build',
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  module: {
    loaders: [
      {
        extensions: ['js', 'jsx'],
        test: /.jsx?$/,
        loaders: 'babel-loader?stage=0',
        loader: 'babel-loader?stage=0'
      },
      {
        extensions: ['css'],
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
    ]
  },
  devServer: {
    contentBase: './build',
    noInfo: false
  },
  resolve: {
    modulesDirectories: ['src', 'node_modules']
  }
};
