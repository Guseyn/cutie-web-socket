'use strict'

const { AsyncObject } = require('@cuties/cutie')

class WebSocketWithPongEvent extends AsyncObject {
  constructor (ws, event) {
    super(ws, event)
  }

  // event is an Event with body(data)
  syncCall () {
    return (ws, event) => {
      ws.on('pong', event)
      return ws
    }
  }
}

module.exports = WebSocketWithPongEvent
