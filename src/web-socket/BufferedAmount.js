'use strict'

const { AsyncObject } = require('@cuties/cutie')

class BufferedAmount extends AsyncObject {
  constructor (ws) {
    super(ws)
  }

  syncCall () {
    return (ws) => {
      return ws.bufferedAmount
    }
  }
}

module.exports = BufferedAmount
