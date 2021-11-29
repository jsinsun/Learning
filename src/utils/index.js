//tree 树形数组格式化
export const getData = (tree, type = 'child', pid = null, res = []) => {
  tree.forEach(item => {

    const data = { ...item };
    delete data[type]
    res.push(Object.assign(data, { pid: pid }));

    if (item[type] && item[type].length > 0) {
      getData(item[type], type, item.id, res)
    }
  });
  return res;
}

export const flatten = (arr, res = []) => {
  arr.forEach(item => {
    //Object.prototype.toString.call(arr) === "[object Array]"
    if (Array.isArray(item)) {
      flatten(item)
    } else {
      res.push(item);
    }
  })
  return res;
}
