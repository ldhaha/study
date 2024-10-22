const obj = {
  name: 'lindong',
  _address: '扬州',
  get address() {
    return this._address
  },
  set address(value) {
    this._address = value
  }
}

/**
 * 属性描述符分为数据属性，存取属性
 *
 * 1.数据属性
 *   configurable enumerable value writable
 * 2.存取属性
 *   get set
 */
Object.defineProperty(obj, 'name', {
  configurable: false,
  writable: false,
  value: 'chenlei'
})

obj.defineProperty(obj, 'address', {
  configurable: true,
  enumerable: true,
  get() {
    return this._address
  },
  set(value) {
    this._address = value
  }
})

// 定义多个属性
Object.defineProperties(obj, {
  age: {
    enumerable: true,
    configurable: true
  },
  sex: {
    enumerable: true,
    enumerable: true
  }
})

// 获取属性描述符
Object.getOwnPropertyDescriptor(Object, 'name')

// 获取多个属性描述符
Object.getOwnPropertyDescriptors(Object)

// 组织添加新的属性
Object.preventExtensions(obj)

// 不可配置和删除
Object.seal(obj)
