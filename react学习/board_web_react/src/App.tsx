import { useSelector } from "react-redux";
import { StoreType } from "./store/storeType";
import { useRoutes } from "react-router-dom";
import routes from "@/router";
import { useEffect } from "react";
import { useRoute } from "./hooks";
function App() {
  const { navigate } = useRoute();
  const userInfo = useSelector((state: StoreType) => state.userInfo);
  useEffect(() => {
    if (!userInfo.id) {
      navigate("/login");
    } else {
      navigate("/homepage");
    }
  }, [userInfo]);
  return <>{useRoutes(routes)}</>;
}

export default App;
