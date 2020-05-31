/**
 * hooks 组件
 */

import React, { useEffect, useState } from "react";
import { Button } from "antd";

interface Gretting {
  name: string;
  firstName: string;
  lastName: string;
}

const HelloHooks = (props: Gretting) => {
  // count 会自动被推断为 number 类型
  const [ count, setCount ] = useState(0);
  // text 就会被推动为 null 和 string 的联合类型
  const [ text, setText ] = useState<null | string>(null);

  // 每次在组件渲染过后都会执行
  useEffect(() => {
    if (count > 5) {
      setText('休息下啦');
    }
  }, [ count ]);


  const addCount = (count: number) => {
    setCount(count + 1);
  };

  return (
    <>
      <p>你点击了 {count} 次</p>
      <p>{text}</p>
      <Button onClick={() => { setCount(count + 1) }}> { props.name }1 </Button>
      <Button onClick={() => { addCount(count) }}> { props.name }2 </Button>
    </>
  );
};

HelloHooks.defaultProps = {
  firstName: '',
  lastName: '',
};

export default HelloHooks;
