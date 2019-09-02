'use strict'

const { AsyncObject } = require('@cuties/cutie')
const WebSocket = require('ws')

class IsConnecting extends AsyncObject {
  constructor (ws) {
    super(ws)
  }

  syncCall () {
    return (ws) => {
      return ws.readyState === WebSocket.CONNECTING
    }
  }
}

module.exports = IsConnecting
