import { getPromptBySlug, getAllPrompts } from '@/utils/prompts';
import Link from 'next/link';
import CopyButton from '@/components/CopyButton';

export function generateStaticParams() {
  const prompts = getAllPrompts();
  return prompts.map((prompt) => ({
    slug: prompt.slug,
  }));
}

export default function PromptPage({ params }) {
  const { slug } = params;
  const prompt = getPromptBySlug(slug);

  if (!prompt) {
    return <div>Prompt not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
          <Link href="/prompts" className="hover:text-gray-900 dark:hover:text-white">
            Prompts
          </Link>
          <span>/</span>
          <Link 
            href={`/prompts/categories/${prompt.category}`}
            className="hover:text-gray-900 dark:hover:text-white"
          >
            {prompt.category}
          </Link>
          <span>/</span>
          <span>{prompt.title}</span>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {prompt.title}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          {prompt.excerpt}
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
        <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800 dark:text-gray-200">
          {prompt.content}
        </pre>
      </div>

      <CopyButton text={prompt.content} />
    </div>
  );
} 