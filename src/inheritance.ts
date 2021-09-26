export {}

class Animal {
  public name: string

  constructor(name: string) {
    this.name = name
  }

  run(): string {
    return 'I can run'
  }
}

class Lion extends Animal {
  public speed: number

  constructor(name: string, speed: number) {
    super(name)
    this.speed = speed
  }

  run(): string {
    // return `I can run ${this.speed}km/h`

    // const parentMessage = super.run()
    // console.log({ parentMessage })
    return `${super.run()} ${this.speed}km/h`
  }
}

// const animal = new Animal()
// console.log(animal.run())

// const lion = new Lion()
// console.log(lion.run())

console.log(new Animal('Mickey').run())
console.log(new Lion('Simba', 80).run())
