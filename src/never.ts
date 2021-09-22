export {}

const error = (message: string): never => {
  throw new Error(message)
}

try {
  const result = error('test')
  console.log(result)
} catch (e) {
  console.log({ e })
}

const foo: void = undefined
console.log(foo)

const bar: never = error('only me!')
console.log(bar)
