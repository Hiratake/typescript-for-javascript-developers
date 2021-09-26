export {}

// const profile: { name?: string, age?: number } = {}
// profile.name = 'Ham'
// profile.age = 43
// console.log(profile)

// How to write index signatures
// { [ index: typeForIndex ]: typeForValue }

// const profile: { [index: string]: string | number } = {}

interface Profile {
  name: string
  underTwenty: boolean
  [index: string]: string | number | boolean
}

const profile: Profile = {
  name: 'Ham',
  underTwenty: false,
}

// profile.name = 'Ham'
profile.age = 43
profile.nationality = 'Japan'
console.log(profile)
