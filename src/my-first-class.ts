export {}

class Person {
  name: string
  age: number

  // constructor には戻り値の型は要らない
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`
  }
}

const taro = new Person('Taro', 30)
console.log(taro.profile())
