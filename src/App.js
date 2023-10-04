import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import { MainLayout } from "./Layout/MainLayout";
import { Home } from "./Pages/Home";
import "./App.css";

// const theme = extendTheme({
//   colorSchemes: {
//     light: {
//       palette{
//         solid: "#F1F1F1",
//       }
//     },
//   },
// });
function App() {
  return (
    // <CssVarsProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // </CssVarsProvider>
  );
}

export default App;
