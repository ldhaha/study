import { ADD_COUNT, GET_DATA } from "./constant";
const initialState = {
  count: 1,
  banners: [],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COUNT: {
      return {
        ...state,
        count: state.count + action.count,
      };
    }
    case GET_DATA: {
      return {
        ...state,
        banners: action.banners,
      };
    }
    default: {
      return state;
    }
  }
}
