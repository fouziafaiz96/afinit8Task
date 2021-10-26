import logo from "./logo.svg";
import "./App.css";
import SchoolForm from "./Views/SchoolForm/SchoolForm";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Dashboard from "./Views/Dashboard/Dashboard";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00B07B",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#0CAE7D",
    },
    text: {
      primary: "#353535",
      secondary: "#97B7AF",
      disabled: "#C4E5DD",
      bgColor: "#FF0000",
    },
    error: {
      main: "#F93D3D",
    },
    common: {
      white: "#E4F2EF",
    },
  },
  typography: {
    fontFamily: "Lato",
    h6: {
      fontWeight: "bold",
    },
    h5: {
      fontWeight: "bold",
    },
    body2: {
      fontWeight: "bold",
      color: "black",
    },
    subtitle1: {
      fontWeight: "bold",
      color: "#565656",
      fontFamily: "Lato",
      fontSize: "13.5px",
    },
  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Dashboard />
        {/* <SchoolForm /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
