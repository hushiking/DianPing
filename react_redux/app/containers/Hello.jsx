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
// 绑定state到组件的props属性上
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

// 绑定action的dispatch到组件的props属性上
function mapDispatchToProps(dispatch) {
  return {
    userinfoActions: bindActionCreators(userinfoActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello)