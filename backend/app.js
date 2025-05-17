import 'dotenv/config'
import Fastify from 'fastify'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'

import routes from './routes/index.js'
import dbConnector from './plugins/mongo.js'

const port = process.env.PORT || '3000'
const host = process.env.HOST || '0.0.0.0'
const environment = process.env.ENVIRONMENT || 'development'

const envToLogger = {
  development: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM',
        ignore: 'pid,hostname',
      },
    },
  },
  production: true,
  test: false,
}

const fastify = Fastify({
  logger: envToLogger[environment] ?? true 
})

await fastify.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'URL Shortener',
      description: 'API for shortening URLs',
      version: '1.0.0'
    },
    servers: [
      { url: 'http://localhost:3000', description: 'Local server' }
    ],
    tags: [{ name: 'urls', description: 'Operations about URLs' }]
  }
})

await fastify.register(fastifySwaggerUi, {
  routePrefix: '/docs',
  uiConfig: {
    docExpansion: 'list',
    deepLinking: false
  }
})

fastify.register(routes)
fastify.register(dbConnector)

fastify.listen(
  { port: port, host: host }, 
  function (err) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
)