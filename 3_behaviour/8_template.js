class Employer {
  constructor(name, salary) {
    this.name = name
    this.salary = salary
  }

  responsibilities() {}

  work () {
    return `${this.name} is ${this.responsibilities()}`
  }

  getPaid () {
    return `${this.name} has salary: ${this.salary}`
  }
}

class Developer extends Employer {
  constructor(name, salary) {
    super(name, salary)
  }

  responsibilities() {
    return 'Coding'
  }
}

class Tester extends Employer {
  constructor(name, salary) {
    super(name, salary)
  }

  responsibilities() {
    return 'Testing'
  }
}

const dev = new Developer('Ivan', 12)
console.log(dev.getPaid())
console.log(dev.work())

const tester = new Tester('Nick', 9)
console.log(tester.getPaid())
console.log(tester.work())
