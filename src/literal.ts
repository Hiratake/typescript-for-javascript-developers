export {}

// 曜日を管理する変数
let dayOfTheWeek: '日' | '月' | '火' | '水' | '木' | '金' | '土' = '日'
dayOfTheWeek = '月'

// 想定と異なる文字列は代入できない
// dayOfTheWeek = '31'

console.log(dayOfTheWeek)

// 月を管理する変数
let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1
month = 12

// 想定と異なる数値は代入できない
// month = 13

console.log(month)

// 真偽値のリテラル型
const TRUE: true = true
// TRUE = false
console.log(TRUE)
