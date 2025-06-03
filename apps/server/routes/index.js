import mongoose from 'mongoose';
import { zodToJsonSchema } from 'zod-to-json-schema';

import { originalUrlSchema, shortenSchema } from '../schemas/validators.js';
import urlId from '../utils/urlId.js';
import slugSchema from '../schemas/slug.js';

const Slug = mongoose.model('Slug', slugSchema);

// Convert Zod schemas to JSON Schema
const originalUrlBodySchema = zodToJsonSchema(originalUrlSchema);
const shortenParamsSchema = zodToJsonSchema(shortenSchema);

async function routes(fastify) {
  fastify.post(
    '/api/shorten',
    {
      schema: {
        tags: ['urls'],
        summary: 'Create a short URL',
        body: originalUrlBodySchema,
        response: {
          200: {
            description: 'Shortened URL object',
            type: 'object',
            properties: {
              _id: { type: 'string', example: '6647fc7de650fb83f9cc7b8d' },
              originalUrl: { type: 'string', example: 'https://example.com' },
              shortUrl: { type: 'string', example: 'h3Ls91X9pQ' },
            },
          },
          400: {
            description: 'Invalid URL input',
            type: 'object',
            properties: {
              error: { type: 'object' },
            },
          },
        },
      },
    },
    async function handler(request, reply) {
      const parseResult = originalUrlSchema.safeParse(request.body);

      if (!parseResult.success)
        return reply.status(400).send({ error: parseResult.error.flatten() });

      const { originalUrl } = parseResult.data;
      const shortUrl = urlId();

      const newSlug = new Slug({ originalUrl, shortUrl });
      await newSlug.save();

      return newSlug;
    },
  ),
    fastify.get(
      '/api/:shortUrl',
      {
        schema: {
          tags: ['urls'],
          summary: 'Redirect to original URL using the shortened slug',
          params: shortenParamsSchema,
          response: {
            302: {
              description: 'Redirect to original URL',
            },
            400: {
              description: 'Invalid short URL format',
              type: 'object',
              properties: {
                error: { type: 'object' },
              },
            },
            404: {
              description: 'Short URL not found',
              type: 'object',
              properties: {
                error: { type: 'string', example: 'Slug h3Ls91X9pQ not found.' },
              },
            },
          },
        },
      },
      async function handler(request, reply) {
        const parseResult = shortenSchema.safeParse(request.params);

        if (!parseResult.success)
          return reply.status(400).send({ error: parseResult.error.flatten() });

        const { shortUrl } = parseResult.data;

        const slug = await Slug.findOne({ shortUrl }, 'originalUrl');

        if (!slug) return reply.status(404).send({ error: `Slug ${shortUrl} not found.` });

        reply.redirect(slug.originalUrl);
      },
    );
}

export default routes;
