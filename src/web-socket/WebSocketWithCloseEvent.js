'use strict'

const { AsyncObject } = require('@cuties/cutie')

class WebSocketWithCloseEvent extends AsyncObject {
  constructor (ws, event) {
    super(ws, event)
  }

  // event is an Event with body(ws, code, reason)
  syncCall () {
    return (ws, event) => {
      ws.on('close', (code, reason) => {
        event(ws, code, reason)
      })
      return ws
    }
  }
}

module.exports = WebSocketWithCloseEvent
