import Link from 'next/link';
import { getAllPrompts, getAllCategories } from '@/utils/prompts';
import PromptCard from '@/components/PromptCard';

export default function PromptsPage() {
  const prompts = getAllPrompts();
  const categories = getAllCategories();

  // Group prompts by category
  const promptsByCategory = prompts.reduce((acc, prompt) => {
    if (!acc[prompt.category]) {
      acc[prompt.category] = [];
    }
    acc[prompt.category].push(prompt);
    return acc;
  }, {});

  return (
    <div className="mt-16 sm:mt-18">
      <div className="mx-auto max-w-7xl">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <header className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                AI Prompts Collection
              </h1>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                A curated collection of effective prompts for various AI models to help you get better results.
              </p>
            </header>

            {/* Categories Section */}
            <div className="mt-8 sm:mt-10">
              <div className="flex flex-wrap gap-4">
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/prompts/categories/${category.slug}`}
                    className="inline-flex items-center rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
                  >
                    {category.title}
                    <span className="ml-2 text-zinc-500 dark:text-zinc-500">
                      {promptsByCategory[category.slug]?.length || 0}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-16 sm:mt-20">
              {categories.map((category) => (
                <div key={category.slug} className="mb-16 last:mb-0">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                      {category.title}
                    </h2>
                    <Link
                      href={`/prompts/categories/${category.slug}`}
                      className="text-sm font-medium text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300"
                    >
                      View all
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {promptsByCategory[category.slug]?.map((prompt) => (
                      <PromptCard key={prompt.slug} prompt={prompt} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 