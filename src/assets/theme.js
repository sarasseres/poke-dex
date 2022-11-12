import { createTheme } from '@material-ui/core/styles';
const theme = createTheme({
  palette: {
    primary: {
      light: '#343E63',
      main: '#2A3050',
      dark: '#191d31',
    },
    secondary: {
      light: '#f7ca58',
      main: '#F7B916',
      dark: '#ac7f0e',
      contrastText: '#18242e',
    },
  },
});

export default theme;
