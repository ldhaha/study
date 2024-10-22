function foo(m, n) {
  console.log(m, n)
}

const name = 'lindog'
const age = 24

foo`hel${name}ASDASD${age}dad`

// m为符号里被${}分割的一个数组['hel','ASDASD' ，'dad'],n为第一个${}里的值
