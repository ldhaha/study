import { memo } from "react";

const Menu = memo(() => {
  return (
    <div
      style={{ boxShadow: "0px 2px 6px 0px rgba(230,231,233,0.8)" }}
      className="h-[60px] bg-white"
    >
      Menu
    </div>
  );
});

export default Menu;
