import { useReducer } from 'react'
import history from '../../../store/history'
import {
  fetching,
  success,
  failure
} from './action'
import reducer, { initialState } from './reducer'

const useLoginApi = payload => {
  const [ state, dispatch ] = useReducer(reducer, initialState)
  const makeRequest = async() => {
    dispatch(fetching())
    const url = '/login'
    const response = await fetch({
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        payload: [
          ...payload
        ]
      })
    })
      .catch(e => {
        dispatch(failure(e))
    })

    const json = await response.json()
    dispatch(success(json))
    history.push('/')
  }
  return [state, makeRequest]
}

export default useLoginApi
