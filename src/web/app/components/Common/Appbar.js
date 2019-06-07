import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { AppBar } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Popover from '@material-ui/core/Popover'
import { FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi'

const useStyles = makeStyles(theme => ({
  appbar: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.white
  },
  appbarFont: {
    color: theme.palette.primary.white,
  },
  search: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '40vw',
  },
  list: {
    width: theme.spacing.unit * 12
  },
  input: {
    marginLeft: theme.spacing.unit,
    flex: 1,
  },
  iconSearch: {
    padding: theme.spacing.unit,
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
    color: theme.palette.primary.white,
    width: theme.spacing.unit * 3,
    height: theme.spacing.unit * 3
  },
  media: {
    background: theme.palette.primary.white,
    height: theme.spacing.unit * 5,
    width: theme.spacing.unit * 5,
  },
  link: {
    textDecoration: 'none'
  }
}))

const Appbar = props => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(0)
  const [search, setSearch] = useState('')
  const open = Boolean(anchorEl)

  const handleSearchChanged = event => {
    setSearch(event.target.value)
  }
  const makeSearchRequest = (value) => {

  }
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(0)
  }

  return (
    <AppBar>
      <Box className={classes.appbar} width='100vw' display='flex' alignItems='center' justifyContent='flex-end'>
        <Box display='flex' mx={2}>
          <Button>
            <Link className={classes.link} to='/'>
              <Typography className={classes.appbarFont}>回到首頁</Typography>
            </Link>
          </Button>
        </Box>
        <Box display='flex' flexGrow={1} mx={2} m={1}>
          <Paper className={classes.search}>
            <InputBase className={classes.input} placeholder='Search...' onChange={handleSearchChanged}/>
            <IconButton className={classes.iconSearch} onClick={makeSearchRequest(search)}>
              <FiSearch icon='search' />
            </IconButton>
          </Paper>
        </Box>
        <Box display='flex' mx={1}>
          <Link className={classes.link} to='seller/product'>
            <Button>
              <Typography className={classes.appbarFont}>賣家管理</Typography>
            </Button>
          </Link>
        </Box>
        <Box display='flex' mx={1}>
          <Link className={classes.link} to='cart'>
            <Button>
              <FiShoppingCart className={classes.icon}color='white' />
              <Typography className={classes.appbarFont}>購物車</Typography>
            </Button>
          </Link>
        </Box>
        <Box display='flex' mx={1}  >
          <Button onClick={handleClick}>
            <FiUser className={classes.icon}/>
            <Typography className={classes.appbarFont} >帳戶資訊</Typography>
          </Button>
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
              <Box display='flex'>
                <Link className={classes.link} to='/login'>
                  <Button className={classes.list}>登入</Button>
                </Link>
              </Box>
              <Box display='flex'>
                <Link className={classes.link} to='/register'>
                  <Button className={classes.list}>註冊</Button>
                </Link>
              </Box>
            </Box>
          </Popover>
        </Box>
        <Box display='flex' mx={4} />
      </Box>
    </AppBar>
  )
}

export default Appbar
