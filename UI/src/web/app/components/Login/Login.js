import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Link as Href } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Appbar from '../Common/Appbar'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import useLoginApi from '../../hooks/useLogin'

const contentTop = 150;
const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
    backgroundImage: `linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)`,
    paddingLeft: theme.spacing.unit * 6,
    paddingRight:  theme.spacing.unit * 6,
    height: '100%',
    minHeight: '100vh'
  },
  papper: {
    width: '80vw',
    height: '60vh',
    marginLeft: '5vw',
    marginRight: '5vw',
    borderRadius: 6,
  },
  title: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.white,
    height: theme.spacing.unit * 6,
    borderRadius: 6,
  },
  account: {
    marginTop: '8vh'
  },
  password: {
    marginTop: '1vh'
  },
  login: {
    fontSize: 18,
    width: '10vw',
    height: '5vh'
  },
  register: {
    fontSize: 20,
  },
  fogotPassword: {
    fontSize: 20,
  },
  input: {
    width: '20vw'
  }
}))

const Login = props =>{
  const classes= useStyles()
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')

  const handleAccountChange = event => { setAccount(event.target.value) }
  const handlePasswordChange = event => { setPassword(event.target.value) }
  const [{status, response}, makeRequest] = useLoginApi({ account, password })

  return (
    <div className={classes.root}>
      <Box display="flex" height={contentTop}/>
      <Appbar/>
      <Paper className={classes.papper}>
        <Box className={classes.title} display="flex" justifyContent="center" alignItems="center" width={1}>
          <Typography>登入介面</Typography>
        </Box>
        <Box className={classes.account} display="flex" direction="column" justifyContent="center" alignItems="center" width={1}>
          <Box display="flex" mx={1}>
            <TextField
              className={classes.input}
              label="帳號"
              type="email"
              autoComplete="email"
              margin="normal"
              variant="outlined"
              onChange={handleAccountChange}
            />
          </Box>
          <Box display="flex" mx={1}>
            <Href to="/register">
              <Link className={classes.register} component="button" variant="body">註冊帳號</Link>
            </Href>
          </Box>
        </Box>
        <Box  display="flex" direction="column" justifyContent="center" alignItems="center" width={1}>
          <Box display="flex" mx={1}>
            <TextField
              className={classes.input}
              label="密碼"
              type="password"
              autoComplete="password"
              margin="normal"
              variant="outlined"
              onChange={handlePasswordChange}
            />
          </Box>
          <Box display="flex" mx={1}>
            <Href to="/forgotPassword">
              <Link className={classes.fogotPassword} component="button" variant="body">找回密碼</Link>
            </Href>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" mt={3}  width={1}>
          <Box display="flex" mx>
            <Button variant="contained" className={classes.login} style={{color: 'white', background: '#4fc3f7'}} onClick={makeRequest}>登入</Button>
          </Box>
        </Box>
      </Paper>
    </div>
  )

}

export default Login
