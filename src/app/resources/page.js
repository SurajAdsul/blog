import { resources } from '../../../content/resources/data';

export default function ResourcesPage() {
  return (
    <div className="mt-16 sm:mt-18">
      <div className="mx-auto max-w-7xl">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <header className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                Resources for developers
              </h1>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                A curated list of tools, platforms, and resources I use and recommend for web development.
              </p>
            </header>

            <div className="mt-16 sm:mt-20">
              {Object.entries(resources).map(([category, items]) => (
                <div key={category} className="mb-16 last:mb-0">
                  <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-8">
                    {category}
                  </h2>
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((resource, index) => (
                      <a
                        key={index}
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex flex-col items-start rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition"
                      >
                        <span className="relative z-10 text-sm font-medium text-teal-500 group-hover:text-teal-600 dark:text-teal-400 dark:group-hover:text-teal-300">
                          {resource.hostname}
                        </span>
                        <h3 className="mt-2 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                          {resource.title}
                        </h3>
                        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                          {resource.description}
                        </p>
                        <div className="relative z-10 mt-4 flex items-center text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                          <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="h-6 w-6 flex-none"
                          >
                            <path
                              d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                              fill="currentColor"
                            />
                          </svg>
                          <span className="ml-2">Visit site</span>
                        </div>
                        <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
                        <span className="absolute inset-y-1 left-0 w-px bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
                      </a>
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