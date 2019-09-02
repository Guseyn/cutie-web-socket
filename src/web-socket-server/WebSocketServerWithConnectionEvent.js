'use strict'

const { AsyncObject } = require('@cuties/cutie')

class WebSocketServerWithConnectionEvent extends AsyncObject {
  constructor (wss, event) {
    super(wss, event)
  }

  // event is an Event with body(wss, socket, request)
  syncCall () {
    return (wss, event) => {
      wss.on('connection', (socket, request) => {
        event(wss, socket, request)
      })
      return wss
    }
  }
}

module.exports = WebSocketServerWithConnectionEvent
