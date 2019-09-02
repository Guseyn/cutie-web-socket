'use strict'

const { AsyncObject } = require('@cuties/cutie')

class Extensions extends AsyncObject {
  constructor (ws) {
    super(ws)
  }

  syncCall () {
    return (ws) => {
      return ws.extensions
    }
  }
}

module.exports = Extensions
