import Link from 'next/link';
import { RocketLaunchIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const ebooks = [
  {
    title: "Stop Coding Alone",
    description: "Developing a mindset for the Exponential Age",
    file: "/ebooks/ThinkPiece-Suraj Adsul.pdf",
  },
];

export default function EbooksSection() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 mb-6">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <RocketLaunchIcon
          aria-hidden="true"
          className="h-6 w-6 flex-none fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
        />
        <span className="ml-3">Published Ebooks</span>
      </h2>
      <ul className="mt-6 space-y-4">
        {ebooks.map((ebook, index) => (
          <li key={index}>
            <Link href={ebook.file} target="_blank" className="group flex gap-4 items-start">
              <div className="relative flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <DocumentTextIcon aria-hidden="true" className="h-5 w-5 stroke-zinc-400 dark:stroke-zinc-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-zinc-900 group-hover:text-teal-500 dark:text-zinc-100 dark:group-hover:text-teal-400 transition-colors">
                  {ebook.title}
                </span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  {ebook.description}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
