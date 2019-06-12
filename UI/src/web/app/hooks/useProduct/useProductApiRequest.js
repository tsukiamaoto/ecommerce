import { useReducer } from 'react'
import {
  fetching,
  success,
  failure
} from './action'
import reducer, { initialState } from './reducer'

export const FetchAllProducts = props => {
  const [ state, dispatch ] = useReducer(reducer, initialState)
  const makeRequest = async() => {
    dispatch(fetching())
    const url = '/product'
    const response = await fetch( url,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .catch(e => {
        dispatch(failure(e))
    })
    const json = await response.json()
    const products = json.products
    dispatch(success(products))
  }
  return [state, makeRequest,dispatch]
}

export const FetchOneProduct = props => {
  const [ state, dispatch ] = useReducer(reducer, initialState)
  const makeRequest = async() => {
    console.log(props)
    dispatch(fetching())
    const productId = props.match.params.productId
    const url = `/product/${productId}`
    const response = await fetch( url,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .catch(e => {
        dispatch(failure(e))
    })
    const json = await response.json()
    const product = json.product
    dispatch(success(product))
  }

  return [state, makeRequest]
}
