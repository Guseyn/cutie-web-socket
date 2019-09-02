'use strict'

const { AsyncObject } = require('@cuties/cutie')

class WebSocketServerWithHeadersEvent extends AsyncObject {
  constructor (wss, event) {
    super(wss, event)
  }

  // event is an Event with body(server, headers, request)
  syncCall () {
    return (wss, event) => {
      wss.on('headers', (headers, request) => {
        event(wss, headers, request)
      })
      return wss
    }
  }
}

module.exports = WebSocketServerWithHeadersEvent
