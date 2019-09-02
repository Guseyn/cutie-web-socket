'use strict'

const { AsyncObject } = require('@cuties/cutie')

class WebSocketOfHandledUpgrade extends AsyncObject {
  constructor (server, request, socket, head) {
    super(server, request, socket, head)
  }

  asyncCall () {
    return (server, request, socket, head) => {
      return server.handleUpgrade(request, socket, head)
    }
  }
}

module.exports = WebSocketOfHandledUpgrade
