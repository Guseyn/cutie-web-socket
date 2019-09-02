'use strict'

const { AsyncObject } = require('@cuties/cutie')

class WebSocketWithOpenEvent extends AsyncObject {
  constructor (ws, event) {
    super(ws, event)
  }

  // event is an Event with body(ws)
  syncCall () {
    return (ws, event) => {
      ws.on('open', () => {
        event(ws)
      })
      return ws
    }
  }
}

module.exports = WebSocketWithOpenEvent
