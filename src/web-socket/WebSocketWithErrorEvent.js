'use strict'

const { AsyncObject } = require('@cuties/cutie')

class WebSocketWithErrorEvent extends AsyncObject {
  constructor (ws, event) {
    super(ws, event)
  }

  // event is an Event with body(ws, error)
  syncCall () {
    return (ws, event) => {
      ws.on('error', (error) => {
        event(ws, error)
      })
      return ws
    }
  }
}

module.exports = WebSocketWithErrorEvent
