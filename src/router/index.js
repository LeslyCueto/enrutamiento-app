import { createBrowserRouter } from "react-router-dom";
import Error404 from "../pages/Error404";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";
import { loaderPersonajes } from "../api/loaderPersonajes";
import CardPersonaje from "../pages/CardPersonaje";
import { loaderPersonajeIndividual } from "../api/loaderPersonajeIndividual";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error404 />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/blog", element: <Blog />, loader: loaderPersonajes },
      {
        path: "/blog/:id",
        element: <CardPersonaje />,
        loader: loaderPersonajeIndividual,
      },
    ],
  },
]);
