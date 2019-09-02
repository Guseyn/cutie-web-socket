'use strict'

const { AsyncObject } = require('@cuties/cutie')

class WebSocketWithUnexpectedResponseEvent extends AsyncObject {
  constructor (ws, event) {
    super(ws, event)
  }

  // event is an Event with body(request, response)
  syncCall () {
    return (ws, event) => {
      ws.on('unexpected-response', event)
      return ws
    }
  }
}

module.exports = WebSocketWithUnexpectedResponseEvent
