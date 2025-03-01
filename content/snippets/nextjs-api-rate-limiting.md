---
title: Next.js API Route with Rate Limiting
description: Implement rate limiting in Next.js API routes using Redis.
date: March 20, 2024
icon: api
---

Rate limiting is crucial for protecting your API endpoints from abuse. Here's how to implement rate limiting in Next.js API routes using Redis.

First, install the required dependencies:
```bash
npm install rate-limiter-flexible ioredis
```

Create a Redis client:
```javascript
// lib/redis.js
import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL);
export default redis;
```

Implement the rate limiter:
```javascript
// pages/api/example.js
import { RateLimiterRedis } from 'rate-limiter-flexible';
import redis from '@/lib/redis';

const rateLimiter = new RateLimiterRedis({
  storeClient: redis,
  keyPrefix: 'ratelimit',
  points: 10, // Number of requests
  duration: 1, // Per second
});

export default async function handler(req, res) {
  try {
    await rateLimiter.consume(req.ip);
    // Your API logic here
    res.status(200).json({ message: 'Success' });
  } catch (error) {
    res.status(429).json({ message: 'Too Many Requests' });
  }
}
```

This implementation:
- Limits each IP to 10 requests per second
- Uses Redis for distributed rate limiting
- Returns 429 status when limit is exceeded
- Handles rate limiting errors gracefully 