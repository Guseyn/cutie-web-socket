'use strict'

const { AsyncObject } = require('@cuties/cutie')

class ReadyState extends AsyncObject {
  constructor (ws) {
    super(ws)
  }

  syncCall () {
    return (ws) => {
      return ws.readyState
    }
  }
}

module.exports = ReadyState
