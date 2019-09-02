'use strict'

const { AsyncObject } = require('@cuties/cutie')

class Url extends AsyncObject {
  constructor (ws) {
    super(ws)
  }

  syncCall () {
    return (ws) => {
      return ws.url
    }
  }
}

module.exports = Url
