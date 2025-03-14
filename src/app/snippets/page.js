import "@/styles/markdown.css";
import { getAllMarkdownFiles } from "@/utils/markdown";
import "devicon/devicon.min.css";
import path from "path";

// Icons mapping using devicon classes
const icons = {
  laravel: (
    <i className="devicon-laravel-plain text-2xl text-teal-500 dark:text-teal-400 transition-transform group-hover:scale-110"></i>
  ),
  react: (
    <i className="devicon-react-plain text-2xl text-teal-500 dark:text-teal-400 transition-transform group-hover:scale-110"></i>
  ),
  database: (
    <i className="devicon-azuresqldatabase-plain text-2xl text-teal-500 dark:text-teal-400 transition-transform group-hover:scale-110"></i>
  ),
  javascript: (
    <i className="devicon-javascript-plain text-2xl text-teal-500 dark:text-teal-400 transition-transform group-hover:scale-110"></i>
  ),
  git: (
    <i className="devicon-git-plain text-2xl text-teal-500 dark:text-teal-400 transition-transform group-hover:scale-110"></i>
  ),
};

export default function SnippetsPage() {
  // Get all markdown files from the snippets directory
  const snippetsDirectory = path.join(process.cwd(), "content/snippets");
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
                A handy collection of code snippets for web development which I
                have collected over time.
              </p>
            </header>

            <div className="mt-16 sm:mt-20">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {snippets.map((snippet) => (
                  <article
                    key={snippet.slug}
                    className="group relative flex flex-col items-start rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
                  >
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 shadow-lg shadow-teal-500/10 ring-1 ring-teal-500/20 dark:bg-teal-500/10 dark:ring-teal-400/20 transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-teal-500/20">
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
                    <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
                    <span className="absolute inset-y-1 left-0 w-px bg-gradient-to-b from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
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
