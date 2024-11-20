import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Importing the App component
import "./index.css"; // Optional, for custom global styling
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"; // For Material UI theming

// Create a custom theme using Material UI's theme provider (optional)
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Custom primary color
    },
    secondary: {
      main: "#f50057", // Custom secondary color
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline /> {/* Ensures consistent baseline styles across browsers */}
    <App /> {/* Rendering the App component */}
  </ThemeProvider>
);
