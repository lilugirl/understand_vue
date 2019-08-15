class Dep {
  constructor() {
    this.subs = []
  }

  addSub(sub) {
    this.subs.push(sub)
  }

  removeSub(sub) {
    remove(this.subs, sub)
  }

  depend() {
    if (window.target) {
      this.addSub(window.target)
    }
  }

  notify() {
    const subs = this.subs.slice()
    for (let i = 0, j = subs.length; i < j; i++) {
      subs[i].update()
    }
  }
}

function remove(arr, item) {
  if (arr.length) {
    const index = arr.indexOf(item)
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }

}

function defineReactive(data, key, val) {
  let dep = new Dep() //修改
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      console.log('get val', val);
      dep.depend()
      console.log('dep', dep);
      return val;
    },
    set: function (newVal) {
      console.log('set newVal', newVal);
      if (val === newVal) {
        return
      }

      val = newVal
      dep.notify()
    }
  })
}


var obj = {

};

defineReactive(obj, 'name', 'liuyi');


var name = obj.name;
var name2 = obj.name;

obj.name = 'xiao hei';