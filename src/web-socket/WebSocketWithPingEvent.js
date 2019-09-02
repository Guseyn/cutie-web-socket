'use strict'

const { AsyncObject } = require('@cuties/cutie')

class WebSocketWithPingEvent extends AsyncObject {
  constructor (ws, event) {
    super(ws, event)
  }

  // event is an Event with body(ws, data)
  syncCall () {
    return (ws, event) => {
      ws.on('ping', (data) => {
        event(ws, data)
      })
      return ws
    }
  }
}

module.exports = WebSocketWithPingEvent
