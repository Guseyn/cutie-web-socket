'use strict'

const { AsyncObject } = require('@cuties/cutie')

class WebSocketWithListener extends AsyncObject {
  constructor (ws, type, listener) {
    super(ws, type, listener)
  }

  syncCall () {
    return (ws, type, listener) => {
      ws.addEventListener(type, (...args) => {
        listener(ws, ...args)
      })
      return ws
    }
  }
}

module.exports = WebSocketWithListener
