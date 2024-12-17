const { createStore } = require("redux");
const initialState = {
  name: "chenlei",
};

/**
 *
 * @param {目前保存的state} state
 * @param {本次需要更新的action} action
 * @returns
 */
function reducer(state = initialState, action) {
  console.log(state, action);
  if (action.type === "change_name") {
    return {
      ...state,
      name: action.name,
    };
  }
  return state;
}

const store = createStore(reducer);

module.exports = store;
