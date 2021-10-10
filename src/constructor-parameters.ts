/* eslint-disable */
export {}

class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const taro = new Person('Taro', 30)
console.log(taro)

type PersonType = typeof Person
type Profile = ConstructorParameters<PersonType>

const profile: Profile = ['Hiratake', 23]
const hiratake = new Person(...profile)
console.log(hiratake)

type MyConstructorParameters<T extends abstract new (...args: any) => any> =
  T extends abstract new (...args: infer P) => any ? P : never
