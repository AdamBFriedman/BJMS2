import { createTheme }  from '@material-ui/core/styles'
const customTheme = createTheme({
  palette: {
    primary: { main: '#3cacc8', dark: '#2c3e50'},
    secondary: { main: '#ffd700', light: '#fceabb' },
    grey: { main: '#bdc3c7'}
  },
})
export default customTheme