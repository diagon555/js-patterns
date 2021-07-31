class MyIterator {
  constructor(data) {
    this.index = 0
    this.data = data
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.index < this.data.length) {
          return {
            value: this.data[this.index++],
            done: false
          }
        }
        this.index = 0
        return {
          value: void 0,
          done: true
        }
      }

    }
  }
}

function* generator(collection) {
  let index = 0

  while (index < collection.length) {
    yield collection[index++]
  }
}

// const iterator = new MyIterator(['this', 'is', 'iterator'])
// for (let value of iterator) {
//   console.log(`Value: `, value)
// }

const get = generator(['this', 'is', 'iterator'])
// for (let value of get) {
//   console.log(`Value: `, value)
// }

console.log(get.next())
console.log(get.next())
console.log(get.next())
console.log(get.next())