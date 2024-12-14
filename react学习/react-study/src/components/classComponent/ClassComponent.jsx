import { Component, PureComponent } from "react";
import { flushSync } from "react-dom";

/**
 * react优化  默认你如果更新state,即使相同的值，react也会重新执行render函数。
 * 你可以通过shouldComponentUpdate(nextState,nextProps)来写对应的逻辑处理，
 * 如果和this.state相等，则return false则不更新
 *
 * 或者 直接继承PureComponent
 */

class ClassComponent extends PureComponent {
  //1.constructor方法
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      message: "lindong",
    };
  }
  update() {
    // // 不能拿到最新的
    // this.setState({
    //   message: "chenlei",
    // });
    // console.log("message", this.state.message);
    // // 拿到新的第一种写法
    // this.setState((state) => {
    //   console.log("callback");
    //   return {
    //     message: "linyue",
    //   };
    // });

    // 同步更新，拿到最新的state
    flushSync(() => {
      this.setState({
        message: "chenlei2",
      });
    });
    console.log(this.state);
    console.log("1313");
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

  // 返回true,更新时会重新执行render
  shouldComponentUpdate() {
    return true;
  }
}

export default ClassComponent;
