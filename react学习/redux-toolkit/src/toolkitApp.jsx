// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { add_count, fetchDataAction } from "./features/counterSlice";

// export const ToolkitApp = (props) => {
//   const dispatch = useDispatch();
//   const count = useSelector((state) => state.counter.count);
//   return (
//     <div>
//       toolkitApp的count:{props.count}值 {count}
//       <button onClick={() => dispatch(add_count(5))}>添加</button>
//     </div>
//   );
// };

// export default ToolkitApp;

import React, { Component } from "react";
import { connect } from "react-redux";

export class ToolkitApp extends Component {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    // const { count } = this.props;
    return (
      <div>
        toolkitApp {this.props.count}
        <button onClick={() => this.props.addCount()}>添加</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.counter.count,
});

const mapDispatchToProps = (dispatch) => ({
  addCount() {
    dispatch(add_count(5));
  },
  fetchData() {
    dispatch(fetchDataAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ToolkitApp);
