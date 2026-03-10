import Link from 'next/link';

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
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="h-6 w-6 flex-none"
        >
          <path
            d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
            className="stroke-zinc-400 dark:stroke-zinc-500"
          />
        </svg>
        <span className="ml-3">Published Ebooks</span>
      </h2>
      <ul className="mt-6 space-y-4">
        {ebooks.map((ebook, index) => (
          <li key={index}>
            <Link
              href={ebook.file}
              target="_blank"
              className="group flex gap-4 items-start"
            >
              <div className="relative flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-5 w-5 stroke-zinc-400 dark:stroke-zinc-500"
                >
                  <path d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
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
