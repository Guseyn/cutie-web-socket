'use strict'

/* const { as, AsyncObject, Event } = require('@cuties/cutie')
const { CreatedHttpServer, ListeningServer, ClosedServer, EndedResponse } = require('@cuties/http')
const {
  CreatedWebSocketServer,
  WebSocketServerWithConnectionEvent,
  SentWebSocket,
  ClosedWebSocketServer,
  CreatedWebSocket,
  ClosedWebSocket,
  WebSocketWithOpenEvent,
  WebSocketWithMessageEvent,
  TerminatedWebSocket
} = require('./../index')
const { CreatedOptions } = require('@cuties/object')
const { Logged, Delayed } = require('@cuties/async')
const PORT = 8001

class RequestResponseEvent extends Event {
  constructor () {
    super()
  }

  body (request, response) {
    // handle request
    new Logged(
      'handler is invoked'
    ).after(
      new EndedResponse(
        response, 'fake response'
      )
    ).call()
  }
}

class ServerMessageEvent extends Event {
  constructor () {
    super()
  }

  body (ws, data) {
    new Logged(
      'Recieved "%s" from the client', data
    ).after(
      new SentWebSocket(ws, 'Client, I am sending a message to you')
    ).call()
  }
}

class ClientMessageEvent extends AsyncObject {
  constructor (server, wss) {
    super(server, wss)
  }

  syncCall () {
    return (server, wss) => {
      return (ws, data) => {
        new Logged(
          'Recieved "%s" from the server', data
        ).after(
          new ClosedServer(
            server
          ).after(
            new ClosedWebSocketServer(wss).after(
              new TerminatedWebSocket(ws)
            )
          )
        ).call()
      }
    }
  }
}

class ConnectionEvent extends Event {
  constructor () {
    super()
  }

  body (ws, wss) {
    new WebSocketWithMessageEvent(
      wss, new ServerMessageEvent()
    ).after(
      new SentWebSocket(wss, 'Hi client, I am just connected with you!')
    ).call()
  }
}

class OpenEvent extends Event {
  constructor () {
    super()
  }

  body (ws) {
    new SentWebSocket(ws, 'Hey server!').call()
  }
}

new ListeningServer(
  new CreatedHttpServer(
    new RequestResponseEvent()
  ), PORT, '127.0.0.1'
).as('SERVER').after(
  new WebSocketServerWithConnectionEvent(
    new CreatedWebSocketServer(
      new CreatedOptions(
        'server', as('SERVER')
      )
    ),
    new ConnectionEvent()
  ).as('WSS').after(
    new WebSocketWithMessageEvent(
      new WebSocketWithOpenEvent(
        new CreatedWebSocket(`ws://127.0.0.1:${PORT}`),
        new OpenEvent()
      ),
      new ClientMessageEvent(as('SERVER'), as('WSS'))
    ).as('WS')
  )
).call() */
