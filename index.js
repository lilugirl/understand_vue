function defineReactive(data, key, val) {
  let dep = [] //新增
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      console.log('get val', val);
      dep.push(window.target) // 新增
      console.log('dep', dep);
      return val;
    },
    set: function (newVal) {
      console.log('set newVal', newVal);
      if (val === newVal) {
        return
      }
      // 新增
      console.log('dep', dep);
      for (let i = 0; i < dep.length; i++) {
        // dep[i](newVal, val)

      }
      val = newVal
    }
  })
}


var obj = {

};

defineReactive(obj, 'name', 'liuyi');


var name = obj.name;
var name2 = obj.name;

obj.name = 'xiao hei';