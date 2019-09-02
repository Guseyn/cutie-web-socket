'use strict'

const { AsyncObject } = require('@cuties/cutie')

class Protocol extends AsyncObject {
  constructor (ws) {
    super(ws)
  }

  syncCall () {
    return (ws) => {
      return ws.protocol
    }
  }
}

module.exports = Protocol
