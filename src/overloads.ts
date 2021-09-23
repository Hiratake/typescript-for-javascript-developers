/* eslint-disable no-redeclare */
export {}

// function double(value: number): number {
//   return value * 2
// }
// console.log(double(100))

// function double(value: string): string {
//   return value + value
// }
// console.log(double('Go '))

function double(value: number): number
function double(value: string): string

// 実体のほうでは型を指定しない
// シグネチャで型を指定する
function double(value: any): any {
  if (typeof value === 'number') {
    return value * 2
  } else {
    return value + value
  }
}

console.log(double(100))
console.log(double('Go '))
// console.log(double(true))
