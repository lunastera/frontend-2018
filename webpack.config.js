module.exports = (env, argv) => {
  return {
    entry: {
      project_name: './src/index.js'
    },
    output: {
      filename: argv.mode === 'production' ? '[name].min.js' : '[name].js',
      path: __dirname + '/dist',
      publicPath: '/'
    },
    devServer: {
      contentBase: 'dist/',
      historyApiFallback: true,
      port: 8888
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    }
  }
}
