import Home from "../pages/Home";
// import About from "../pages/About";
import NotFound from "../pages/NotFound";
import HomeRecommend from "../pages/HomeRecommend";
import { Navigate } from "react-router-dom";
import React from "react";

const About = React.lazy(() =>
  import(/* webpackChunkName:'about' */ "../pages/About")
);
const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "/home",
        element: <Navigate to="/home/recommend" />,
      },
      {
        path: "/home/recommend",
        element: <HomeRecommend />,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
