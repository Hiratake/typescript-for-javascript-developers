export {}

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      public name: string

      constructor(name: string) {
        this.name = name
      }
    }
  }

  export namespace Osaka {
    export class Person {
      public name: string

      constructor(name: string) {
        this.name = name
      }
    }
  }
}

namespace English {
  export class Person {
    public firstName: string
    public middleName: string
    public lastName: string

    constructor(firstName: string, middleName: string, lastName: string) {
      this.firstName = firstName
      this.middleName = middleName
      this.lastName = lastName
    }
  }
}

const me = new Japanese.Tokyo.Person('Hiratake')
console.log(me.name)

const meOsaka = new Japanese.Osaka.Person('Nanami')
console.log(meOsaka.name)

const michael = new English.Person('Michael', 'Joseph', 'Jackson')
console.log(michael)
