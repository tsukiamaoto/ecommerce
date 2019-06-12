import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/styles'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Appbar from '../Common/Appbar'
import { Typography, IconButton } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import { FetchOneProduct } from '../../hooks/useProduct/useProductApiRequest'
import { FiDollarSign, FiShoppingBag, FiPackage, FiShoppingCart } from 'react-icons/fi'

const contentTop = 100
const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: `linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)`,
  },
  container: {
    width: '80%'
  },
  brief: {
    marginTop: theme.spacing.unit * 6,
  },
  types: {
    marginTop: theme.spacing.unit * 5,
    width: '15vw'
  },
  divider: {
    marginTop: theme.spacing.unit * 4 ,
    height: 2,
  },
  icons: {
    height: 30,
    width: 30,
  },
  iconFonts: {
    color: theme.palette.primary.white
  },
  dollars: {
    color: theme.palette.dollar
  },
  plusButton: {
    color: theme.palette.primary.white,
    fontSize: 16
  },
  minusButton: {
    color: theme.palette.primary.white,
    borderColor: theme.palette.white,
    fontSize: 16
  },
  purchaseButton: {
    width: theme.spacing.unit * 25,
    color: theme.palette.primary.white
  }
}))

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    }
  }
}

const Product = props => {
  const classes = useStyles()
  const [productTypes, setproductTypes] = useState()
  const [numbers, setNumbers] = useState(1)
  const [{status, response: product}, makeRequest] = FetchOneProduct(props)

  useEffect(()=>{
    makeRequest()
    // (status === 'SUCCESS')? setproductTypes(response.product.type): setproductTypes('')
  },[])
  const handleTypeChanged = event => {
    setproductTypes(event.target.value)
  }
  const handlePlus = () => {
    if(numbers < product.quantity){
      setNumbers(numbers + 1)
    }
    else
      setNumbers(product.quantity)
  }
  const handleMinus = () => {
    if(numbers > 0)
      setNumbers(numbers - 1)
    else
      setNumbers(0)
  }

  return(
    <div>
      {(status === 'SUCCESS')?
        <div>
          <Appbar/>
          <Box height={contentTop}/>
          <Box display='flex' justifyContent='center'>
            <Paper className={classes.container}>
              <Box display='flex' width='100%'>
                <Box display='flex' width='50%' m={4}>
                  <img
                    src={product.imagePath}
                    alt='pic'
                    width= '100%'
                    minHeight='60%'
                  />
                </Box>
                <Box display='flex' m={4} width='50%'flexDirection='column'>
                  <Typography variant='h5'>{`產品名稱: ${product.title}`}</Typography>
                  <Typography variant='subtitle1' className={classes.brief}>{`商品介紹: ${product.seller}`}</Typography>
                  <FormControl className={classes.types}>
                    {/* <InputLabel htmlFor="select-multiple-checkbox">{`顏色`}</InputLabel>
                    <Select
                      value={response.product.type}
                      onChange={handleTypeChanged}
                      input={<Input/>}
                      renderValue={selected => selected}
                      MenuProps={MenuProps}
                    >
                      {response.product.type.map(type => (
                        <MenuItem key={type} value={type}>
                          <Checkbox color='primary' checked={response.product.type === type} />
                          <ListItemText primary={type} />
                        </MenuItem>
                      ))}
                    </Select> */}
                  </FormControl>
                  <Divider className={classes.divider} />

                  <Box display='flex' mt={5} flexDirection>
                    <FiDollarSign className={classes.icons}/>
                    <Box mx='10%'><Typography>{`價格`}</Typography></Box>
                    <Typography className={classes.dollars}>{`$ ${product.price}`}</Typography>
                  </Box>

                  <Box display='flex' mt={5} flexDirection>
                    <FiShoppingBag className={classes.icons}/>
                    <Box mx='10%'>
                      <Typography>{`數量`}</Typography>
                    </Box>
                    <Button variant='contained' size='medium' color='primary' className={classes.plusButton} onClick={handleMinus}>
                      -
                    </Button>
                    <Box mx='5%'>
                      <Typography>{numbers}</Typography>
                    </Box>
                    <Button variant='contained' size='medium' color='primary' className={classes.minusButton} onClick={handlePlus}>
                      +
                    </Button>
                  </Box>

                  <Box display='flex' mt={5} flexDirection>
                    <FiPackage className={classes.icons}/>
                    <Box mx='10%'>
                      <Typography>{`庫存`}</Typography>
                    </Box>
                    <Typography>{[product.quantity]}</Typography>
                  </Box>
                  <Divider className={classes.divider} />

                  <Box display='flex' mt={5} flexDirection>
                    <Button variant='contained' className={classes.purchaseButton} color='primary'>
                      <Box mr={3}><FiShoppingCart/></Box>
                      <Typography>加入購物車</Typography>
                    </Button>
                    <Box mx={5}>
                      <Button variant='contained' className={classes.purchaseButton} color='primary'>
                        <Typography>直接購買</Typography>
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box m={4}><Divider className={classes.divider} /></Box>
              <Box display='flex' m={4} flexDirection>
                <Typography>
                  商品詳述:{product.description}
                </Typography>
              </Box>
            </Paper>
          </Box>
        </div> : null }
    </div>
  )
}

export default Product
