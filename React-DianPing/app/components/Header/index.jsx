import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory } from 'react-router'

import './style.less'

class Header extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = () => PureRenderMixin.shouldComponentUpdate
    }
    render() {
        return (
            <div id="common-header">
                <span className="back-icon" onClick={() => this.clickHandle()}>
                    <i className="icon-chevron-left"></i>
                </span>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
    // 用户中心头部返回键 --> 登录页（登录页会判断是否登录，如果登录了不会停留，直接跳转到用户中心页面，导致返回键看起来没效果）
    // 所以这里传入一个backRouter属性，如果有该属性，则跳转到home主页面
    clickHandle() {
        const backRouter = this.props.backRouter
        if (backRouter) {
            hashHistory.push(backRouter)
        } else {
            window.history.back()
        }
    }
}

export default Header