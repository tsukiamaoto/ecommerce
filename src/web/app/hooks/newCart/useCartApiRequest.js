import { useReducer } from 'react'
import {
  fetching,
  success,
  failure
} from './action'
import reducer, { initialState } from './reducer'

const useCartApiRequest = (verb = 'get') => {
  const [ state, dispatch ] = useReducer(reducer, initialState)
  const makeRequest = async() => {
    dispatch(fetching())
    const url = '/cart'
    const response = await fetch({ url,  method: verb })
      .catch(e => {
        dispatch(failure(e))
    })

    const json = await response.json()
    dispatch(success(json))
  }
  return [state, makeRequest]
}

export default useCartApiRequest
