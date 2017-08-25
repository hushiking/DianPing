import React from 'react'
import ReactDom from 'react-dom'

import './static/css/common.less'

// 单独引用并执行redux-demo
import fn from './redux-demo.js'
fn()

class Hello extends React.Component {
  render() {
    return <p>hello world</p>
  }
}

ReactDom.render(
  <Hello/>,
  document.getElementById('root')
)
