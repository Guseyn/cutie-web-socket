'use strict'

const { AsyncObject } = require('@cuties/cutie')

class ClientsOfWebSocketServer extends AsyncObject {
  constructor (wss) {
    super(wss)
  }

  syncCall () {
    return (wss) => {
      return wss.clients
    }
  }
}

module.exports = ClientsOfWebSocketServer
