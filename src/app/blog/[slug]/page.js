import { getMarkdownContent } from '@/utils/markdown';
import path from 'path';
import Link from 'next/link';
import '@/styles/markdown.css';

// Add metadata export for better SEO
export async function generateMetadata({ params }) {
  const filePath = path.join(process.cwd(), 'content/blog', `${params.slug}.md`);
  const { frontmatter } = getMarkdownContent(filePath);
  
  return {
    title: frontmatter.title,
    description: frontmatter.description || '',
  };
}

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

                <article className="prose prose-zinc dark:prose-invert lg:prose-xl mx-auto px-4 prose-headings:font-medium prose-p:leading-relaxed">
                  <header className="mb-8">
                    {frontmatter.date && (
                      <time 
                        dateTime={frontmatter.date} 
                        className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
                      >
                        <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                        <span className="ml-3">
                          {new Date(frontmatter.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </span>
                      </time>
                    )}
                    <h1 className="mb-2 !mt-0">{frontmatter.title}</h1>
                  </header>
                  <div 
                    dangerouslySetInnerHTML={{ __html: content }}
                    className="markdown-content"
                  />
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 