import Link from 'next/link';

export default function Footer() {
  const navigation = [
    { name: 'Blog', href: '/blog' },
    { name: 'Snippets', href: '/snippets' },
    { name: 'Resources', href: '/resources' },
    { name: 'Projects', href: '/projects' },
    { name: 'RSS', href: '/rss/feed.xml' },
  ];

  return (
    <footer className="mt-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto lg:max-w-5xl">
          <div className="border-t border-zinc-100 dark:border-zinc-700/40 pt-10 pb-16">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="transition hover:text-teal-500 dark:hover:text-teal-400"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Suraj Adsul. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 