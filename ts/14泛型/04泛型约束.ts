// extends约束
function getLength<T extends { length: number }>(arg: T) {
  console.log(arg.length)
}
getLength<string[]>(['1', '2', '3'])

function getObjectProperty<O, K extends keyof O>(obj: O, k: K) {
  return obj[k]
}

export {}
