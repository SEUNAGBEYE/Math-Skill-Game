const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'src'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test:  /\.jsx?$/,
      exclude: /node_modules/
    }, 
    {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader',
      }
    ]
  },
  devServer: {
    contentBase: [path.join(__dirname, 'src'), path.join(__dirname, 'src/styles')],
    compress: true,
    port: 9000
  }
};