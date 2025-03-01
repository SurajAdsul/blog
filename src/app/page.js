import { getAllMarkdownFiles } from '@/utils/markdown';
import Link from 'next/link';
import path from 'path';
import ProfileHeader from "./components/ProfileHeader";
import WorkSection from "./components/WorkSection";

export default function Home() {
  // Get all blog posts from the content/blog directory
  const blogPosts = getAllMarkdownFiles(path.join(process.cwd(), 'content/blog'))
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3); // Get only the 3 most recent posts

  return (
    <div className="sm:px-8 mt-16 sm:mt-18">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <ProfileHeader />
            <div className="mx-auto lg:max-w-5xl">
              {/* Two Column Layout */}
              <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12">
                {/* Blog Posts Column */}
                <div>
                  <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mb-6">
                    Latest Posts
                  </h2>
                  <div className="space-y-12">
                    {blogPosts.map((post) => (
                      <article key={post.slug} className="group relative flex flex-col items-start">
                        <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                          <Link href={`/blog/${post.slug}`}>
                            <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                            <span className="relative z-10">{post.title}</span>
                          </Link>
                        </h2>
                        <time
                          className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
                          dateTime={post.date}
                        >
                          <span className="absolute inset-y-0 left-0 flex items-center">
                            <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                          </span>
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                          {post.description}
                        </p>
                        <div
                          aria-hidden="true"
                          className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
                        >
                          Read article
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            aria-hidden="true"
                            className="ml-1 h-4 w-4 stroke-current"
                          >
                            <path
                              d="M6.75 5.75 9.25 8l-2.5 2.25"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                {/* Work Section */}
                <div>
                  <WorkSection />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
