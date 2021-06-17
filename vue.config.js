
const path = require("path");
const myTheme = path.resolve(__dirname, "./src/assets/style/plgin-less-path.less");

module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
          modifyVars: {
            hack: `true; @import "${myTheme}";`
            // '@card-thumb-size':'20px'
          },
         
        },
      },
    
  },
}
