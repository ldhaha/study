import { Link, useRoutes } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import NotFound from "./pages/NotFound";
// import HomeRecommend from "./pages/HomeRecommend";
import routes from "./router";
function App() {
  return (
    <div className="App">
      <div className="header">
        <span>header</span>
        <Link to="/home">首页</Link>
        <Link replace={true} reloadDocument={false} to="/about">
          关于
        </Link>
      </div>
      <div className="content">
        {useRoutes(routes)}
        {/* <Routes>
          <Route path="/" element={<Navigate to="/home" />}></Route>
          <Route path="/home" element={<Home />}>
            <Route
              path="/home"
              element={<Navigate to="/home/recommend" />}
            ></Route>
            <Route path="/home/recommend" element={<HomeRecommend />}></Route>
          </Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes> */}
      </div>
      <div className="footer">footer</div>
    </div>
  );
}

export default App;
