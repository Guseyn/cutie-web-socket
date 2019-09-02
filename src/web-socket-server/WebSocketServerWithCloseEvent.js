'use strict'

const { AsyncObject } = require('@cuties/cutie')

class WebSocketServerWithCloseEvent extends AsyncObject {
  constructor (wss, event) {
    super(wss, event)
  }

  // event is an Event with body(wss)
  syncCall () {
    return (wss, event) => {
      wss.on('close', () => {
        event(wss)
      })
      return wss
    }
  }
}

module.exports = WebSocketServerWithCloseEvent
