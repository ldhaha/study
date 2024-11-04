type IPerson = {
  name: string
  age: number
}

// 报错，但是下面的
/**
 * 现象原因，对象初始化的时候第一次为新鲜的，需要进行严格的字面量检测
 */
const p: IPerson = {
  name: 'LINDONG',
  age: 24,
  sex: '123'
}

const obj = {
  name: 'LINDONG',
  age: 24,
  sex: '123'
}
const p2: IPerson = obj
