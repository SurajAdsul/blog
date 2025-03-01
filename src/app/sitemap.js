export const dynamic = 'force-static';

import { getAllMarkdownFiles } from '@/utils/markdown';
import path from 'path';

export default async function sitemap() {
  const baseUrl = 'https://surajadsul.me';
  
  // Get all blog posts
  const blogPosts = getAllMarkdownFiles(path.join(process.cwd(), 'content/blog'));
  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.lastModified || post.date,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Get all snippets
  const snippets = getAllMarkdownFiles(path.join(process.cwd(), 'content/snippets'));
  const snippetUrls = snippets.map((snippet) => ({
    url: `${baseUrl}/snippets/${snippet.slug}`,
    lastModified: snippet.lastModified || snippet.date,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Add static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/snippets`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  return [...staticPages, ...blogUrls, ...snippetUrls];
} 