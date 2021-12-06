//tree 树形数组扁平化
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

//多维数组扁平化
export const flatten = (arr, res = []) => {
  arr.forEach(item => {
    //判断对象是否为数组 Object.prototype.toString.call(arr) === "[object Array]"
    if (Array.isArray(item)) {
      flatten(item)
    } else {
      res.push(item);
    }
  })
  return res;
}

//对象扁平化
export const process = (key, value, res = {}) => {
  // 首先判断是基础数据类型还是引用数据类型
  if (Object(value) !== value) { // 基础数据类型
    if (key) res[key] = value
  }
  //判断对象是否是数组
  else if (Object.prototype.toString.call(value) === "[object Array]") {
    value.forEach((item, index) => {
      process(`${key}[${index}]`, item)
    })

    if (value.length === 0) res[key] = []
  }
  else {
    //遍历对象
    const obj = Object.keys(value)
    obj.forEach(item => {
      process(key ? `${key}.${item}` : `${item}`, value[item])
    })
    if (obj.length === 0 && key) res[key] = {}
  }
  return res;
}



//对象型数组排序
//attr：根据该属性排序；rev：升序1或降序-1，不填则默认为1
export const sortBy = (attr, rev = 1) => {
  rev = rev != 1 ? -1 : rev;
  return (a, b) => {
    a = a[attr];
    b = a[attr];
    if (a < b) { return rev * -1; }
    if (a > b) { return rev * 1 }

    return 0;
  }
}

//获取对象数组中指定的最大值
export const getObjArrMax = (arr, prop) => {
  if (arr != null && (arr instanceof Array) && arr.length > 0) {
    let arr2 = arr.concat([]);
    arr2.sort(function (a, b) { return a[prop] - b[prop] })
    let max = arr2[arr2.length - 1][prop];
    return max;
  }
  return null;
}


