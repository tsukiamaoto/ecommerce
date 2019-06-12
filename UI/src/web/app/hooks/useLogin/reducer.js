import * as types from './types'

export const initialState = {
  status: null,
  response: null
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.LOGIN_FETCH:
      return { ...initialState, status:types.LOGIN_FETCH }
    case types.LOGIN_SUCCESS:
      return { ...state, status: types.LOGIN_SUCCESS, response: action.response }
    case types.LOGIN_FAILURE:
      return { ...state, status: types.LOGIN_FAILURE, response: action.response }
    default:
      return state
  }
}

export default reducer
