# 创建过程

通过脚手架初始化项目:  [create-react-app](https://create-react-app.dev/)

```javascript
yarn create-react-app my-app
cd my-app
yarn start
```

界面实现:[antd](https://ant.design/index-cn)
数据管理:[mobx](https://cn.mobx.js.org/)

2.其他相关
// 配置webpack
方法一: `npm run eject` (一旦运行不可回退),暴露出所有的配置文件
方法二: 重写webpack,首先安装`yarn add react-app-rewired customize-cra`(react-app-rewired@2.x 以上版本),在根文件下创建`config-overrides.js`文件

```javascript
const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  // 页面路径绝对化
  addWebpackAlias({
      ["mock"]: path.resolve(__dirname, "src/mock"),
      ["containers"]: path.resolve(__dirname, "src/containers"),
      ["components"]: path.resolve(__dirname, "src/components"),
      ["assets"]: path.resolve(__dirname, "src/assets"),
      ["global"]: path.resolve(__dirname, "src/global")
  })
)
```
