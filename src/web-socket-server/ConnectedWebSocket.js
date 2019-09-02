'use strict'

const { AsyncObject } = require('@cuties/cutie')

class ConnectedWebSocket extends AsyncObject {
  constructor (server) {
    super(server)
  }

  asyncCall () {
    return (server, callback) => {
      server.on('connection', (socket) => {
        callback(socket)
      })
    }
  }
}

module.exports = ConnectedWebSocket
