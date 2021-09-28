export {}

type Profile = {
  name: string
  age: number
}

const me: Profile = {
  name: 'Ham',
  age: 43,
}
me.age++
console.log(me)

type PersonalDataType = Readonly<Profile>

const friend: PersonalDataType = {
  name: 'Shigeru',
  age: 40,
}
// friend.age++
console.log(friend)

type YomitoriSenyo<T> = {
  readonly [P in keyof T]: T[P]
}
// eslint-disable-next-line no-unused-vars
type YomitoriSenyoProfile = YomitoriSenyo<Profile>
