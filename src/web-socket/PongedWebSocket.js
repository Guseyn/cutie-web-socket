'use strict'

const { AsyncObject } = require('@cuties/cutie')

class PongedWebSocket extends AsyncObject {
  constructor (ws, data, mask) {
    super(ws, data, mask)
  }

  syncCall () {
    return (ws, data, mask) => {
      ws.pong(data, mask)
      return ws
    }
  }
}

module.exports = PongedWebSocket
