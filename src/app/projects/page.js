export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <div className="container max-w-7xl mx-auto p-4">
        <div className="mx-auto lg:max-w-5xl">
          <h1 className="mb-8">Projects</h1>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Project cards will go here */}
            <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-6">
              <h2 className="text-xl mb-4">Featured Project</h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                Description of your featured project goes here.
              </p>
              <div className="mt-4 flex gap-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  React
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  Next.js
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 