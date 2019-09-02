'use strict'

const { AsyncObject } = require('@cuties/cutie')

class SentWebSocket extends AsyncObject {
  constructor (ws, data, options) {
    super(ws, data, options)
  }

  syncCall () {
    return (ws, data, options) => {
      ws.send(data, options)
      return ws
    }
  }
}

module.exports = SentWebSocket
