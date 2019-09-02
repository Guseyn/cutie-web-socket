'use strict'

const { AsyncObject } = require('@cuties/cutie')

class ShouldRequestBeHandled extends AsyncObject {
  constructor (server, request) {
    super(server, request)
  }

  asyncCall () {
    return (server, request) => {
      return server.shouldHandle(request)
    }
  }
}

module.exports = ShouldRequestBeHandled
