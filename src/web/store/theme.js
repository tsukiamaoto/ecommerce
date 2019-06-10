import { createMuiTheme } from '@material-ui/core'
// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4fc3f7',
      white: '#ffffff',
    },
    secondary: {
      main: '#ffffff'
    },
    pagination: '#e0e0e0',
    dollar: '#ff5722',
    hoverItem: '#e8eaf6',
    border: '#bdbdbd',
  },
});

export default theme
