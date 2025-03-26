import Link from 'next/link';

export default function PromptCard({ prompt }) {
  return (
    <Link 
      href={`/prompts/${prompt.slug}`}
      className="group relative flex flex-col items-start rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition"
    >
      <span className="relative z-10 text-sm font-medium text-teal-500 group-hover:text-teal-600 dark:text-teal-400 dark:group-hover:text-teal-300">
        {prompt.category}
      </span>
      <h3 className="mt-2 text-base font-semibold text-zinc-800 dark:text-zinc-100">
        {prompt.title}
      </h3>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {prompt.excerpt}
      </p>
      <div className="relative z-10 mt-4 flex items-center text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-6 w-6 flex-none"
        >
          <path
            d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z"
            fill="currentColor"
          />
          <path
            d="M3.375 7.5c0-1.036.84-1.875 1.875-1.875h.375A3.75 3.75 0 019 9.375v1.875C9 12.286 9.84 13.125 10.875 13.125h1.875A3.75 3.75 0 0116.5 16.875v3.375c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.25V7.5z"
            fill="currentColor"
            fillOpacity="0.3"
          />
        </svg>
        <span className="ml-2">View prompt</span>
      </div>
      {/* Bottom gradient line */}
      <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
      {/* Left gradient line */}
      <span className="absolute inset-y-1 left-0 w-px bg-gradient-to-b from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
    </Link>
  );
} 