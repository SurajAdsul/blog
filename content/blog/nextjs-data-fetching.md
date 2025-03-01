---
title: "Data Fetching Patterns in Next.js 14"
date: "2024-03-22"
description: "An in-depth look at different data fetching patterns in Next.js 14, including Server Components, React Server Actions, and client-side fetching strategies."
tags: ["nextjs", "react", "performance", "server-components"]
---

# Data Fetching Patterns in Next.js 14

Next.js 14 introduces powerful data fetching capabilities that leverage React's Server Components. Let's explore the different patterns and when to use each one.

## Server Components

Server Components are the default in Next.js 14 App Router. They allow you to fetch data directly in your components:

```javascript
// app/page.js
async function getData() {
  const res = await fetch('https://api.example.com/data');
  return res.json();
}

export default async function Page() {
  const data = await getData();
  
  return (
    <main>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </main>
  );
}
```

## React Server Actions

Server Actions allow you to handle form submissions and mutations directly from the server:

```typescript
// app/actions.ts
'use server'

export async function createPost(formData: FormData) {
  const title = formData.get('title');
  const content = formData.get('content');
  
  await db.post.create({
    data: {
      title,
      content,
    },
  });
}
```

```jsx
// app/new-post/page.tsx
import { createPost } from '../actions';

export default function NewPost() {
  return (
    <form action={createPost}>
      <input name="title" placeholder="Title" />
      <textarea name="content" placeholder="Content" />
      <button type="submit">Create Post</button>
    </form>
  );
}
```

## Client-Side Fetching

Sometimes you need to fetch data on the client. Here's how to do it with the `use client` directive:

```typescript
'use client'

import { useState, useEffect } from 'react';

export function RealtimeData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('wss://api.example.com');
    ws.onmessage = (event) => {
      setData(JSON.parse(event.data));
    };
    return () => ws.close();
  }, []);

  return <div>{/* Render real-time data */}</div>;
}
```

## Best Practices

1. **Use Server Components by Default**
   - Better performance
   - Smaller client bundle
   - Direct database access

2. **Server Actions for Mutations**
   - Progressive enhancement
   - Built-in validation
   - Optimistic updates

3. **Client Components When Needed**
   - Interactive features
   - Real-time updates
   - Browser APIs

## Error Handling

Always implement proper error handling:

```typescript
async function getData() {
  try {
    const res = await fetch('https://api.example.com/data');
    if (!res.ok) throw new Error('Failed to fetch data');
    return res.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
```

## Caching Strategies

Next.js provides several caching options:

```typescript
// Force-cache (default)
fetch('https://api.example.com/data');

// No-cache
fetch('https://api.example.com/data', { cache: 'no-store' });

// Revalidate every 60 seconds
fetch('https://api.example.com/data', { next: { revalidate: 60 } });
```

Remember to choose the right caching strategy based on your data requirements and user experience needs. 