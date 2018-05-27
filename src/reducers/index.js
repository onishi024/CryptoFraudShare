import * as ActionTypes from '../constants/ActionTypes'

const initState = {
  register_form: {
    fraud_confirmed: false,
    fraud_info: {
      tid: "",
      date: "",
      amount: 0,
    },
    normal_info: {
      tid: "",
      date: "",
      amount: 0,
    }
  }
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    // case ActionTypes.SET_GROUPS: {
    //   const groups = action.payload.groups
    //   return {...state, groups}
    // }
    default:
      return state
  }
}

export default reducer
