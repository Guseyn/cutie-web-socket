'use strict'

const { AsyncObject } = require('@cuties/cutie')

class ClosedWebSocket extends AsyncObject {
  constructor (ws, code, reason) {
    super(ws, code, reason)
  }

  syncCall () {
    return (ws, code, reason) => {
      ws.close(code, reason)
      return ws
    }
  }
}

module.exports = ClosedWebSocket
