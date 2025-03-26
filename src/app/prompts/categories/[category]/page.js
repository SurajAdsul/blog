import { getPromptsByCategory, getAllCategories } from '@/utils/prompts';
import PromptCard from '@/components/PromptCard';
import Link from 'next/link';

export function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    category: category.slug,
  }));
}

export default function CategoryPage({ params }) {
  const { category } = params;
  const prompts = getPromptsByCategory(category);
  const categories = getAllCategories();
  const currentCategory = categories.find(cat => cat.slug === category);

  if (!currentCategory) {
    return <div>Category not found</div>;
  }

  return (
    <div className="mt-16 sm:mt-18">
      <div className="mx-auto max-w-7xl">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <header className="max-w-2xl">
              <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                <Link 
                  href="/prompts" 
                  className="hover:text-zinc-900 dark:hover:text-zinc-100"
                >
                  Prompts
                </Link>
                <span>/</span>
                <span>{currentCategory.title}</span>
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                {currentCategory.title}
              </h1>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                {currentCategory.description}
              </p>
            </header>

            {/* Categories Section */}
            <div className="mt-8 sm:mt-10">
              <div className="flex flex-wrap gap-4">
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/prompts/categories/${cat.slug}`}
                    className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium ${
                      cat.slug === category
                        ? 'bg-teal-500/10 text-teal-500 dark:text-teal-400'
                        : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300'
                    }`}
                  >
                    {cat.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-16 sm:mt-20">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {prompts.map((prompt) => (
                  <PromptCard key={prompt.slug} prompt={prompt} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 