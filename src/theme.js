import { createMuiTheme } from "@material-ui/core/styles";
import BLUE from '@material-ui/core/colors/amber';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: BLUE[500],
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
  typography: {
    button: {
      textTransform: 'capitalize',
    },
  },
});

export default theme;
