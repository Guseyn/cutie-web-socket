'use strict'

const { AsyncObject } = require('@cuties/cutie')
const WebSocket = require('ws')

class IsOpen extends AsyncObject {
  constructor (ws) {
    super(ws)
  }

  syncCall () {
    return (ws) => {
      return ws.readyState === WebSocket.OPEN
    }
  }
}

module.exports = IsOpen
