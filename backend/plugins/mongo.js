import fastifyPlugin from "fastify-plugin";
import mongoose from 'mongoose';

async function dbConnector(fastify) {
  try {
    const uri = process.env.MONGODB_URI

    if (uri) {
      const conn = await mongoose.connect(uri, {})
      fastify.decorate('mongo', conn)
      fastify.log.info('MongoDB connected successfully!')
    } else {
      fastify.log.error('MongoDB URI required.')
      process.exit(1)
    }

  } catch (error) {
    fastify.log.error(`Error while connecting to MongoDB: ${error}`)
    process.exit(1)
  }
}

export default fastifyPlugin(dbConnector)