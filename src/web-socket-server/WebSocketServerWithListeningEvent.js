'use strict'

const { AsyncObject } = require('@cuties/cutie')

class WebSocketServerWithListeningEvent extends AsyncObject {
  constructor (wss, event) {
    super(wss, event)
  }

  // event is an Event with body(server)
  syncCall () {
    return (wss, event) => {
      wss.on('listening', () => {
        event(wss)
      })
      return wss
    }
  }
}

module.exports = WebSocketServerWithListeningEvent
