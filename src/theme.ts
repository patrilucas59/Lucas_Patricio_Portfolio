import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#232323',
    },
  },
  typography: {
    fontFamily: 'Sora'
  }
});

theme = responsiveFontSizes(theme);

export default theme;