import { RouteObject, Navigate } from "react-router-dom";
import Login from "@/pages/login/Login";
import Homepage from "@/pages/homepage/Homepage";
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/homepage" />,
  },
  {
    path: "/homepage",
    element: <Homepage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default routes;
