type ICollection = {
  // index只能是string|number
  [index: number]: string
  length: number
}

// a[0] => a['0'],但是后面只能写any,也没讲明白
type ICollection2 = {
  [index: string]: any
}

const a: ICollection2 = [1, 2, 3, 4]
