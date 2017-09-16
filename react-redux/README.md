# redux 结合 react 使用案例

`redux` 通常结合 `react` 使用，作为 `react` 全局状态管理工具。

具体用法参照[阮一峰大神这篇 `react-redux` 日志](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html)

## 目录结构

1. `app` 目录是 `react-redux` 案例全部代码
1. `mock` 目录是 `koa2` 模拟 API 接口
1. `yarn.lock` 锁定所有 `npm` 包的依赖版本，别人执行 `yarn install` 时会根据 `yarn.lock` 安装依赖，保证不同的电脑安装的依赖目录结构完全一致。

## 项目运行

1. `npm install -g yarn`
1. `yarn` or `yarn install`
1. `npm start`