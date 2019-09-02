'use strict'

const { AsyncObject } = require('@cuties/cutie')

class BinaryType extends AsyncObject {
  constructor (ws) {
    super(ws)
  }

  syncCall () {
    return (ws) => {
      return ws.binaryType
    }
  }
}

module.exports = BinaryType
