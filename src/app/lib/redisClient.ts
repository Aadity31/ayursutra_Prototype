import { RedisClientType } from 'redis';
import VercelKV from '@vercel/kv';
import { createClient as createRedisClient } from 'redis';

let redis: RedisClientType | typeof VercelKV;

if (process.env.VERCEL) {
  // On Vercel serverless: use the default KV export
  redis = VercelKV; // just the default export
} else {
  // Local development with Upstash Redis
  redis = createRedisClient({
    url: process.env.UPSTASH_REDIS_REST_URL,
    password: process.env.UPSTASH_REDIS_REST_TOKEN,
  });
  redis.connect().catch(console.error);
}

export default redis;
