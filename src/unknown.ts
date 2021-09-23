export {}

const kansu = (): number => 23

const numberAny: any = kansu()
const numberUnknown: unknown = kansu()

// any だと実行できてしまう（安全ではない）
const sumAny = numberAny + 10
console.log(sumAny)

// 型が分からないので加算ができない可能性がある
// const sumUnknown = numberUnknown + 10

// 型を調べる
// console.log(typeof numberUnknown)

if (typeof numberUnknown === 'number') {
  // number型であることが保証されているので安全に実行できる
  // タイプガード、型ガード
  const sumUnknown = numberUnknown + 10
  console.log(sumUnknown)
}
