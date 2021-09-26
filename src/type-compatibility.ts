/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
export {}

let fooCompatible: any
let barCompatible: string = 'TypeScript'

console.log(typeof fooCompatible)

// 代入できる -> 互換性がある
fooCompatible = barCompatible

console.log(typeof fooCompatible)

let fooIncompatible: string
let barIncompatible: number = 1

// 代入できない -> 互換性がない
// fooIncompatible = barIncompatible

let fooString: string
let barString: string = 'string'

fooString = barString

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral'
fooString = fooStringLiteral

let fooNumber: number
let fooNumberLiteral: 1976 = 1976

fooNumber = fooNumberLiteral

// interface Animal {
//   age: number
//   name: string
// }

// class Person {
//   public age: number
//   constructor(age: number) {
//     this.age = age
//   }
// }

// let me: Animal

// 代入される側の型にあるメンバが必要
// me = new Person(43)

interface Animal {
  age: number
  name: string
}

class Person {
  public age: number
  public name: string
  constructor(age: number, name: string) {
    this.age = age
    this.name = name
  }
}

let me: Animal

me = new Person(23, 'Hiratake')

// 構造的部分型
