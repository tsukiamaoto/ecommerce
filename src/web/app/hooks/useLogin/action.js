import * as types from './types'

export const fetching = () => ({ type: types.LOGIN_FETCH })
export const success = response => ({ type: types.LOGIN_SUCCESS, response })
export const failure = response => ({ type: types.LOGIN_FAILURE, response })
