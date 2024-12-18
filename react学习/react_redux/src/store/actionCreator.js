import { ADD_COUNT } from "./constant";
const addCountAction = (count) => ({
  type: ADD_COUNT,
  count,
});

export { addCountAction };
