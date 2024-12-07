import { Component } from "react";
class ClassComponent extends Component {
  //1.constructor方法
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      message: "lindong",
    };
  }
  update() {
    this.setState({
      message: "chenlei",
    });
  }
  // 2.render（改变state,props会重新执行render,然后在执行update）
  render() {
    const { message } = this.state;
    console.log("render");
    return (
      <div>
        <h1>{message}</h1>
        <h2>class组件</h2>
        <button onClick={() => this.update()}>update</button>
      </div>
    );
  }
  // 3.componentDidMount
  componentDidMount() {
    console.log("componentDidMount");
  }
  // 4.组建更新
  componentDidUpdate() {
    console.log("更新完成");
  }

  // 5.组建卸载
  componentWillUnmount() {
    console.log("组件即将被卸载");
  }
}

export default ClassComponent;
