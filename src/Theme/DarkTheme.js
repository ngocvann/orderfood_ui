const { createTheme } = require("@mui/material");

export const darkTheme = createTheme({
    palette:{
        mode: "dark",
        primary: {
            main: "#ff9900"
        },
        secondary: {
            main: "#ffff"
        },
        black: {
            main: "#0d0d0d"
        },
        background: {
            main: "#000000",
            default: "#0d0d0d",
            paper: "0d0d0d"
        },
        textColor: {
            main: "#111111"
        }
    }
})