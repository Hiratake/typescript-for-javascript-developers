export {}

/* eslint-disable no-unused-vars */
enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December,
}

console.log(Months.January)
console.log(Months.February)
console.log(Months.December)

// const MonthsJs = {
//   January: 0,
//   February: 1,
// }

// console.log(MonthsJs.January)
// console.log(MonthsJs.February)

enum Colors {
  RED = '#ff0000',
  WHITE = '#ffffff',
  GREEN = '#008000',
  BLUE = '#0000ff',
  // YELLOW = '#ffff00',
  BLACK = '#000000',
}

const green = Colors.GREEN
console.log({ green })

// eslint-disable-next-line no-redeclare
enum Colors {
  YELLOW = '#ffff00',
  GRAY = '#808080',
}

console.log(Colors.YELLOW)
