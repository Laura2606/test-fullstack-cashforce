const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8000,
  },
  chainWebpack: (config) => {
    config.plugin('define').tap((definitions) => {
      // Adicione as flags que você precisa
      definitions[0]['__VUE_PROD_HYDRATION_MISMATCH_DETAILS__'] = JSON.stringify(true);
      return definitions;
    });
  },
});
