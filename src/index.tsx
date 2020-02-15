import React from 'react';
import ReactDOM from 'react-dom';
// import Hello from './components/demo/Hello';
import HelloClass from './components/demo/HelloClass';

const appContainer = document.querySelector('.app');

ReactDOM.render(
  <HelloClass name="TypeScript!" />,
  appContainer
);