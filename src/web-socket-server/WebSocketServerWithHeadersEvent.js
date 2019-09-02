'use strict'

const { AsyncObject } = require('@cuties/cutie')

class WebSocketServerWithHeadersEvent extends AsyncObject {
  constructor (server, event) {
    super(server, event)
  }

  // event is an Event with body(headers, request)
  syncCall () {
    return (server, event) => {
      server.on('headers', event)
      return server
    }
  }
}

module.exports = WebSocketServerWithHeadersEvent
