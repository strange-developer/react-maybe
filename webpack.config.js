const path = require('path');

module.exports = () => ({
  entry: {
    main: path.resolve(__dirname, './src/index.jsx'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, './dist'),
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react'],
            },
          },
        ],
        exclude: ['/node_modules/'],
      },
    ],
  },
});
