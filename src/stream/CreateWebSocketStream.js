'use strict'

const { AsyncObject } = require('@cuties/cutie')
const WebSocket = require('ws')

class CreatedWebSocketStream extends AsyncObject {
  constructor (ws, options) {
    super(ws, options)
  }

  syncCall () {
    return (ws, options) => {
      return WebSocket.createWebSocketStream(ws, options)
    }
  }
}

module.exports = CreatedWebSocketStream
