export {}

const name: any = 'Hiratake'

// const length: number = name.length
// const length = name.length as number
const length = (name as string).length
// const length = (<string>name).length

console.log({ length })
