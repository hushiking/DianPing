import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo.js'
import Header from '../../components/Header'
import LoginComponent from '../../components/Login'

class Login extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = () => PureRenderMixin.shouldComponentUpdate
        this.state = {
            checking: true
        }
    }
    render() {
        return (
            <div>
                <Header title="登录" />
                {
                    // 等待验证之后再显示登录信息
                    this.state.checking
                    ? <div></div>
                    : <LoginComponent loginHandle={(username) => this.loginHandle(username)} />
                }
            </div>
        )
    }
    componentDidMount() {
        // 判断是否已经登录
        this.doCheck()
    }
    // 登录成功之后的处理
    loginHandle(username) {
        // 保存用户名
        const actions = this.props.userInfoActions
        let userinfo = this.props.userinfo
        userinfo.username = username
        actions.update(userinfo)

        // 跳转链接
        const params = this.props.params
        const router = params.router
        if (router) {
            // 跳转到指定页面
            hashHistory.push(router)
        } else {
            // 跳转到默认页面，即用户中心
            this.goUserPage()
        }
    }
    doCheck() {
        const userinfo = this.props.userinfo
        if (userinfo.username) {
            // 已经登录，跳转到用户主页
            this.goUserPage()
        } else {
            // 尚未登录，验证结束
            this.setState({
                checking: false
            })
        }
    }
    goUserPage() {
        hashHistory.push('/user')
    }
}

// redux react 绑定
function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}
function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)