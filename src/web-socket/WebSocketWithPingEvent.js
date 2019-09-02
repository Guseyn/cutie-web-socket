'use strict'

const { AsyncObject } = require('@cuties/cutie')

class WebSocketWithPingEvent extends AsyncObject {
  constructor (ws, event) {
    super(ws, event)
  }

  // event is an Event with body(data)
  syncCall () {
    return (ws, event) => {
      ws.on('ping', event)
      return ws
    }
  }
}

module.exports = WebSocketWithPingEvent
