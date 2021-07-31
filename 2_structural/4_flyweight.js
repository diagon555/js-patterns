class Car {
  constructor(model, price) {
    this.model = model
    this.price = price
  }
}

class CarFactory {
  constructor() {
    this.cars = []
  }

  create(model, price) {
    const candidate = this.getCar(model)
    if (candidate) {
      return candidate
    }

    const newCar = new Car(model, price)
    this.cars.push(newCar)
    return newCar
  }

  getCar (model) {
    return this.cars.find(car => car.model === model)
  }
}

const factory = new CarFactory()

const kiaRio = factory.create('kia', 4000)
const audi = factory.create('audi', 12000)
const kiaXline = factory.create('kia', 6000)

console.log(kiaRio, audi, kiaXline)

console.log(kiaRio === kiaXline)

