export {}

type Mojiretsu = string

const fooString: string = 'Hello'
console.log(fooString)
const fooMojiretsu: Mojiretsu = 'Hello'
console.log(fooMojiretsu)

const example1 = {
  name: 'Hiratake',
  age: 23,
}
console.log(example1)

type Profile = {
  name: string
  age: number
}

const example2: Profile = {
  name: 'Hiratake',
  age: 23,
}
console.log(example2)

// 変数 example1 の型を調べて Profile2 をつくる
// type Profile2 = typeof example1
