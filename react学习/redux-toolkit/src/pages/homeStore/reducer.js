import { ADD_COUNT } from "./constant";
const initialState = {
  count: 1,
  age: 20,
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COUNT: {
      return {
        ...state,
        count: state.count + action.count,
      };
    }
    default: {
      return state;
    }
  }
}
