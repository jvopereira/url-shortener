import { z } from "zod"

export const originalUrlSchema = z
  .object({
    originalUrl: z
      .string()
      .url()
      .describe("The original long URL that will be shortened"),
  })
  .describe("Payload for creating a new shortened URL")

export const shortenSchema = z
  .object({
    shortUrl: z
      .string()
      .min(10)
      .describe("The unique short ID representing the original URL"),
  })
  .describe("Parameters for resolving a shortened URL")
