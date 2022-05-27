import { createTheme } from "@mui/material";



export const theme = createTheme({

    // Theme Colors
    palette: {
        primary: {
            main: '#FE5201'
        },

        secondary: {
            main: '#01ADFE'
        },
    },

    // Typography
    typography: {
        fontFamily: ['Roboto', 'sans-serif'].join(','),
        h1: {
            fontWeight: 700,
            fontSize: "4rem"
        },
        h2: {
            fontWeight: 700,
            fontSize: "3.25rem"
        },
        h3: {
            fontWeight: 700,
            fontSize: "2.5rem"
        },
        h4: {
            fontWeight: 700,
            fontSize: "1.75rem"
        },
        h5: {
            fontWeight: 700,
        },
        h6: {
            fontWeight: 700,
        },
    },
    components: {
        MuiCssBaseline: {
          styleOverrides: {
              a: {
                  color: "#0d6efd",
                  textDecoration: "none",
              }
          }
        },
    },


});