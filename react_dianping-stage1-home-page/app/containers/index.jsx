import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as userInfoActionsFromOtherFile from '../actions/userinfo.js'
import LocalStore from '../util/localStore.js'
import { CITYNAME } from '../config/localStoreKey.js'

class App extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = () => PureRenderMixin.shouldComponentUpdate
        this.state = {
            initDone: false
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.initDone ? this.props.children : <div>正在加载...</div>
                }
            </div>
        )
    }
    componentDidMount() {
        // 获取位置信息
        let cityName = LocalStore.getItem(CITYNAME)
        if (cityName == null) {
            cityName = '北京'
        }
        this.props.userInfoActions.update({
            cityName
        })

        // 更改状态
        this.setState({
            initDone: true
        })
    }
}

// ---------redux react 绑定
// 定义数据（即 state）变化之后的派发规则
function mapStateToProps(state) {
    return {}
}
// 绑定触发计算规则（数据变化）
function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)