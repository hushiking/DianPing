import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class SearchInput extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = () => PureRenderMixin.shouldComponentUpdate
        this.state = {
            value: ''
        }
    }
    render() {
        return (
            <input
                type="text"
                className="search-input"
                placeholder="请输入关键字"
                value={this.state.value}
                onChange={(e) => this.changeHandle(e)}
                onKeyUp={(e) => this.keyUpHandle(e)}
            />
        )
    }
    componentDidMount() {
        this.setState({
            value: this.props.value || ''
        })
    }
    changeHandle(e) {
        console.log(e.target.value);
        
        this.setState({
            value: e.target.value
        })
    }
    keyUpHandle(e) {
        if (e.keyCode !== 13) {
            return
        }
        console.log(this.state.value)
        this.props.enterHandle(this.state.value)
    }
}

export default SearchInput