import Link from 'next/link';
import { getAllPrompts, getAllCategories } from '@/utils/prompts';
import PromptCard from '@/components/PromptCard';

export default function PromptsPage() {
  const prompts = getAllPrompts();
  const categories = getAllCategories();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          AI Prompts
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          A collection of effective prompts for various AI models
        </p>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          Categories
        </h2>
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/prompts/categories/${category.slug}`}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              {category.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Prompts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {prompts.map((prompt) => (
          <PromptCard key={prompt.slug} prompt={prompt} />
        ))}
      </div>
    </div>
  );
} 