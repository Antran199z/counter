const stateInit = {
  number: 0
}
const numberReducer = (state = stateInit, action) => {

  switch (action.type) {
    case 'INCREASE':
      const inNumber = state.number + 1
      // console.log("INCREASE")
      return {
        ...state,
        number: inNumber
      }
    case 'DECREASE':
      const deNumber = state.number - action.payload.number

      return {
        ...state,
        number: deNumber
      }
    default:
      return {
        ...state
      }
  }
}
export default numberReducer