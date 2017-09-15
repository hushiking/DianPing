import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import './static/css/common.less'

import Hello from './containers/Hello'
// 创建Redux的store对象
const store = configureStore()
// 测试fetch功能
import { getData, postData } from './fetch/test.js'
getData()
postData()

ReactDom.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root')
)
