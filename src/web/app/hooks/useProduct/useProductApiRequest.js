import { useReducer } from 'react'
import {
  fetching,
  success,
  failure
} from './action'
import reducer, { initialState } from './reducer'

const useProductApiRequest = (verb = 'get', params = {productId: '-1'}) => {
  const [ state, dispatch ] = useReducer(reducer, initialState)
  const makeRequest = async() => {
    dispatch(fetching())
    const url = '/product' + (params === {productId: -1} ? null : '/:' + params.productId)
    const response = await fetch({ url,  method: verb })
      .catch(e => {
        dispatch(failure(e))
    })

    const json = await response.json()
    dispatch(success(json))
  }
  return [state, makeRequest]
}

export default useProductApiRequest
