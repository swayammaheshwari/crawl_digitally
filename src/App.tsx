import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Career from "./pages/Career";
import Contact from "./pages/Contact";

const theme = createTheme({
  direction: 'rtl',
});

function App() {
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

  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
