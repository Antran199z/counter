import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    console.log(this.props.onClick)
    return (
      <button onClick={() => this.props.onClick}>
        {this.props.text}
      </button>
    )
  }
}
