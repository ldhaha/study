import { useSelector } from "react-redux";
import { StoreType } from "./store/storeType";
import { useRoutes, useNavigate } from "react-router-dom";
import routes from "@/router";
import { useEffect } from "react";
function App() {
  const navigate = useNavigate();
  const userInfo = useSelector((state: StoreType) => state.userInfo);
  useEffect(() => {
    if (!userInfo.id) {
      navigate("/login");
    }
  }, [userInfo]);
  return <>{useRoutes(routes)}</>;
}

export default App;
