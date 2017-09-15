import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { getOrderListData, postComment } from '../../../fetch/user/orderList.js'
import OrderListComponent from '../../../components/OrderList'

import './style.less'

class OrderList extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            data: []
        }
    }
    render() {
        return (
            <div className="order-list-container">
                {
                    this.state.data.length
                        ? <OrderListComponent data={this.state.data} submitComment={this.submitComment.bind(this)} />
                        : ''
                }
            </div>
        )
    }
    componentDidMount() {
        // 获取订单信息
        const username = this.props.username
        if (username) {
            this.loadOrderList(username)
        }
    }
    // 订单列表
    loadOrderList(username) {
        const result = getOrderListData(username)
        result.then(res => {
            return res.json()
        }).then(json => {
            this.setState({
                data: json
            })
        })
    }
    // 提交评价
    submitComment(id, value, callback) {
        const result = postComment(id, value)
        result.then(res => {
            return res.json()
        }).then(json => {
            if (json.errno === 0) {
                // 已经评价，修改状态
                console.log(json)
                callback()
            }
        })
    }
}

export default OrderList