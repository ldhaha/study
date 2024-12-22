import { RouteObject } from "react-router-dom";
import Login from "@/pages/login/Login";
import Homepage from "@/pages/homepage/Homepage";
import Layout from "@/pages/lauout/Layout";
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/homepage",
        element: <Homepage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default routes;
