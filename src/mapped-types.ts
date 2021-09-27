/* eslint-disable no-unused-vars */
export {}

type Profile = {
  name: string
  age: number
}

type PartialProfile = Partial<Profile>
type PropertyTypes = keyof Profile

// type Optional<T> = {
//   [P in keyof T]?: T[P]
// }
// type OptionalProfile = Optional<Profile>

type Optional<T> = {
  [P in keyof T]?: T[P] | null
}
type OptionalProfile = Optional<Profile>
