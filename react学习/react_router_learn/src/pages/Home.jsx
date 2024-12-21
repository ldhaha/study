import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      <div>
        <Link to="/home/recommend">推荐</Link>
      </div>
      {/* 占位符 相当于router-view */}
      <Outlet />
    </div>
  );
};

export default Home;
