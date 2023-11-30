import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import { useState } from "react";
import { Preloader } from "./component/Preloader/Preloader";

const theme = createTheme({
  direction: "rtl",
  // other theme properties
});

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const router = createBrowserRouter([
    {
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/portfolio",
          element: <Portfolio />,
        },
        {
          path: "/career",
          element: <Career />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  window.onload = () => {
    setIsLoading(false);
  };
  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
