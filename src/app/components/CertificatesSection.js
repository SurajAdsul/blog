export default function CertificatesSection() {
  const certificates = [
    {
      name: "Master RAG: Retrieval-Augmented Generation Systems",
      issuer: "Udemy",
      date: "2025",
      link: "https://tech9.udemy.com/certificate/UC-7cea54a6-91f9-41d8-82d5-67d0ce2c2ff1",
      logo: "/certificates/udemy_logo.jpeg",
    },
    {
      name: "Python for Absolute Beginners",
      issuer: "Udemy",
      date: "2025",
      link: "https://tech9.udemy.com/certificate/UC-990bcba1-07b5-4d49-ab79-7e38d227163e",
      logo: "/certificates/udemy_logo.jpeg",
    },
    {
      name: "Go Design Patterns",
      issuer: "LinkedIn Learning",
      date: "2024",
      link: "https://www.linkedin.com/learning/certificates/a967d65c2ee30b5754ca82c7341cebb28f5114ab6de4f7594f2cabb7d9690c4d",
      logo: "/certificates/linkedin_logo.jpeg",
    },
    {
      name: "Learning Go",
      issuer: "LinkedIn Learning",
      date: "2024",
      link: "https://www.linkedin.com/learning/certificates/588ede2bbccf54a89a67d9e6e44416385a2e171b4fb5298bbdaafae8c61ac714",
      logo: "/certificates/linkedin_logo.jpeg",
    },
    {
      name: "GraphQL with React: The Complete Developers Guide",
      issuer: "Udemy",
      date: "2023",
      link: "https://www.udemy.com/certificate/UC-81cc7733-9adc-4450-a8bd-e7572092ce20",
      logo: "/certificates/udemy_logo.jpeg",
    },
    {
      name: "Go: The Complete Developer's Guide (Golang)",
      issuer: "Udemy",
      date: "2021",
      link: "https://www.udemy.com/certificate/UC-6bc15a0f-29ce-4788-92b2-00514a1e9e86",
      logo: "/certificates/udemy_logo.jpeg",
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 mt-6">
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
            d="M6.75 8.25h10.5a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5v-9a2.25 2.25 0 0 1 2.25-2.25z"
            className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
          />
          <path
            d="M8 6.25v-2a2.25 2.25 0 0 1 2.25-2.25h3.5A2.25 2.25 0 0 1 16 4.25v2"
            className="stroke-zinc-400 dark:stroke-zinc-500"
          />
        </svg>
        <span className="ml-3">Certificates</span>
      </h2>
      <div className="mt-6 max-h-[180px] overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-700 scrollbar-track-transparent">
        {certificates.map((cert, index) => (
          <li key={index} className="list-none">
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 group"
            >
              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                {cert.logo ? (
                  <img src={cert.logo} alt="" className="h-7 w-7" />
                ) : (
                  <div className="h-7 w-7 rounded-full bg-zinc-100 dark:bg-zinc-700" />
                )}
              </div>
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">Certificate</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-teal-500 dark:group-hover:text-teal-400">
                  {cert.name}
                </dd>
                <dt className="sr-only">Issuer</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                  {cert.issuer}
                </dd>
                <dt className="sr-only">Date</dt>
                <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
                  <time dateTime={cert.date}>{cert.date}</time>
                </dd>
              </dl>
            </a>
          </li>
        ))}
      </div>
    </div>
  );
}
