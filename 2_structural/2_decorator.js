class Server {
  constructor(ip, port) {
    this.ip = ip
    this.port = port
  }

  get url() {
    return `https://${this.ip}:${this.port}`
  }
}

function awsDecorator(server) {
  server.isAWS = true
  server.awsInfo = function () {
    return server.url
  }

  return server
}

function azureDecorator(server) {
  server.isAzure = true
  server.port += 500

  return server
}

const s1 = awsDecorator(new Server('1.23.4.5', 8080))

console.log(s1.isAWS)
console.log(s1.awsInfo())

const s2 = azureDecorator(new Server("4.5.6.7", 1000))

console.log(s2.isAzure)
console.log(s2.url)