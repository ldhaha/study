const foo = import('./a.js')
foo.then((res) => {
  console.log(res)
})
