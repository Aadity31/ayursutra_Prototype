import { createClient, RedisClientType } from 'redis';

declare global {
  // Extend global to store the Redis client for hot reloads
  var redis: RedisClientType | undefined;
}

// Reuse existing client if available, otherwise create a new one
const redis: RedisClientType =
  global.redis ??
  (() => {
    const client: RedisClientType = createClient({
      url: process.env.REDIS_URL,
    });
    client.connect().catch(console.error);
    global.redis = client;
    return client;
  })();

export default redis;
