class OldCalc {
  operations (t1, t2, operation ) {
    if (operation === 'add') {
      return t1 + t2
    } else if (operation === 'sub') {
      return t1 - t2
    } else {
      return NaN
    }
  }
}

class NewCalc {
  add(t1, t2) {
    return t1 + t2
  }

  sub(t1, t2) {
    return t1 - t2
  }
}

class CalcAdapter {
  constructor() {
    this.calc = new NewCalc()
  }

  operations (t1, t2, operation) {
    if (operation === 'add') {
      return this.calc.add(t1, t2)
    } else if (operation === 'sub') {
      return this.calc.sub(t1, t2)
    } else {
      return NaN
    }
  }
}

const oldCalc = new OldCalc()

console.log(oldCalc.operations(3, 5, 'add'))

const newCalc = new NewCalc()

console.log(newCalc.add(3, 5))

const adapter = new CalcAdapter()

console.log(adapter.operations(3, 5, 'add'))