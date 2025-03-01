import { getAllMarkdownFiles } from '@/utils/markdown';
import path from 'path';
import '@/styles/markdown.css';

// Icons mapping
const icons = {
  api: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-6 w-6 flex-none"
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  ),
  hook: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-6 w-6 flex-none"
    >
      <path
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M12 8v4M12 16h.01"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  ),
};

export default function SnippetsPage() {
  // Get all markdown files from the snippets directory
  const snippetsDirectory = path.join(process.cwd(), 'content/snippets');
  const snippets = getAllMarkdownFiles(snippetsDirectory);

  return (
    <div className="mt-16 sm:mt-18">
      <div className="mx-auto max-w-7xl">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <header className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                Code snippets for developers
              </h1>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              A handy collection of code snippets for web development, find the code you need.
              </p>
            </header>

            <div className="mt-16 sm:mt-20">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {snippets.map((snippet) => (
                  <article
                    key={snippet.slug}
                    className="group relative flex flex-col items-start rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
                  >
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                      {icons[snippet.icon]}
                    </div>
                    <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                      <div className="absolute inset-0 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 rounded-2xl"></div>
                      <a href={`/snippets/${snippet.slug}`}>
                        <span className="absolute inset-0 z-20 rounded-2xl"></span>
                        <span className="relative z-10">{snippet.title}</span>
                      </a>
                    </h2>
                    <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                      {snippet.description}
                    </p>
                    <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
                    <span className="absolute inset-y-1 left-0 w-px bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 