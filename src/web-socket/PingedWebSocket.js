'use strict'

const { AsyncObject } = require('@cuties/cutie')

class PingedWebSocket extends AsyncObject {
  constructor (ws, data, mask) {
    super(ws, data, mask)
  }

  syncCall () {
    return (ws, data, mask) => {
      ws.ping(data, mask)
      return ws
    }
  }
}

module.exports = PingedWebSocket
