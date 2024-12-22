import { memo } from "react";
import Menu from "./components/menu/Menu";
import { Outlet } from "react-router-dom";
const Layout = memo(() => {
  return (
    <div className="w-[100vw] h-[100vh] bg-[#f7f8ff]">
      <Menu />
      <Outlet />
    </div>
  );
});

export default Layout;
