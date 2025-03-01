import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://surajadsul.me'),
  title: {
    default: "Suraj Adsul - Full Stack Developer",
    template: "%s | Suraj Adsul"
  },
  description: "Full Stack Developer passionate about building web applications and exploring new technologies. Blog about software development, engineering practices, and tech insights.",
  keywords: ["Full Stack Developer", "Software Engineering", "Laravel", "Cursor Editor", "AI", "Web Development", "JavaScript", "React", "Node.js", "Tech Blog"],
  authors: [{ name: "Suraj Adsul", url: "https://surajadsul.me" }],
  creator: "Suraj Adsul",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://surajadsul.me',
    siteName: 'Suraj Adsul',
    title: 'Suraj Adsul - Full Stack Developer',
    description: 'Full Stack Developer passionate about building web applications and exploring new technologies. Blog about software development, engineering practices, and tech insights.',
    images: [
      {
        url: '/images/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Suraj Adsul',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suraj Adsul - Full Stack Developer',
    description: 'Full Stack Developer passionate about building web applications and exploring new technologies.',
    creator: '@surajadsul',
    images: ['/images/profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (localStorage.theme === 'light') {
                document.documentElement.classList.remove('dark');
              }
            `,
          }}
        />
      </head>
      <body
        className="antialiased min-h-screen bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 transition-colors duration-300 font-sans"
      >
        <Navbar />
        <div className="pt-32">
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
