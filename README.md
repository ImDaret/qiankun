# qiankun

## first 主应用

在主应用中注册子应用,可选择路由匹配或者是手动加载

## second 微应用

1. 新增`public-path.js`
2. 设置路由模式`base`，值和`activeRule`一样,建议使用`history`模式
3. 入口文件导出三个生命周期韩式，并引入`public-path.js`
4. 修改`webpack`打包，允许开发环境跨域和umd打包

## 一键下载全部依赖和一键启动全部项目

配置`package.json`文件，使用npm-run-all

## 本项目的启动
1. yarn all:install
2. yarn all:dev