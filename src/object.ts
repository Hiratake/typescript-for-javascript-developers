export {}

let profile1: object = { name: 'Hiratake' }
profile1 = { barthYear: 1997 }
console.log(profile1)

let profile2: {
  name: string
} = { name: 'Hiratake' }
profile2 = { name: 'Nanami' }
// profile2 = { birthYear: 1997 }
console.log(profile2)
