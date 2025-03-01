import Link from 'next/link';

const snippets = {
  'nextjs-api-rate-limiting': {
    title: 'Next.js API Route with Rate Limiting',
    date: 'March 20, 2024',
    content: `
      Rate limiting is crucial for protecting your API endpoints from abuse. Here's how to implement 
      rate limiting in Next.js API routes using Redis.

      First, install the required dependencies:
      \`\`\`bash
      npm install rate-limiter-flexible ioredis
      \`\`\`

      Create a Redis client:
      \`\`\`javascript
      // lib/redis.js
      import Redis from 'ioredis';

      const redis = new Redis(process.env.REDIS_URL);
      export default redis;
      \`\`\`

      Implement the rate limiter:
      \`\`\`javascript
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
      \`\`\`

      This implementation:
      - Limits each IP to 10 requests per second
      - Uses Redis for distributed rate limiting
      - Returns 429 status when limit is exceeded
      - Handles rate limiting errors gracefully
    `
  },
  'react-custom-hooks': {
    title: 'Essential React Custom Hooks',
    date: 'March 18, 2024',
    content: `
      Custom hooks are a powerful way to reuse stateful logic in React components. Here are some 
      essential custom hooks that you can use in your projects.

      useLocalStorage Hook:
      \`\`\`javascript
      function useLocalStorage(key, initialValue) {
        const [storedValue, setStoredValue] = useState(() => {
          if (typeof window === 'undefined') return initialValue;
          
          try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
          } catch (error) {
            console.error(error);
            return initialValue;
          }
        });

        const setValue = value => {
          try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
          } catch (error) {
            console.error(error);
          }
        };

        return [storedValue, setValue];
      }
      \`\`\`

      Usage:
      \`\`\`javascript
      function App() {
        const [name, setName] = useLocalStorage('name', 'Bob');
        return (
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        );
      }
      \`\`\`

      This hook:
      - Syncs state with localStorage
      - Handles JSON serialization/deserialization
      - Works with SSR
      - Includes error handling
    `
  }
};

export default function SnippetPost({ params }) {
  const snippet = snippets[params.slug];

  if (!snippet) {
    return <div>Snippet not found</div>;
  }

  return (
    <div className="sm:px-8 mt-16 lg:mt-32">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="xl:relative">
              <div className="mx-auto max-w-2xl">
                <Link
                  href="/snippets"
                  aria-label="Go back to snippets"
                  className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"
                >
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"
                  >
                    <path
                      d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>

                <article>
                  <header className="flex flex-col">
                    <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                      {snippet.title}
                    </h1>
                    <time
                      dateTime={snippet.date}
                      className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
                    >
                      <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                      <span className="ml-3">{snippet.date}</span>
                    </time>
                  </header>
                  <div className="mt-8 prose dark:prose-invert">
                    {snippet.content.split('\n').map((paragraph, index) => {
                      if (paragraph.trim().startsWith('```')) {
                        const [_, language, ...code] = paragraph.split('\n');
                        const codeContent = code.join('\n').replace('```', '');
                        return (
                          <pre key={index} className="language-javascript">
                            <code>{codeContent}</code>
                          </pre>
                        );
                      }
                      return (
                        <p key={index} className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 