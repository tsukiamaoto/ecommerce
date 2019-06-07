import React from 'react'
import theme from './web/store/theme'
import { ThemeProvider } from '@material-ui/styles'
import Main from './web/app/App'
import CssBaseline from '@material-ui/core/CssBaseline'

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Main />
  </ThemeProvider>
)

export default App
