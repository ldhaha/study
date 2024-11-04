interface Person {
  name?: string
  readonly age: number
}

/** 减号作用去掉上述person的可选和只读 */
type MapPerson<T> = {
  -readonly [index in keyof T]+?: T[index]
}

type PersonRequired = MapPerson<Person>

export {}
