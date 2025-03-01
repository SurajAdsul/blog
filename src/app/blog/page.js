import Link from 'next/link';

const articles = [
  {
    title: "All of My Ideas Were Failing 🪡🧵",
    slug: "learning",
    date: "September 5, 2024",
    description: "The journey of building my first successful open source project, Easy UI, and how it restored my confidence.",
  },
  {
    title: "Introducing Easy UI - Collection 50+ high-quality, free website templates.",
    slug: "introducing-animaginary",
    date: "July 19, 2024",
    description: "Introducing Easy UI - A collection of high-quality, free website templates designed to save time and reduce development costs.",
  },
  {
    title: "$4.99 Feature That Landed Multiple Paid Customers for My Side Project 💰",
    slug: "crafting-a-design-system",
    date: "June 24, 2024",
    description: "How a simple feature addition to Reachactory resulted in multiple paid customers and validated months of hard work.",
  },
  {
    title: "My Side Project Journey of Making $1.5k",
    slug: "rewriting-the-cosmos",
    date: "May 17, 2024",
    description: "The inspiring story of Reachactory, a side hustle turned thriving business, revolutionizing the AI and SaaS landscape.",
  },
];

export default function BlogPage() {
  return (
    <div className="sm:px-8 mt-16 sm:mt-32">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <header className="max-w-full">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                Writing on software development, company building, and marketing.
              </h1>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                All of my long-form thoughts on coding, leadership, product development, and more, collected in chronological order.
              </p>
            </header>

            <div className="mt-16 sm:mt-20">
              <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                <div className="flex max-w-3xl flex-col space-y-16">
                  {articles.map((article, index) => (
                    <article key={index} className="md:grid md:grid-cols-4 md:items-baseline">
                      <div className="md:col-span-3 group relative flex flex-col items-start">
                        <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                          <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                          <Link 
                            href={`/blog/${article.slug}`}
                            className="hover:text-teal-500 dark:hover:text-teal-400"
                          >
                            <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                            <span className="relative z-10">{article.title}</span>
                          </Link>
                        </h2>
                        <time 
                          className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5" 
                          dateTime={article.date}
                        >
                          <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                            <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                          </span>
                          {article.date}
                        </time>
                        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                          {article.description}
                        </p>
                        <div 
                          aria-hidden="true" 
                          className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
                        >
                          Read article
                        </div>
                      </div>
                      <time 
                        className="mt-1 hidden md:block relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500" 
                        dateTime={article.date}
                      >
                        {article.date}
                      </time>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 