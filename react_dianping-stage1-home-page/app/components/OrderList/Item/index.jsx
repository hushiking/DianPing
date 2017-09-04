import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Item extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            commentState: 2  // 0--未评价 1--评价中 2--已评价
        }
    }
    render() {
        const data = this.props.data
        return (
            <div className="clear-fix order-item-container">
                <div className="order-item-img float-left">
                    <img src={data.img} alt="" />
                </div>
                <div className="order-item-comment float-right">
                    {
                        // 未评价
                        this.state.commentState === 0
                            ? <button className="btn" onClick={this.showComment.bind(this)}>评价</button>
                            // 评价中
                            : this.state.commentState === 1
                                ? ''
                                // 已评价
                                : <button className="btn unselected-btn">已评价</button>
                    }
                </div>
                <div className="order-item-content">
                    <span>商户：{data.title}</span>
                    <span>数量：{data.count}</span>
                    <span>价格：￥{data.price}</span>
                </div>
                {
                    this.state.commentState === 1
                        ? <div className="comment-text-container">
                            <textarea className="comment-text" cols="30" rows="10" ref={textarea => this.commentText = textarea}></textarea>
                            <button className="btn" onClick={this.submitClickHandle.bind(this)}>提交</button>
                            &nbsp;
                            <button className="btn unselected-btn" onClick={this.hideComment.bind(this)}>取消</button>
                        </div>
                        : ''
                }
            </div>
        )
    }
    componentDidMount() {
        this.setState({
            commentState: this.props.data.commentState
        })
    }
    // 根据状态显示评价按钮
    showComment() {
        this.setState({
            commentState: 1
        })
    }
    // 根据状态隐藏评价按钮
    hideComment() {
        this.setState({
            commentState: 0
        })
    }
    // 提交评价操作
    submitClickHandle() {
        const submitComment = this.props.submitComment
        const id = this.props.data.id
        const textareaDom = this.commentText
        const value = textareaDom.value.trim()
        if (!value) {
            return
        }
        // 提交评价
        submitComment(id, value, this.commentOK.bind(this))
    }
    // 提交评价之后需要修改评价按钮显示状态
    commentOK() {
        // 已经评价，修改状态
        this.setState({
            commentState: 2
        })
    }
}

export default Item