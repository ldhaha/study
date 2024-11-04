import axios from 'axios'

// 没有申明react的type,需要在安装react的类型声明@types/react
import react from 'react'

// r如果没有类型声明，责自己去申明 见types/ld.d.ts
import _ from 'lodash'

import service from './service'
const name: string = 'lindong'

console.log(name)

const div = document.createElement('div')
div.textContent = 'lindong'
document.body.appendChild(div)

service.request<string>({ baseURL: '' }).then((res) => {
  console.log(res)
})
export {}
