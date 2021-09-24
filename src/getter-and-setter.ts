export {}

class MyNumberCard {
  private _owner: string
  private _secretNumber: number

  constructor(owner: string, secretNumber: number) {
    this._owner = owner
    this._secretNumber = secretNumber
  }

  get owner() {
    return this._owner
  }

  // eslint-disable-next-line accessor-pairs
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`
  }
}

const card = new MyNumberCard('Hiratake', 1234567890)
// card.owner = 'Hiratan'
console.log(card.owner)
// console.log(card_secretnumber)
console.log(card.secretNumber)
console.log(card.debugPrint())
card.secretNumber = 1111111111
console.log(card.debugPrint())
