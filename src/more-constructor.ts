export {}

class Person {
  // eslint-disable-next-line no-useless-constructor
  constructor(public name: string, protected age: number) {}
}

const me = new Person('Hiratake', 23)
console.log(me)
