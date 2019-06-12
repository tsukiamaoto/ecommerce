import * as types from './types'

export const initialState = {
  status: null,
  response: null
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.REGISTER_FETCH:
      return { ...initialState, status:types.REGISTER_FETCH }
    case types.REGISTER_SUCCESS:
      return { ...state, status: types.REGISTER_SUCCESS, response: action.response }
    case types.REGISTER_FAILURE:
      return { ...state, status: types.REGISTER_FAILURE, response: action.response }
    default:
      return state
  }
}

export default reducer
