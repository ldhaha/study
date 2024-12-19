import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import { ToolkitApp } from "./toolkitApp";
import { Provider } from "react-redux";
// import store from "./store";
import store from "./toolkitStore";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ToolkitApp />
  </Provider>
);
