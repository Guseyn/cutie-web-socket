'use strict'

const { AsyncObject } = require('@cuties/cutie')

class ShouldRequestBeHandled extends AsyncObject {
  constructor (wss, request) {
    super(wss, request)
  }

  asyncCall () {
    return (wss, request) => {
      return wss.shouldHandle(request)
    }
  }
}

module.exports = ShouldRequestBeHandled
