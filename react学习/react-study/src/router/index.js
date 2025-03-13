import { lazy } from "react";
import { Navigate } from "react-router-dom";
import { Index } from "../pages/index/Index";
import { NotFound } from "../pages/notFound/NotFound";
import { AboutOne } from "../pages/about/pages/aboutOne/AboutOne";
import { ReduxPratise } from "../pages/redux/ReduxPratise";
const About = lazy(() => import("../pages/about/About"));
export const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Index />,
  },
  {
    path: "/redux",
    element: <ReduxPratise />,
  },
  {
    path: "/about",
    element: <About />,
    children: [
      {
        path: "/about",
        element: <Navigate to="/about/one" />,
      },
      {
        path: "/about/one",
        element: <AboutOne />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
