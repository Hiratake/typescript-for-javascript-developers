export {}

// 型エイリアス（別名をつける）
// type ObjectType = {
//   name: string
//   age: number
// }

// const object: ObjectType = {
//   name: 'Hiratake-san',
//   age: 23,
// }

// オブジェクト型を定義する
interface ObjectInterface {
  name: string
  age: number
}

const object: ObjectInterface = {
  name: 'Hiratake-san',
  // name: true,
  age: 23,
}

console.log(object)
