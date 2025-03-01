export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <div className="container max-w-7xl mx-auto p-4">
        <div className="mx-auto lg:max-w-5xl">
          <h1 className="mb-8">Resources</h1>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Resource cards will go here */}
            <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-6">
              <h2 className="text-xl mb-4">Development Tools</h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                A curated list of development tools and resources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 