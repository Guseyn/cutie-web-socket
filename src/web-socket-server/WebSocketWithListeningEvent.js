'use strict'

const { AsyncObject } = require('@cuties/cutie')

class WebSocketServerWithListeningEvent extends AsyncObject {
  constructor (server, event) {
    super(server, event)
  }

  // event is an Event with body()
  syncCall () {
    return (server, event) => {
      server.on('listening', event)
      return server
    }
  }
}

module.exports = WebSocketServerWithListeningEvent
