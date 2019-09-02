'use strict'

const { AsyncObject } = require('@cuties/cutie')

class WebSocketWithPongEvent extends AsyncObject {
  constructor (ws, event) {
    super(ws, event)
  }

  // event is an Event with body(ws, data)
  syncCall () {
    return (ws, event) => {
      ws.on('pong', (data) => {
        event(ws, data)
      })
      return ws
    }
  }
}

module.exports = WebSocketWithPongEvent
