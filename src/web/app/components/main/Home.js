import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Pagination from 'material-ui-flat-pagination'
import Appbar from '../Common/Appbar'
import Filter from './Filter'
import Product from './product'
import _ from 'lodash'

const json = require('../../../../web/data.json')
const products = json

const contentTop = 100
const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: `linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)`,
    height: '100%',
    minHeight: '100vh'
  },
  sort: {
    background: theme.palette.primary.main,
    borderRadius: 6,
    height: 80
  },
  sortTitle: {
    color: theme.palette.primary.white,
    fontSize: 26,
    width:'5%',
    marginLeft: '2vw'
  },
  sortContent: {
    background: theme.palette.primary.white,
    borderRadius: 6,
    width: '13%',
  },
  productList: {
    width: '100%',
  },
  menu: {
    width: '20%'
  },
  pagination: {
    background: theme.palette.pagination,
    borderRadius: 5,
    opacity: 0.9,
  }

}))

const Home = props => {
  const classes = useStyles()
  const [sort, setSort] = useState('最新')
  const [offset, setOffset] = useState(0)
  const sortType = [
    { value:'newest', label:'最新' },
    { value:'reviewHightToLow', label:'評價:高到低' },
    { value:'priceLowToHigh', label:'價格:低到高' },
    { value:'priceHighToLow', label:'價格:高到低' }]
    

  const handleSortChanged = event => {
    setSort( event.target.value)
  }
  const handlePageClick = (event, offset) => {
    setOffset(offset)
  }


  return (
    <div className={classes.root}>
      <Appbar products={products}/>
      <Box display='flex' flexDirection='column'>
        <Box height={contentTop}/>
        <Box display='flex' flexDirection>
          <Filter products={products}/>
          <Box display='flex' mx={3} flexDirection='column' width='80%'>
            <Paper>
              <Box display='flex' className={classes.sort} alignItems='center'>
                <Typography className={classes.sortTitle}>排序</Typography>
                <Box ml={5} width={1}>
                  <TextField
                    select
                    className={classes.sortContent}
                    value={sort}
                    onChange={handleSortChanged}
                    color='white'
                    variant='outlined'
                    SelectProps={{
                      native: true,
                      MenuProps: {
                        className: classes.menu,
                      },
                    }}
                  >
                    { _.map(sortType, option => {
                      return(
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option >
                    )})}
                  </TextField>
                </Box>
              </Box>
            </Paper>
            <Box display='flex'>
              <Grid className={classes.productList} container >
                { products.map((product) => (
                  <Grid display='flex' flexDirection>
                    <Box display='flex' mt={4} mr={4}>
                      <Product product={product}/>
                    </Box>
                  </Grid>
                  )
                )}
              </Grid>
            </Box>
            <Box id='pagination' display='flex'  justifyContent="center" mt={3}>
              <Pagination
                className={classes.pagination}
                reduced
                size='large'
                limit={10}
                offset={offset}
                total={100}
                onClick={handlePageClick}
              />
          </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Home
