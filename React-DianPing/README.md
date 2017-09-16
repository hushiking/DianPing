# React-DianPing

本项目综合运用了 `react、redux、webpack2、数据模拟 mock` 等技术，初步实现了大众点评模拟 `App` 。

## 目录结构

1. `app` 目录是项目主文件
1. `mock` 目录是利用 `koa2` 模拟动态接口
1. `.babelrc` 是 `babel` 配置文件
1. `.gitignore` 记录 `git` 版本控制忽略文件
1. `package.json` 管理项目中用到的 `npm` 包
1. `postcss.config.js` 是 `webpack2` 中 `postcss-loader` 的配置文件
1. `webpack.config.js` 是开发环境的 `webpack` 配置文件
1. `webpack.production.js` 是生产环境的 `webpack` 配置文件
1. `yarn.lock` 锁定依赖版本

## 项目运行

1. `npm install -g yarn`
1. `yarn` or `yarn install`
1. 开发环境： `npm start`
1. 项目打包： `npm run build`
1. 数据模拟： `npm run mock`