'use strict'

const { AsyncObject } = require('@cuties/cutie')

class WebSocketWithUpgradeEvent extends AsyncObject {
  constructor (ws, event) {
    super(ws, event)
  }

  // event is an Event with body(ws, response)
  syncCall () {
    return (ws, event) => {
      ws.on('upgrade', (response) => {
        event(ws, response)
      })
      return ws
    }
  }
}

module.exports = WebSocketWithUpgradeEvent
