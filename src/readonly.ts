export {}

class CreditCard {
  // readonly owner: string

  // constructor(owner: string) {
  //   this.owner = owner
  // }

  // eslint-disable-next-line no-useless-constructor
  constructor(public readonly owner: string) {}
}

const myCreditCard = new CreditCard('Hiratake')
console.log(myCreditCard.owner)
// myCreditCard.owner = 'beacon'
