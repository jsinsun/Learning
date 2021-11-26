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
