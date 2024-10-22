// import App from './../react-setting/App.jsx'
// import ReactDom from 'react-dom/client'

// const root = ReactDom.createRoot(document.querySelector('#app'))
// root.render(<App />)
const message = '123'
console.log(message)
const fun = () => {
  console.log(message)
}

console.log('34545')

document.body.innerHTML = message

fun()

const p = new Promise((resolve, reject) => resolve('1'))
p.then((_) => console.log(_))
