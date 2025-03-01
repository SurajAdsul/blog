import fs from 'fs';
import path from 'path';
import { Feed } from 'feed';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SITE_URL = 'https://surajadsul.me';
const AUTHOR = {
  name: 'Suraj Adsul',
  email: 'surajadsul02@gmail.com',
  link: SITE_URL,
};

function getAllMarkdownFiles(directory) {
  const files = fs.readdirSync(directory);
  
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const filePath = path.join(directory, file);
      const { data, content } = matter(fs.readFileSync(filePath, 'utf8'));
      
      return {
        slug: file.replace('.md', ''),
        content,
        ...data
      };
    });
}

async function generateRssFeed() {
  const feed = new Feed({
    title: "Suraj Adsul's Blog",
    description: 'Articles about software development, technology, and personal experiences',
    id: SITE_URL,
    link: SITE_URL,
    language: 'en',
    image: `${SITE_URL}/images/profile.jpg`,
    favicon: `${SITE_URL}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Suraj Adsul`,
    author: AUTHOR,
  });

  const posts = getAllMarkdownFiles(path.join(process.cwd(), 'content/blog'));
  
  posts.forEach((post) => {
    const url = `${SITE_URL}/blog/${post.slug}`;
    
    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.description || '',
      content: post.content,
      author: [AUTHOR],
      date: new Date(post.date),
    });
  });

  // Write RSS feed files
  const publicDir = path.join(process.cwd(), 'public');
  const rssDir = path.join(publicDir, 'rss');
  
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }
  
  if (!fs.existsSync(rssDir)) {
    fs.mkdirSync(rssDir);
  }

  fs.writeFileSync(path.join(rssDir, 'feed.xml'), feed.rss2());
  fs.writeFileSync(path.join(rssDir, 'atom.xml'), feed.atom1());
  fs.writeFileSync(path.join(rssDir, 'feed.json'), feed.json1());
}

generateRssFeed()
  .then(() => console.log('RSS feeds generated successfully'))
  .catch(console.error); 