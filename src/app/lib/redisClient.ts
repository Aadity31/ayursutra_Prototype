// src/app/lib/redisClient.ts
import { createClient, RedisClientType } from 'redis';
import VercelKV from '@vercel/kv';

let redis: RedisClientType | typeof VercelKV;

if (process.env.VERCEL) {
  // On Vercel: use Vercel KV directly
  redis = VercelKV;
} else {
  // Local dev: Upstash Redis
  redis = createClient({
    url: process.env.UPSTASH_REDIS_REST_URL,
    password: process.env.UPSTASH_REDIS_REST_TOKEN,
  });
  redis.connect().catch(console.error);
}

export default redis;
