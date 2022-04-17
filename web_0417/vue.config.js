module.exports = {
  lintOnSave: false,
  // 解决跨域
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8081',
        pathRewrite: { '^/api': '' },
        ws: true,
        changeOrigin: true,
      },
    },
  },
}
