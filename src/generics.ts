export {}

// const echo = (arg: number): number => {
//   return arg
// }

// const echo = (arg: string): string => {
//   return arg
// }

// <T> -> 型引数
const echo = <T>(arg: T): T => {
  return arg
}

console.log(echo<number>(100))
console.log(echo<string>('Hello!'))
console.log(echo<boolean>(true))

// class Mirror {
//   public value: number

//   constructor(value: number) {
//     this.value = value
//   }

//   echo(): number {
//     return this.value
//   }
// }

// console.log(new Mirror(123).echo())

class Mirror<T> {
  public value: T

  constructor(value: T) {
    this.value = value
  }

  echo(): T {
    return this.value
  }
}

console.log(new Mirror<number>(123).echo())
console.log(new Mirror<string>('Hello, generics!').echo())
console.log(new Mirror<boolean>(true).echo())
