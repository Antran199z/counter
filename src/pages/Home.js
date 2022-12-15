import React, { Component } from 'react'
import Button from '../components/Button'
import { connect, Connect } from 'react-redux'
import * as actionType from '../redux/action/action'
class Home extends Component {
  render() {
    return (
      <div>
        <button onClick={() => { this.props.derease() }} > - </button>
        <button onClick={() => { this.props.derease() }} > -5 </button>
        <h2>{this.props.number}</h2>
        <button onClick={() => { this.props.inrease() }} > + </button>
        <button onClick={() => { this.props.inrease() }} > +5 </button>

      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    number: state.numberReducer.number
  }
}
const maDispatchToProps = (dispatch) => {
  return {
    inrease: () => {
      dispatch(actionType.increaseAction())
    },
    derease: (payload) => {
      dispatch(actionType.decreaseAction(payload))
    },
  }
}
export default connect(mapStateToProps, maDispatchToProps)(Home)