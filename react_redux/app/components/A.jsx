import React from 'react'

export default class A extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <p>
        {this.props.userinfo.userid}
      </p>
    )
  }
}