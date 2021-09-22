export {}

// 「: (string | number)[]」では順番までは決められない

// let profile: (string | number)[] = ['Hiratake', 23]
// profile = [23, 'Hiratake']

const profile: [string, number] = ['Hiratake', 23]
// profile = [23, 'Hiratake']

console.log(profile)
