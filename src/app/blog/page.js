export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <div className="container max-w-7xl mx-auto p-4">
        <h1 className="mb-8">Blog</h1>
        <div className="grid gap-8">
          {/* Blog post previews will go here */}
          <article className="prose dark:prose-invert">
            <h2>Sample Blog Post</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              This is a preview of a blog post. You can add your blog content here.
            </p>
          </article>
        </div>
      </div>
    </main>
  );
} 