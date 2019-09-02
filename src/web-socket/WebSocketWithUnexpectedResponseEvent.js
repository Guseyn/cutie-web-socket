'use strict'

const { AsyncObject } = require('@cuties/cutie')

class WebSocketWithUnexpectedResponseEvent extends AsyncObject {
  constructor (ws, event) {
    super(ws, event)
  }

  // event is an Event with body(ws, request, response)
  syncCall () {
    return (ws, event) => {
      ws.on('unexpected-response', (request, response) => {
        event(ws, request, response)
      })
      return ws
    }
  }
}

module.exports = WebSocketWithUnexpectedResponseEvent
