/* eslint-disable */
import React, { useEffect } from "react";
import { addCountAction, getDataAction } from "../store/actionCreator";
import { store } from "../store";
import { connect } from "react-redux";
function Home(props) {
  useEffect(() => {
    console.log("获取数据");
    props.getData();
  }, []);
  return (
    <div>
      <div>
        {props.banners.map((_, index) => (
          <div key={index}>{_}</div>
        ))}
      </div>
      <button onClick={() => store.dispatch(addCountAction(-1))}>
        home减1
      </button>
    </div>
  );
}
const mapStateToProps = (state) => ({
  banners: state.banners,
});
const mapDispatch = (dispatch) => ({
  getData() {
    dispatch(getDataAction());
  },
});
export default connect(mapStateToProps, mapDispatch)(Home);
