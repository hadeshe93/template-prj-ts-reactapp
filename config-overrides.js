const { override, fixBabelImports } = require('customize-cra');

// 实现 antd 的自动按需加载
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  })
);