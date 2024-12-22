import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();
  function toAbout() {
    navigate("/about");
    // navigate(-1);
  }
  return (
    <div>
      <div>
        <Link to="/home/recommend">推荐</Link>
      </div>
      {/* 占位符 相当于router-view */}
      <button onClick={() => toAbout()}>去关于页面</button>
      <Outlet />
    </div>
  );
};

export default Home;
