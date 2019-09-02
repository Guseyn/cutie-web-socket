'use strict'

const { AsyncObject } = require('@cuties/cutie')

class WebSocketServerWithErrorEvent extends AsyncObject {
  constructor (server, event) {
    super(server, event)
  }

  // event is an Event with body(error)
  syncCall () {
    return (server, event) => {
      server.on('error', event)
      return server
    }
  }
}

module.exports = WebSocketServerWithErrorEvent
