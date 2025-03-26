import Link from 'next/link';

export default function PromptCard({ prompt }) {
  return (
    <Link 
      href={`/prompts/${prompt.slug}`}
      className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow"
    >
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
        {prompt.title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        {prompt.excerpt}
      </p>
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-full">
          {prompt.category}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {new Date(prompt.date).toLocaleDateString()}
        </span>
      </div>
    </Link>
  );
} 