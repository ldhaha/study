// 索引签名
interface Collection {
  // 两个类型得保持一致，因为length也是一个属性
  [index: number]: string
  length: number
}
