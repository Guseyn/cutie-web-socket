'use strict'

const { AsyncObject } = require('@cuties/cutie')
const WebSocket = require('ws')

class IsClosing extends AsyncObject {
  constructor (ws) {
    super(ws)
  }

  syncCall () {
    return (ws) => {
      return ws.readyState === WebSocket.Closing
    }
  }
}

module.exports = IsClosing
