// theme.js
import { createTheme } from "@mui/material/styles";
import { amber, deepOrange, grey } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          primary: deepOrange,
          divider: deepOrange[700],
          background: {
            default: grey[900],
            paper: deepOrange[900],
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
});

export const theme = createTheme(getDesignTokens("light"));
