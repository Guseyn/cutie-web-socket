'use strict'

const { AsyncObject } = require('@cuties/cutie')
const WebSocket = require('ws')

class CreatedWebSocketServer extends AsyncObject {
  constructor (options) {
    super(options)
  }

  syncCall () {
    return (options) => {
      return new WebSocket.Server(options)
    }
  }
}

module.exports = CreatedWebSocketServer
