'use strict'

const { AsyncObject } = require('@cuties/cutie')
const WebSocket = require('ws')

class IsClosed extends AsyncObject {
  constructor (ws) {
    super(ws)
  }

  syncCall () {
    return (ws) => {
      return ws.readyState === WebSocket.CLOSED
    }
  }
}

module.exports = IsClosed
