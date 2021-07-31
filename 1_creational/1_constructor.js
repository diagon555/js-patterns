// function Server(name, ip) {
//   this.name = name
//   this.ip = ip
// }
//
// Server.prototype.getServerName = function () {
//   return `https:/${this.ip}`
// }

class Server {
  constructor(name, ip) {
    this.name = name
    this.ip = ip
  }

  getServerName () {
    return `https:/${this.ip}`
  }
}

const webServer = new Server('Yahoo server', '34.33.33.3')
console.log(webServer.getServerName())