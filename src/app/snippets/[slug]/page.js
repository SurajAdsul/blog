import Link from 'next/link';
import path from 'path';
import { getMarkdownContent, getAllMarkdownFiles, MarkdownContent } from '@/utils/markdown';
import '@/styles/markdown.css';

export async function generateStaticParams() {
  const snippets = getAllMarkdownFiles(path.join(process.cwd(), 'content/snippets'));
  return snippets.map((snippet) => ({
    slug: snippet.slug,
  }));
}

export default async function SnippetPost({ params }) {
  const resolvedParams = await params; // Await the params object
  const slug = resolvedParams.slug; // Now access slug safely
  const snippetPath = path.join(process.cwd(), 'content/snippets', `${slug}.md`);
  const { frontmatter, content } = getMarkdownContent(snippetPath);

  if (!frontmatter) {
    return <div>Snippet not found</div>;
  }

  return (
    <div className="sm:px-8 mt-16 lg:mt-18">
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
                      {frontmatter.title}
                    </h1>
                    <time
                      dateTime={frontmatter.date}
                      className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
                    >
                      <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                      <span className="ml-3">{frontmatter.date}</span>
                    </time>
                  </header>
                  <div className="mt-8 prose dark:prose-invert markdown-content">
                    <MarkdownContent content={content} />
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