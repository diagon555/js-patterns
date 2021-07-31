class Complaints {
  constructor() {
    this.complaints = []
  }

  reply (complaint) {}

  add (complaint) {
    this.complaints.push(complaint)

    return this.reply(complaint)
  }
}

class ProductComplaints extends Complaints {
  reply({id, customer, details}) {
    return `Product: ${id}: ${customer} (${details})`
  }
}

class ServiceComplaints extends Complaints {
  reply({id, customer, details}) {
    return `Service: ${id}: ${customer} (${details})`
  }
}

class ComplaintRegistryFacade {
  register (customer, type, details) {
    const id = Date.now()
    let complaint

    if (type === 'service') {
      complaint = new ServiceComplaints()
    } else {
      complaint = new ProductComplaints()
    }

    return complaint.add({id, customer, details})
  }
}

const registry = new ComplaintRegistryFacade()

console.log(registry.register('Ivan', 'service', 'unavailable'))
console.log(registry.register('Ivan', 'product', 'Ive got an error'))