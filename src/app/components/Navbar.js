'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check if dark mode is active
    const isLight = document.documentElement.classList.contains('dark') === false;
    setIsDark(!isLight);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  };

  return (
    <nav className="py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Profile Photo and Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <Link 
              href="/"
              className="block overflow-hidden rounded-full w-8 h-8 ring-1 ring-zinc-900/5 dark:ring-white/10"
            >
              <Image
                src="/profile.jpeg"
                alt="Profile"
                width={32}
                height={32}
                className="object-cover"
              />
            </Link>
            <button
              onClick={toggleMenu}
              className="sm:hidden text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Centered Desktop Menu */}
          <div className="hidden sm:block rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-900/90 dark:text-zinc-200 dark:ring-white/10">
            <Link 
              href="/" 
              className="relative rounded-lg px-3 inline-block py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900"
            >
              <span className="relative z-10 text-teal-600">Home</span>
              <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
            </Link>
            <Link 
              href="/blog" 
              className="relative rounded-lg px-3 inline-block py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900"
            >
              <span className="relative z-10 text-gray-600 dark:text-gray-50">Blog</span>
            </Link>
            <Link 
              href="/snippets" 
              className="relative rounded-lg px-3 inline-block py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900"
            >
              <span className="relative z-10 text-gray-600 dark:text-gray-50">Snippets</span>
            </Link>
            <Link 
              href="/resources" 
              className="relative rounded-lg px-3 inline-block py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900"
            >
              <span className="relative z-10 text-gray-600 dark:text-gray-50">Resources</span>
            </Link>
            <Link 
              href="/projects" 
              className="relative rounded-lg px-3 inline-block py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900"
            >
              <span className="relative z-10 text-gray-600 dark:text-gray-50">Projects</span>
            </Link>
          </div>

          {/* Dark Mode Toggle */}
          <div className="w-10 sm:w-20 flex justify-end">
            <button
              onClick={toggleDarkMode}
              className="rounded-full p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-800 focus:outline-none"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden mt-4">
            <div className="rounded-lg bg-white/90 px-3 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-900/90 dark:text-zinc-200 dark:ring-white/10 space-y-1">
              <Link
                href="/"
                className="relative block px-3 py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900"
              >
                <span className="relative z-10 text-teal-600">Home</span>
              </Link>
              <Link
                href="/blog"
                className="relative block px-3 py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900"
              >
                <span className="relative z-10 text-gray-600 dark:text-gray-50">Blog</span>
              </Link>
              <Link
                href="/snippets"
                className="relative block px-3 py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900"
              >
                <span className="relative z-10 text-gray-600 dark:text-gray-50">Snippets</span>
              </Link>
              <Link
                href="/resources"
                className="relative block px-3 py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900"
              >
                <span className="relative z-10 text-gray-600 dark:text-gray-50">Resources</span>
              </Link>
              <Link
                href="/projects"
                className="relative block px-3 py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900"
              >
                <span className="relative z-10 text-gray-600 dark:text-gray-50">Projects</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 