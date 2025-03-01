import Image from "next/image";
import ProfileHeader from "./components/ProfileHeader";
import WorkSection from "./components/WorkSection";
import BlogPost from "./components/BlogPost";

export default function Home() {
  const blogPosts = [
    {
      title: "Building a Modern Web Application with Next.js",
      slug: "modern-web-application-nextjs",
      date: "March 15, 2024",
      description:
        "A comprehensive guide to building modern web applications using Next.js and Tailwind CSS. Learn about the latest features, best practices, and performance optimizations.",
    },
    {
      title: "Understanding TypeScript Generics",
      slug: "typescript-generics-guide",
      date: "March 10, 2024",
      description:
        "Deep dive into TypeScript generics and their practical applications. From basic concepts to advanced patterns, learn how to write more flexible and reusable code.",
    },
  ];

  const workProjects = [
    {
      title: "Project One",
      description: "A web application built with Next.js and TypeScript",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Project Two",
      description: "Real-time chat application using WebSocket",
      tech: ["React", "Node.js", "Socket.io"],
    },
  ];

  return (
    <div className="mt-16 sm:mt-32">
      <div className="mx-auto max-w-7xl">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <ProfileHeader />

            <div className="mt-16 sm:mt-20">
              {/* Two Column Layout */}
              <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12">
                {/* Blog Posts Column */}
                <div>
                  <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mb-6">
                    Latest Posts
                  </h2>
                  <div className="space-y-12">
                    {blogPosts.map((post, index) => (
                      <BlogPost key={index} post={post} />
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
