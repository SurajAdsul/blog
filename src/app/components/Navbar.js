'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down and not at the top
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

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
    <div className={`fixed inset-x-0 top-0 z-50 transform transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <nav className="pb-4 pt-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mx-auto lg:max-w-5xl">
            {/* Profile Photo */}
            <div className="flex items-center">
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
            </div>

            {/* Centered Desktop Menu */}
            <div className="hidden sm:block rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-900/90 dark:text-zinc-200 dark:ring-white/10">
              <Link 
                href="/" 
                className="relative rounded-lg px-3 inline-block py-2 text-sm transition-all delay-150 cursor-pointer"
              >
                <span className={`relative z-10 ${pathname === '/' ? 'text-teal-500 dark:text-teal-400' : 'text-gray-600 dark:text-gray-50'}`}>
                  Home
                </span>
                {pathname === '/' && (
                  <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
                )}
              </Link>
              <Link 
                href="/blog" 
                className="relative rounded-lg px-3 inline-block py-2 text-sm transition-all delay-150 cursor-pointer"
              >
                <span className={`relative z-10 ${pathname === '/blog' ? 'text-teal-500 dark:text-teal-400' : 'text-gray-600 dark:text-gray-50'}`}>
                  Blog
                </span>
                {pathname === '/blog' && (
                  <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
                )}
              </Link>
              <Link 
                href="/snippets" 
                className="relative rounded-lg px-3 inline-block py-2 text-sm transition-all delay-150 cursor-pointer"
              >
                <span className={`relative z-10 ${pathname === '/snippets' ? 'text-teal-500 dark:text-teal-400' : 'text-gray-600 dark:text-gray-50'}`}>
                  Snippets
                </span>
                {pathname === '/snippets' && (
                  <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
                )}
              </Link>
              <Link 
                href="/prompts" 
                className="relative rounded-lg px-3 inline-block py-2 text-sm transition-all delay-150 cursor-pointer"
              >
                <span className={`relative z-10 ${pathname === '/prompts' ? 'text-teal-500 dark:text-teal-400' : 'text-gray-600 dark:text-gray-50'}`}>
                  Prompts
                </span>
                {pathname === '/prompts' && (
                  <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
                )}
              </Link>
              <Link 
                href="/resources" 
                className="relative rounded-lg px-3 inline-block py-2 text-sm transition-all delay-150 cursor-pointer"
              >
                <span className={`relative z-10 ${pathname === '/resources' ? 'text-teal-500 dark:text-teal-400' : 'text-gray-600 dark:text-gray-50'}`}>
                  Resources
                </span>
                {pathname === '/resources' && (
                  <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
                )}
              </Link>
              <Link 
                href="/projects" 
                className="relative rounded-lg px-3 inline-block py-2 text-sm transition-all delay-150 cursor-pointer"
              >
                <span className={`relative z-10 ${pathname === '/projects' ? 'text-teal-500 dark:text-teal-400' : 'text-gray-600 dark:text-gray-50'}`}>
                  Projects
                </span>
                {pathname === '/projects' && (
                  <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
                )}
              </Link>
            </div>

            {/* Dark Mode Toggle and Menu Button */}
            <div className="flex items-center gap-4">
              <div className="pointer-events-auto md:hidden">
                <button
                  onClick={toggleMenu}
                  className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20 cursor-pointer"
                  type="button"
                  aria-expanded={isMenuOpen}
                >
                  {isMenuOpen ? 'Close' : 'Menu'}
                  <svg 
                    viewBox="0 0 8 6" 
                    aria-hidden="true" 
                    className={`ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400 transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`}
                  >
                    <path 
                      d="M1.75 1.75 4 4.25l2.25-2.5" 
                      fill="none" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <button
                onClick={toggleDarkMode}
                className="cursor-pointer rounded-full p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-800 focus:outline-none"
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
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden mt-4">
            <div className="rounded-lg bg-white/90 px-3 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-900/90 dark:text-zinc-200 dark:ring-white/10 space-y-1">
              <button
                onClick={toggleMenu}
                className="w-full text-left cursor-pointer"
              >
                <Link
                  href="/"
                  className="relative block px-3 py-2 text-sm transition-all delay-150 cursor-pointer"
                >
                  <span className={`relative z-10 ${pathname === '/' ? 'text-teal-500 dark:text-teal-400' : 'text-gray-600 dark:text-gray-50'}`}>
                    Home
                  </span>
                </Link>
              </button>
              <button
                onClick={toggleMenu}
                className="w-full text-left cursor-pointer"
              >
                <Link
                  href="/blog"
                  className="relative block px-3 py-2 text-sm transition-all delay-150 cursor-pointer"
                >
                  <span className={`relative z-10 ${pathname === '/blog' ? 'text-teal-500 dark:text-teal-400' : 'text-gray-600 dark:text-gray-50'}`}>
                    Blog
                  </span>
                </Link>
              </button>
              <button
                onClick={toggleMenu}
                className="w-full text-left cursor-pointer"
              >
                <Link
                  href="/snippets"
                  className="relative block px-3 py-2 text-sm transition-all delay-150 cursor-pointer"
                >
                  <span className={`relative z-10 ${pathname === '/snippets' ? 'text-teal-500 dark:text-teal-400' : 'text-gray-600 dark:text-gray-50'}`}>
                    Snippets
                  </span>
                </Link>
              </button>
              <button
                onClick={toggleMenu}
                className="w-full text-left cursor-pointer"
              >
                <Link
                  href="/prompts"
                  className="relative block px-3 py-2 text-sm transition-all delay-150 cursor-pointer"
                >
                  <span className={`relative z-10 ${pathname === '/prompts' ? 'text-teal-500 dark:text-teal-400' : 'text-gray-600 dark:text-gray-50'}`}>
                    Prompts
                  </span>
                </Link>
              </button>
              <button
                onClick={toggleMenu}
                className="w-full text-left cursor-pointer"
              >
                <Link
                  href="/resources"
                  className="relative block px-3 py-2 text-sm transition-all delay-150 cursor-pointer"
                >
                  <span className={`relative z-10 ${pathname === '/resources' ? 'text-teal-500 dark:text-teal-400' : 'text-gray-600 dark:text-gray-50'}`}>
                    Resources
                  </span>
                </Link>
              </button>
              <button
                onClick={toggleMenu}
                className="w-full text-left cursor-pointer"
              >
                <Link
                  href="/projects"
                  className="relative block px-3 py-2 text-sm transition-all delay-150 cursor-pointer"
                >
                  <span className={`relative z-10 ${pathname === '/projects' ? 'text-teal-500 dark:text-teal-400' : 'text-gray-600 dark:text-gray-50'}`}>
                    Projects
                  </span>
                </Link>
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
} 