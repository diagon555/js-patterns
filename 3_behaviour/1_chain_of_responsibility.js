class MySum {
  constructor(initialValue = 32) {
    this.sum = initialValue
  }

  add (value) {
    this.sum += value
    return this
  }
}

const sum1 = new MySum()
console.log(sum1.add(8).add(5).add(10).sum)

const sum2 = new MySum(0)
console.log(sum2.add(3).add(4).sum)