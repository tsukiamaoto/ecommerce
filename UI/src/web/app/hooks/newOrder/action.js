import * as types from './types'

export const fetching = () => ({ type: types.FETCHING })
export const success = response => ({ type: types.SUCCESS, response })
export const failure = response => ({ type: types.FAILURE, response })
