'use strict'

const { AsyncObject } = require('@cuties/cutie')

class ClosedWebSocketServer extends AsyncObject {
  constructor (server) {
    super(server)
  }

  syncCall () {
    return (server) => {
      server.close()
      return server
    }
  }
}

module.exports = ClosedWebSocketServer
