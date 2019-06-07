import React, {useState} from 'react'
import { makeStyles } from '@material-ui/styles'

import Appbar from '../Common/Appbar'

const useStyles = makeStyles(theme => ({

}))

const Product = props => {
  const classes = useStyles()

  return(
    <div>
      <Appbar/>
    </div>
  )
}

export default Product
