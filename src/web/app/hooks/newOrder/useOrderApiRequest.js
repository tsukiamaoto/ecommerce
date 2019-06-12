import { useReducer } from 'react'
import {
  fetching,
  success,
  failure
} from './action'
import reducer, { initialState } from './reducer'

const useOrderApiRequest = (verb = 'get', params = { orderId: '-1' }) => {
  const [ state, dispatch ] = useReducer(reducer, initialState)
  const makeRequest = async() => {
    dispatch(fetching())
    const url = '/order' + (params === { orderId: '-1' } ? null : '/:' + params.orderId)
    const response = await fetch({ url,  method: verb })
      .catch(e => {
        dispatch(failure(e))
    })

    const json = await response.json()
    dispatch(success(json))
  }
  return [state, makeRequest]
}

export default useOrderApiRequest
