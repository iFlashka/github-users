const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  lintOnSave: false
  // devServer: {
  //   proxy: {
  //     '/access_token': {
  //       target: 'https://github.com/login/oauth/access_token',
  //       changeOrigin: true,
  //       cookieDomainRewrite: {
  //         '*': ''
  //       }
  //     }
  //   }
  // }
})
