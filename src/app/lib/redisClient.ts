// src/app/lib/redisClient.ts
import { createClient, RedisClientType } from 'redis';

declare global {
  // Extend global type to include our Redis client
  // Avoid `any`
  // eslint-disable-next-line no-var
  var redis: RedisClientType | undefined;
}

// Reuse existing client if available, otherwise create new
const redis: RedisClientType =
  global.redis ??
  (() => {
    const client: RedisClientType = createClient({ url: process.env.REDIS_URL });
    client.connect().catch(console.error);
    global.redis = client;
    return client;
  })();

export default redis;
