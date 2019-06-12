import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

import Rating from './Rating'

const useStyles = makeStyles(theme => ({
  dollar: {
    color: theme.palette.dollar,
    marginTop: 20
  },
  card: {
    height: 450,
    width: 260
  },
  infolink: {
    heigt: 60
  },
  media: {
    maxWidth: 25,
    maxHeight: 25,
    width: 'auto',
    height: 'auto'
  },
  seller: {
    marginTop: 20
  },
  title: {
    height: 60,
    maxHeight: 60
  }

}))

const Product = props => {
  const classes = useStyles()
  const { product } = props
  const { title, imagePath, seller, price, review } = product
  return (
    <div>
      <Card className={classes.card} raised>
        <CardActionArea className={classes.infolink}>
          <Link className={classes.link} to={`/product/${product._id}`}>
            <img
              classNmae={classes.media}
              src={imagePath}
              alt='pic'
              width= '300'
              height='240'
            />
          </Link>
        </CardActionArea>
        <CardContent>
          <Typography className={classes.title}>
            {(title.length < 20)? title : `${title.slice(0,20)}...`}
          </Typography>
          <Button className={classes.seller}>{seller}</Button>
          <Typography className={classes.dollar}>${price}</Typography>
          <Rating max={5} value={review}/>
        </CardContent>
      </Card>
    </div>
  )
}

export default Product
