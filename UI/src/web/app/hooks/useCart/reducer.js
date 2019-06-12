import * as types from './types'

export const initialState = {
  status: null,
  response: null
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.FETCHING:
      return { ...initialState, status:types.FETCHING }
    case types.SUCCESS:
      return { ...state, status: types.SUCCESS, response: action.response }
    case types.FAILURE:
      return { ...state, status: types.FAILURE, response: action.response }
    default:
      return state
  }
}

export default reducer
