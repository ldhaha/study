import React, { Component } from "react";
import { connect } from "react-redux";
import { addCountAction } from "../store/actionCreator";
export class about extends Component {
  render() {
    const { count } = this.props;
    return (
      <div>
        <button onClick={() => this.props.changeNumber(4)}>
          about改变store
        </button>
        <h2>about页面{count}</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch) => ({
  changeNumber(n) {
    dispatch(addCountAction(n));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(about);
