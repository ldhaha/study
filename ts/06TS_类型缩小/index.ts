/**
 * 类型缩小
 * typeof  in === !== instanceOf in
 */

function TypeOf(id: number | string) {
  if (typeof id === 'number') {
    console.log(id)
  } else {
    console.log(id.length)
  }
}

export {}
