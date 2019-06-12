import React, { useState , useReducer } from 'react'
import { makeStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Divider from '@material-ui/core/Divider'
import RatingList from './RatingList'
import { FiFilter} from 'react-icons/fi'


const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.primary.main,
    width: '15vw',
  },
  icons: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4
  },
  title: {
    color: theme.palette.primary.white,
    fontSize: 26,
    fontWeight: 'bold'
  },
  input: {
    background: theme.palette.primary.white,
    color: 'black',
    borderRadius: 6
  },
  divid: {
    marginTop: '4vh',
    height: 2,
    background: theme.palette.primary.white
  },
  rating: {
    borderRadius: 6
  },
  confirm: {
    background: theme.palette.primary.white,
    color: theme.palette.primary.black
  }
}))

const Filter = props => {
  const classes = useStyles()
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(0)
  const handleMinPriceChanged = event => { setMinPrice(event.target.value) }
  const handkeMaxPriceChanged = event => { setMaxPrice(event.target.value) }
  console.log(props.products)
  const [products , dispatch] = useReducer((state, action) => {
    switch(action.type){
      case 'priceFilter':
        return {products: state.products.filter(({ name, image, seller, price, review }) =>
          price >= minPrice && price <= maxPrice) };
      default:
        return state;
    }
  }, props)

  return(
    <div>
      <Box display='flex' className={classes.root} mx={4}>
        <Box display='flex' m={4} flexDirection='column'>
          <Box display='flex' flexDirection>
            <FiFilter className={classes.icons} color='white'/>
            <Box display='flex' mx={3}>
              <Typography className={classes.title}>篩選條件</Typography>
            </Box>
          </Box>
          <Box display='flex' mt={8} flexDirection='column'>
            <Typography className={classes.title}>商品種類</Typography>

          </Box>
          <Box display='flex' mt={3} flexDirection='column'>
            <Typography className={classes.title}>價格</Typography>
            <Box display='flex' flexDirection='column'>
              <TextField
                className={classes.input}
                label='最低價格'
                type='number'
                autoComplete='number'
                margin='normal'
                variant='outlined'
                onChange={handleMinPriceChanged}
              />
              <TextField
                className={classes.input}
                label='最高價格'
                type='number'
                autoComplete='number'
                margin='normal'
                variant='outlined'
                onChange={handkeMaxPriceChanged}
              />
            </Box>
            <Button className={classes.confirm} onClick={() => {dispatch({type: 'priceFilter'})}}>
              立即查詢
            </Button>
          </Box>
          <Divider className={classes.divid}/>
          <Box display='flex' flexDirection='column'>
            <Box mt={4}>
              <Typography className={classes.title}>顧客評價</Typography>
            </Box>
            <Box mt={2}>
              <RatingList max={5} value={[5,4,3,2,1]}/>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Filter
