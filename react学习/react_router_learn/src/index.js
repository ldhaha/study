import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    {/* 懒加载没加载之前的现实 */}
    <Suspense fallback={<h2>loading...</h2>}>
      <App />
    </Suspense>
  </HashRouter>
);
