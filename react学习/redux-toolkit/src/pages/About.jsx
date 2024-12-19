import React from "react";
import { connect } from "react-redux";

export const About = (props) => {
  return <div>About的count值：{props.count}</div>;
};

const mapStateToProps = (state) => ({
  count: state.about.count,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(About);
