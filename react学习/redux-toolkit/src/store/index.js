import homeReducer from "../pages/homeStore/reducer";
import aboutReducer from "../pages/aboutStore/reducer";

import { createStore, combineReducers } from "redux";

const store = createStore(
  combineReducers({
    home: homeReducer,
    about: aboutReducer,
  })
);

export default store;
