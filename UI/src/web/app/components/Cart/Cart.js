import React, {useState} from 'react'
import { makeStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Appbar from '../Common/Appbar'
import Checkbox from '@material-ui/core/Checkbox'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import _ from 'lodash'
import { Typography } from '@material-ui/core'

const json = require('../../../cart.json')
const products = json

const contentTop = 100
const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: `linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)`,
    height: '100%',
    minHeight: '100vh',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 50,
  },
  title: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.white,
    borderRadius: 6,
    height: 80,
    fontSize: 26,
    width: '100%',
    minWidth: '96vw'
  },
  content: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.white,
    borderRadius: 6,
    fontSize: 26,
    width: '100%',
    minWidth: '96vw'
  },
  checkbox: {
    color: theme.palette.primary.white,
  },
  prodcut: {
    height: 200,
  },
  divid: {
    margin: 20,
    height: 2,
    background: theme.palette.primary.white
  },
  delete: {
    fontSize: 26,
    color: theme.palette.secondary,
    background: theme.palette.primary.white,
    borderRadius:6,
    width: 100
  },
  submit: {
    width: 120,
    color: theme.palette.secondary,
    background: theme.palette.primary.white,
    borderRadius: 6,
    fontSize:26
  },
  total: {
    fontSize: 26
  }
}))

const Cart = props => {
  const classes = useStyles()
  const [allProductState, setAllProductState] = useState()
  const [productState, setProductState] = useState()
  const handleAllProductChosed = event => { setAllProductState(event.target.checked) }
  const handleProductChosed = event => { setProductState(event.target.checked)}
  const total = _.reduce(products,(sum, product) => { return sum + product.price*product.quantity}, 0)
  return(
    <div className={classes.root}>
      <Appbar/>
      <Box height={contentTop}/>
      <Box display='flex' ml={3} width='80%'>
        <Box display='flex' flexDirection='column'>
          <Paper>
            <Box display='flex' className={classes.title} alignItems='center'>
              <Box display='flex' mx={4}>
                <Checkbox
                  onChange={handleAllProductChosed}
                  checked={allProductState}
                  className={classes.checkbox}
                  color='secondary'
                />
              </Box>
              <Box display='flex' mx={2} >商品</Box>
              <Box display='flex' flexGrow={1}/>
              <Box display='flex' mx={8}>單價</Box>
              <Box display='flex' mx={8}>數量</Box>
              <Box display='flex' mx={12}>總計</Box>
              <Box display='flex' mx={12}>操作</Box>
            </Box>
          </Paper>
          <Box mt={4}>
            <Paper className={classes.content}>
              { products.map( (product) => {
                  return(
                    <div>
                      <Box display='flex' className={classes.prodcut} alignItems='center'>
                        <Box display='flex' mx={4}>
                          <Checkbox
                            onChange={handleProductChosed}
                            checked={productState}
                            className={classes.checkbox}
                            color='secondary'
                          />
                        </Box>
                        <Box display='flex' mx={2} >
                          <img
                            classNmae={classes.media}
                            src={require('../../../assets/pic1.jpg')}
                            alt='pic'
                            width= '200'
                            height='180'
                          />
                        </Box>
                        <Box display='flex' mx={2}flexGrow={1}>{product.name}</Box>
                        <Box display='flex' mx={8}>{`$ ${product.price}`}</Box>
                        <Box display='flex' mx={10}>{product.quantity}</Box>
                        <Box display='flex' mx={12}>{`$ ${product.price*product.quantity}`}</Box>
                        <Box display='flex' mx={8}>
                          <Button className={classes.delete}>
                            刪除
                          </Button>
                        </Box>
                      </Box>
                      <Divider className={classes.divid}/>
                    </div>
                )})
              }
              <Box display='flex' height={120} alignItems='center'>
                <Box ml='50%'>
                  <Button className={classes.submit}>
                    結帳
                  </Button>
                </Box>
                <Box mx='10%' flexDirection='row'>
                  <Typography className={classes.total}>
                    {`總金額: $ ${total}`}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Cart
