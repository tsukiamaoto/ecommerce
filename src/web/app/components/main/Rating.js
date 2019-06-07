import React from 'react'
import { FiStar } from 'react-icons/fi'

const Rating = ({value, max, readOnly}) => {
  let stars = []
  for (let i = 0 ; i < max ; i++)
    if(i < value)
      stars.push(<FiStar color='#fdd835' style={{margin: '3px', fill: '#fdd835'}}/>)
    else
      stars.push(<FiStar style={{margin: '3px'}}/>)

  return(
    <div>
      {stars}
    </div>
  )
}

export default Rating
