import React, { Component } from "react";
import { connect } from "react-redux";

export class about extends Component {
  render() {
    const { count } = this.props;
    return (
      <div>
        <h2>about页面{count}</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(about);
