import { createTheme } from "@mui/material/styles";

export const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ff9900",
    },
    secondary: {
      main: "#ffffff",
    },
    background: {
      default: "#0d0d0d",
      paper: "#0d0d0d",
    },
    text: {
      primary: "#ffffff",
      secondary: "#aaaaaa",
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontWeightBold: 700,
  },
});
