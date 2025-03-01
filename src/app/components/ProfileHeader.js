import Image from 'next/image';

export default function ProfileHeader() {
  return (
    <div className=" mx-auto lg:max-w-5xl flex flex-col md:flex-row justify-between items-start md:space-x-14 w-full mb-10">
      <div className="flex md:w-3/4 flex-col mt-6">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-2 text-black dark:text-white">
       Suraj Adsul
        </h1>
        {/* <div className="relative leading-7 items-center flex-wrap text-zinc-700 dark:text-zinc-400 mb-5">
          Building{' '}
          <a
            className="inline-block px-2 py-0 font-bold bg-gray-100 dark:bg-zinc-700 dark:text-white mx-1"
            href="https://project1.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Project One
          </a>
          ,
          <a
            className="inline-block px-2 py-0 font-bold bg-gray-100 dark:bg-zinc-700 dark:text-white mx-1"
            href="https://project2.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Project Two
          </a>
          and other
          <span className="font-bold cursor-pointer text-zinc-800 dark:text-zinc-200">
            {' '}cool things
          </span>
        </div> */}
        <p className="text-zinc-600 dark:text-zinc-500">
        Full Stack Developer passionate about building web applications and exploring new technologies. 
        I love solving complex problems and sharing insights from my journey.
        Find me on{' '}
          <a
            href="https://twitter.com/surajadsul"
            className="font-bold group dark:text-zinc-400 font-inter relative inline-flex overflow-hidden"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="relative">twitter</span>
          </a>
          {' '}for updates, tech discussions, and more!
        </p>
      </div>

      <div className="relative flex-shrink-1 p-4 md:p-4 md:order-last order-first">
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="block z-[5] overflow-hidden rounded shadow-xl ring-1 ring-slate-900/5 relative bg-white h-20 w-20"
        >
          <div className="relative w-full h-full">
            <Image
              src="/profile.jpeg"
              alt="Profile photo"
              fill
              className="transition duration-500 blur-0 scale-100 bg-gray-100 object-cover"
              sizes="(max-width: 768px) 100vw, 80px"
            />
          </div>
        </a>
        
        {/* Decorative elements */}
        <div className="z-0">
          <div className="absolute left-0 -right-12 top-0 h-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
          <div className="absolute -top-8 bottom-0 left-12 w-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
          <div className="absolute left-0 -right-12 bottom-14 h-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
          <div className="absolute right-0 -top-2 -bottom-8 w-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
          <div className="absolute bottom-full right-10 -mb-px flex h-8 items-end overflow-hidden">
            <div className="flex -mb-px h-[2px] w-40 -scale-x-100">
              <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
              <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 