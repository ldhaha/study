const { CHANGE_NAME } = require("./constants");
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
  if (action.type === CHANGE_NAME) {
    return {
      ...state,
      name: action.name,
    };
  }
  return state;
}

module.exports = {
  reducer,
};
