import React from "react";
import { connect } from "react-redux";
import { add_count } from "./homeStore/actionCreator";
export const Home = (props) => {
  return (
    <div>
      <h2>Home的count值：{props.count}</h2>
      <button onClick={() => props.addCount()}>增加home的count</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.home.count,
});

const mapDispatchToProps = (dispatch) => ({
  addCount() {
    dispatch(add_count(5));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
