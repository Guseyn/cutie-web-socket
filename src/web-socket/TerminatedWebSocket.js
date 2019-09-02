'use strict'

const { AsyncObject } = require('@cuties/cutie')

class TerminatedWebSocket extends AsyncObject {
  constructor (ws) {
    super(ws)
  }

  syncCall () {
    return (ws) => {
      ws.terminate()
      return ws
    }
  }
}

module.exports = TerminatedWebSocket
