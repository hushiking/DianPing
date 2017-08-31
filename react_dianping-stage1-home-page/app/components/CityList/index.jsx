import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class CityList extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = () => PureRenderMixin.shouldComponentUpdate
    }
    render() {
        return (
            <div className="city-list-container">
                <h3>热门城市</h3>
                <ul className="clear-fix">
                    <li><span onClick={() => this.clickHandle('北京')}>北京</span></li>
                    <li><span onClick={() => this.clickHandle('上海')}>上海</span></li>
                    <li><span onClick={() => this.clickHandle('广州')}>广州</span></li>
                    <li><span onClick={() => this.clickHandle('深圳')}>深圳</span></li>
                    <li><span onClick={() => this.clickHandle('杭州')}>杭州</span></li>
                    <li><span onClick={() => this.clickHandle('成都')}>成都</span></li>
                </ul>
            </div>
        )
    }
    clickHandle(newCity) {
        const changeFn = this.props.changeFn
        changeFn(newCity)
    }
}

export default CityList