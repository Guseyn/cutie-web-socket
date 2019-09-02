'use strict'

const { AsyncObject } = require('@cuties/cutie')

class AddressOfWebSocketServer extends AsyncObject {
  constructor (wss) {
    super(wss)
  }

  syncCall () {
    return (wss) => {
      return wss.address()
    }
  }
}

module.exports = AddressOfWebSocketServer
