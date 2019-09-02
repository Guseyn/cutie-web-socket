'use strict'

const { AsyncObject } = require('@cuties/cutie')
const WebSocket = require('ws')

class CreatedWebSocket extends AsyncObject {
  constructor (address, protocol, options) {
    super(address, protocol, options)
  }

  syncCall () {
    return (address, protocol, options) => {
      return new WebSocket(address, protocol, options)
    }
  }
}

module.exports = CreatedWebSocket
