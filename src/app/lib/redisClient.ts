import { createClient as createRedisClient } from 'redis';

let redis: any;

if (process.env.VERCEL) {
  redis = createRedisClient({
    url: process.env.KV_REST_API_URL,
    password: process.env.KV_REST_API_TOKEN,
  });
} else {
  redis = createRedisClient({
    url: process.env.UPSTASH_REDIS_REST_URL,
    password: process.env.UPSTASH_REDIS_REST_TOKEN,
  });
}

redis.connect().catch(console.error);

export default redis;