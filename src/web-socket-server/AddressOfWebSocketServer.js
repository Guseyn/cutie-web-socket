'use strict'

const { AsyncObject } = require('@cuties/cutie')

class AddressOfWebSocketServer extends AsyncObject {
  constructor (server) {
    super(server)
  }

  syncCall () {
    return (server) => {
      return server.address()
    }
  }
}

module.exports = AddressOfWebSocketServer
