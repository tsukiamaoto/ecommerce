import * as types from './types'

export const fetching = () => ({ type: types.REGISTER_FETCH })
export const success = response => ({ type: types.REGISTER_SUCCESS, response })
export const failure = response => ({ type: types.REGISTER_FAILURE, response })
