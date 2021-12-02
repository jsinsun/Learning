const Mock = require('mockjs');

// 设置拦截ajax请求的相应时间
Mock.setup({
  timeout: '200-600'
})

let configArray = [];

// 使用webpack的require.context()遍历所有mock文件
const files = require.context('.', true, /\.js$/);
files.keys().forEach(key => {
  if (key === './mock.js') return;
  else {
    //concat连接两个或多个数组。
    configArray = configArray.concat(files(key).default)
  }
});

// 注册所有的mock服务
configArray.forEach(item => {
  //Object.entries() 可以把一个对象的键值以数组的形式遍历出来
  for (let [path, target] of Object.entries(item)) {
    let protocol = path.split('|');
    Mock.mock(new RegExp('^' + protocol[1]), protocol[0], target)
  }
})


