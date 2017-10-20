import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as userinfoActions from '../actions/userinfo'

import A from '../components/A'
import B from '../components/B'
import C from '../components/C'

class Hello extends React.Component {
  componentDidMount() {
    // 模拟登陆
    this.props.userinfoActions.login({
      userid: 'abc',
      city: 'beijing'
    })
  }
  
  render() {
    return (
      <div>
        <p>hello world</p>
        <hr/>
        <A userinfo={this.props.userinfo}/>
        <hr/>
        <B userinfo={this.props.userinfo}/>
        <hr/>
        <C actions={this.props.userinfoActions}/>
      </div>
    )
  }
}
// 3.绑定 userinfo 到组件的 props 属性上，定义数据(即 state)变化之后的派发规则
// redux 执行数据流：4. store -> virtualDom -> 界面
const mapStateToProps = state => {
  return {
    userinfo: state.userinfo
  }
}

// function mapStateToProps(state) {
//   return {
//     userinfo: state.userinfo
//   }
// }

// 4.绑定 userinfoActions 到组件的 props 属性上，等待界面触发数据变化
// redux 执行数据流：4. store -> virtualDom -> 界面
function mapDispatchToProps(dispatch) {
  return {
    userinfoActions: bindActionCreators(userinfoActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello)