// src/app/lib/redisClient.ts
import { createClient } from 'redis';

declare global {
  // Extend global type to include our redis client
  // eslint-disable-next-line no-var
  var redis: any;
}

// Reuse existing client if available, otherwise create new
const redis =
  global.redis ??
  (() => {
    const client = createClient({ url: process.env.REDIS_URL });
    client.connect().catch(console.error);
    global.redis = client;
    return client;
  })();

export default redis;
