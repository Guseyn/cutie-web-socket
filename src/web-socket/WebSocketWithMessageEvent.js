'use strict'

const { AsyncObject } = require('@cuties/cutie')

class WebSocketWithMessageEvent extends AsyncObject {
  constructor (ws, event) {
    super(ws, event)
  }

  // event is an Event with body(data)
  syncCall () {
    return (ws, event) => {
      ws.on('message', event)
      return ws
    }
  }
}

module.exports = WebSocketWithMessageEvent
