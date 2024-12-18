import { ADD_COUNT } from "./constant";
const initialState = {
  count: 1,
};

export function reducer(state = initialState, action) {
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
