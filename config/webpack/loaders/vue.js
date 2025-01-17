module.exports = {
  test: /\.vue$/,
  loader: 'vue-loader',
  options: {
    loaders: {
      pug: 'pug-plain-loader' // Pug 用のローダーを設定
    }
  }
};
