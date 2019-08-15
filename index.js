function defineReactive(data, key, val) {
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      console.log('get val', val);
      return val;
    },
    set: function (newVal) {
      console.log('set newVal', newVal);
      if (val === newVal) {
        return
      }
      val = newVal
    }
  })
}


var obj = {

};

defineReactive(obj, 'name', 'liuyi');

var name = obj.name;