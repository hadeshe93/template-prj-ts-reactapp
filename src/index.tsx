import React from 'react';
import ReactDOM from 'react-dom';
// import Hello from './components/demo/Hello';
// import HelloClass from './components/demo/HelloClass';
// import HelloHOC from './components/demo/HelloHOC';
import HelloHooks from './components/demo/HelloHooks';

const appContainer = document.querySelector('.app');

ReactDOM.render(
  // <HelloClass name="TypeScript!" />,
  // <HelloHOC name="TypeScript!" loading={true} />,
  <HelloHooks name="TypeScriptor" />,
  appContainer
);