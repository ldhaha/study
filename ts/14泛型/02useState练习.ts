function useState<T>(arg: T): [T, (val: T) => void] {
  let initialValue = arg
  function setValue(val: T) {
    initialValue = val
  }
  return [initialValue, setValue]
}

const [count, setCount] = useState<number>(1)

const [name, setName] = useState('1231')

export {}
