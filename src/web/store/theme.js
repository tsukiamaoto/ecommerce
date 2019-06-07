import { createMuiTheme } from '@material-ui/core'
// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4fc3f7',
      yellow: '#fff9c4',
      orange: '#ffd54f',
      lightGreen: '#aed581',
      gray: '#bdbdbd',
      white: '#ffffff',
      lightPurple: '#5c6bc0',
    },
    secondary: {
      main: '#ffffff'
    },
    pagination: '#e0e0e0',
    dollar: '#ff5722',
    hoverItem: '#e8eaf6'
  },
});

export default theme
