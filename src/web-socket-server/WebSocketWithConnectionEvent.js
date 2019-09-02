'use strict'

const { AsyncObject } = require('@cuties/cutie')

class WebSocketServerWithConnectionEvent extends AsyncObject {
  constructor (server, event) {
    super(server, event)
  }

  // event is an Event with body(socket, request)
  syncCall () {
    return (server, event) => {
      server.on('connection', event)
      return server
    }
  }
}

module.exports = WebSocketServerWithConnectionEvent
