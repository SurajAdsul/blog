import { getMarkdownContent } from '@/utils/markdown';
import path from 'path';
import Link from 'next/link';

const blogPosts = {
  'modern-web-application-nextjs': {
    title: 'Building a Modern Web Application with Next.js',
    date: 'March 15, 2024',
    content: `
      Next.js has revolutionized the way we build web applications. In this comprehensive guide, 
      we'll explore how to build a modern web application using Next.js and Tailwind CSS.
      
      We'll cover everything from setting up your development environment to deploying your 
      application to production. You'll learn about the latest features, best practices, 
      and performance optimizations.

      Topics covered:
      - App Router vs Pages Router
      - Server Components vs Client Components
      - Data Fetching Strategies
      - Route Handlers and API Routes
      - Optimizing Images and Fonts
      - Deployment and Performance
    `
  },
  'typescript-generics-guide': {
    title: 'Understanding TypeScript Generics',
    date: 'March 10, 2024',
    content: `
      TypeScript generics are a powerful feature that allows you to write flexible, 
      reusable code while maintaining type safety. In this deep dive, we'll explore 
      how to effectively use generics in your TypeScript applications.

      We'll start with the basics and gradually move to more advanced patterns and 
      real-world use cases. By the end of this guide, you'll have a solid understanding 
      of how to leverage generics to write better TypeScript code.

      Topics covered:
      - Basic Generic Syntax
      - Generic Constraints
      - Generic Classes and Interfaces
      - Generic Type Inference
      - Advanced Generic Patterns
      - Real-world Examples
    `
  }
};

export default function BlogPost({ params }) {
  const filePath = path.join(process.cwd(), 'content/blog', `${params.slug}.md`);
  const { frontmatter, content } = getMarkdownContent(filePath);

  return (
    <div className="sm:px-8 mt-16 lg:mt-32">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="xl:relative">
              <div className="mx-auto max-w-2xl">
                <Link
                  href="/blog"
                  aria-label="Go back to articles"
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

                <article className="prose lg:prose-xl mx-auto px-4">
                  <h1>{frontmatter.title}</h1>
                  <div dangerouslySetInnerHTML={{ __html: content }} />
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 