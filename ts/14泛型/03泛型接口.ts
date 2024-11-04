interface Person<T = string> {
  age: T
}

type Shape<T> = {
  name: T
}

class Point<T = number> {
  x: T
  y: T
  constructor(x: T, y: T) {
    this.x = x
    this.y = y
  }
}

export {}
