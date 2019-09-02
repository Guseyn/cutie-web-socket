'use strict'

const { AsyncObject } = require('@cuties/cutie')

class ClosedWebSocketServer extends AsyncObject {
  constructor (wss) {
    super(wss)
  }

  syncCall () {
    return (wss) => {
      wss.close()
      return wss
    }
  }
}

module.exports = ClosedWebSocketServer
