import * as actionType from '../content/content'
export const increaseAction = () => {
  return {
    type: actionType.INCREASE
  }
}
export const decreaseAction = (payload) => {
  return {
    type: actionType.DECREASE,
    payload
  }
}
