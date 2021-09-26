export {}

class Me {
  static isProgrammer: boolean = true
  static firstName: string = 'Nanami'
  static lastName: string = 'Hiratake'

  static work() {
    return `Hey, guys! This is ${this.firstName}! Are you interested in TypeScript? Let's dive into TypeScript!`
  }
}

// const me = new Me()
// console.log(me.isProgrammer)

console.log(Me.isProgrammer)
console.log(Me.work())
