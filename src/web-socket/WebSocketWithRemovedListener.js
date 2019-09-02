'use strict'

const { AsyncObject } = require('@cuties/cutie')

class WebSocketWithRemovedListener extends AsyncObject {
  constructor (ws, type, listener) {
    super(ws, type, listener)
  }

  syncCall () {
    return (ws, type, listener) => {
      ws.removeEventListener(type, listener)
      return ws
    }
  }
}

module.exports = WebSocketWithRemovedListener
