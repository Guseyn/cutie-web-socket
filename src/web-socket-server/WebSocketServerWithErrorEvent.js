'use strict'

const { AsyncObject } = require('@cuties/cutie')

class WebSocketServerWithErrorEvent extends AsyncObject {
  constructor (wss, event) {
    super(wss, event)
  }

  // event is an Event with body(wss, error)
  syncCall () {
    return (wss, event) => {
      wss.on('error', (error) => {
        event(wss, error)
      })
      return wss
    }
  }
}

module.exports = WebSocketServerWithErrorEvent
