/**
 * 函数组件
 */

import React from "react";
import { Button } from "antd";

interface Gretting {
  name: string;
  firstName: string;
  lastName: string;
}

const Hello = (props: Gretting) => {
  return <Button>Hello, {props.name}</Button>;
};

Hello.defaultProps = {
  firstName: '',
  lastName: '',
};

export default Hello;
