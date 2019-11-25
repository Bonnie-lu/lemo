const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

// 重写webpack配置 
module.exports = override(
  addWebpackAlias({
      ["mock"]: path.resolve(__dirname, "src/mock"),
      ["containers"]: path.resolve(__dirname, "src/containers"),
      ["components"]: path.resolve(__dirname, "src/components"),
      ["assets"]: path.resolve(__dirname, "src/assets"),
      ["global"]: path.resolve(__dirname, "src/global")
  })
)