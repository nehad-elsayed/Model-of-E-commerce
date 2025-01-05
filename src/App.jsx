import "./App.css";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import Price from "./components/Price/Price.jsx";
import Quantity from "./components/Quantity/Quantity.jsx";

let x = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      {
        path: "gallery",
        element: <Gallery />,
        children: [
          { index: true, element: <Price /> },
          { path: "quantity", element: <Quantity /> },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={x}></RouterProvider>
    </>
  );
}

export default App;
