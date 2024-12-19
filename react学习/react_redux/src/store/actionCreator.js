import { ADD_COUNT, GET_DATA } from "./constant";
import axios from "axios";
const addCountAction = (count) => ({
  type: ADD_COUNT,
  count,
});

const getDataAction = () => {
  return (dispatch) => {
    axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
      const banners = (res.data.data.banner.list ?? []).map((_) => _.title);
      dispatch({
        type: GET_DATA,
        banners,
      });
    });
  };
};
export { addCountAction, getDataAction };
