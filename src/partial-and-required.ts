/* eslint-disable no-unused-vars */
export {}

// すべてのプロパティが必須
type Profile = {
  name: string
  age: number
  zipCode: number
}

// すべて任意にする
// type Profile = {
//   name?: string
//   age?: number
// }
type PartialType = Partial<Profile>

// 必須と任意が混在
type Profile2 = {
  name: string
  age?: number
  zipCode: number
}

// すべて必須にする
type RequiredType = Required<Profile2>
