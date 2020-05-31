/**
 * 类组件
 */

import React, { Component } from "react";
import { Button } from "antd";

interface Greeting {
  name: string;
  firstName?: string;
  lastName?: string;
}

interface State {
  count: number;
}

// 泛型类
// Greeting 为属性类型
// State 为状态类型
class HelloClass extends Component<Greeting, State> {
  state: State = {
    count: 0
  };

  static defaultProps = {
    firstName: "",
    lastName: ""
  };

  render() {
    return (
      <>
        <p>已经点击了 {this.state.count} 次</p>
        <Button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Hello, {this.props.name}
        </Button>
      </>
    );
  }
}

export default HelloClass;
