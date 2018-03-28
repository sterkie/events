module.exports = {
  lintOnSave: false,
  configureWebpack: {
    rules: [
      {
        test: /\.styl$/,
        loader: ["style-loader", "css-loader", "stylus-loader"]
      }
    ]
  }
};
