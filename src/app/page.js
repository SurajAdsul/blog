import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container max-w-7xl mx-auto p-4">
        <div className="max-w-2xl">
          <h1 className="mb-8">Welcome to My Blog</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
            I write about web development, software engineering, and other tech-related topics.
            Feel free to explore my blog posts, code snippets, and projects.
          </p>
          <div className="flex gap-4">
            <a
              href="/blog"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Read Blog
            </a>
            <a
              href="/projects"
              className="inline-flex items-center px-4 py-2 border border-zinc-300 dark:border-zinc-700 text-base font-medium rounded-md text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
