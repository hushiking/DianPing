import React from 'react'

export default class C extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  changeUserInfo = () => {
    const actions = this.props.actions // 4.界面 -> action，触发数据变化
    actions.login({
      userid: '123',
      city: 'shanghai'
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.changeUserInfo}>修改</button>
      </div>
    )
  }
}