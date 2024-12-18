const { CHANGE_NAME } = require("./constants");
const changeNameAction = (name) => ({
  type: CHANGE_NAME,
  name,
});

module.exports = {
  changeNameAction,
};
