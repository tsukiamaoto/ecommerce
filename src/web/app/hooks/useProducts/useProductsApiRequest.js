<<<<<<< HEAD
import { useReducer } from 'react'
import {
  fetching,
  success,
  failure
} from './action'
import reducer, { initialState } from './reducer'

const useProductsApiRequest = payload => {
  const [ state, dispatch ] = useReducer(reducer, initialState)
  const makeRequest = async() => {
    dispatch(fetching())
    const url = '/'
    const response = await fetch({
      url,
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        payload: {
          ...payload
        }
      })
    })
      .catch(e => {
        dispatch(failure(e))
    })

    const json = await response.json()
    dispatch(success(json))
  }
  return [state, makeRequest]
}

export default useProductsApiRequest
=======
import { useReducer } from 'react'
import {
  fetching,
  success,
  failure
} from './action'
import reducer, { initialState } from './reducer'

const useProductsApiRequest = payload => {
  const [ state, dispatch ] = useReducer(reducer, initialState)
  const makeRequest = async() => {
    dispatch(fetching())
    const url = '/'
    const response = await fetch({
      url,
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        payload: {
          ...payload
        }
      })
    })
      .catch(e => {
        dispatch(failure(e))
    })

    const json = await response.json()
    dispatch(success(json))
  }
  return [state, makeRequest]
}

export default useProductsApiRequest
>>>>>>> stream/master
