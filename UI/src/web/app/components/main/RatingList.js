import React from 'react'
import Box from '@material-ui/core/Box'
import Rating from './Rating'
import Button from '@material-ui/core/Button'
import _ from 'lodash'

const RatingList = props => {
  const {max, value} = props
  let ratings = []
  _.map(value,rating => {
    ratings.push(
      <Box mt={2}>
        <Button>
          <Rating max={max} value={rating}/>
        </Button>
      </Box>
    )
  })
  return(
    <div>
      {ratings}
    </div>
  )
}

export default RatingList
