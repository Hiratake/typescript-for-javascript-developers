/* eslint-disable prefer-const */
export {}

let name = 'Atsushi'
name = 'Ham'
console.log(name)

let nickname = 'Ham' as const
// nickname = 'Hamtaro'
nickname = 'Ham'
console.log(nickname)

let profile = {
  name: 'Atsushi',
  height: 178,
} as const
// profile.name = 'Ham'
// profile.height = 180
console.log(profile)
