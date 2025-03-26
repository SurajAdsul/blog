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
                <Link 
                  href={`/prompts/categories/${prompt.category}`}
                  className="hover:text-zinc-900 dark:hover:text-zinc-100"
                >
                  {prompt.category}
                </Link>
                <span>/</span>
                <span>{prompt.title}</span>
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                {prompt.title}
              </h1>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                {prompt.excerpt}
              </p>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                {prompt.description}
              </p>
            </header>

            <div className="mt-8 sm:mt-10">
              <div className="group relative flex flex-col rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition">
                <div className="absolute top-4 right-4 z-10">
                  <CopyButton text={prompt.content} />
                </div>
                <div className="mt-8 overflow-x-auto">
                  <pre className="font-mono text-sm leading-normal text-zinc-800 dark:text-zinc-200 whitespace-pre-wrap break-words">
                    {prompt.content}
                  </pre>
                </div>
                {/* Bottom gradient line */}
                <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
                {/* Left gradient line */}
                <span className="absolute inset-y-1 left-0 w-px bg-gradient-to-b from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
              </div>

              <div className="mt-6">
                <Link
                  href={`/prompts/categories/${prompt.category}`}
                  className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70"
                >
                  View more in {prompt.category}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 