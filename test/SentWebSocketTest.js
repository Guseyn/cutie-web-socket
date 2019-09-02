'use strict'

const { as, Event } = require('@cuties/cutie')
const { CreatedHttpServer, ListeningServer, ClosedServer, EndedResponse } = require('@cuties/http')
const PORT = 8001

class RequestResponseEvent extends Event {
  constructor () {
    super()
  }

  body (request, response) {
    // handle request
    new EndedResponse(response, 'fake response').call()
  }
}

new ListeningServer(
  new CreatedHttpServer(
    new RequestResponseEvent()
  ), PORT, '127.0.0.1'
).as('SERVER').after(
  new ClosedServer(as('SERVER'))
)
