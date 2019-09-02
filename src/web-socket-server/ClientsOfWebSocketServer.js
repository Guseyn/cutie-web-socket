'use strict'

const { AsyncObject } = require('@cuties/cutie')

class ClientsOfWebSocketServer extends AsyncObject {
  constructor (server) {
    super(server)
  }

  syncCall () {
    return (server) => {
      return server.clients
    }
  }
}

module.exports = ClientsOfWebSocketServer
