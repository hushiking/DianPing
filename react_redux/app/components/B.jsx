import React from 'react'

export default class B extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <p>
        {this.props.userinfo.city}
      </p>
    )
  }
}