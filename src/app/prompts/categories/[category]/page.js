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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
          <Link href="/prompts" className="hover:text-gray-900 dark:hover:text-white">
            Prompts
          </Link>
          <span>/</span>
          <span>{currentCategory.title}</span>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {currentCategory.title}
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          {currentCategory.description}
        </p>
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