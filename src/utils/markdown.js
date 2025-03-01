import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export function getMarkdownContent(filePath) {
  // Read the markdown file
  const fileContents = fs.readFileSync(filePath, 'utf8');
  
  // Parse the frontmatter and content
  const { data: frontmatter, content: markdownContent } = matter(fileContents);
  
  // Convert markdown to HTML
  const processedContent = remark()
    .use(html)
    .processSync(markdownContent);
  
  return {
    frontmatter,
    content: processedContent.toString(),
  };
}

export function getAllMarkdownFiles(directory) {
  const files = fs.readdirSync(directory);
  
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const filePath = path.join(directory, file);
      const { data } = matter(fs.readFileSync(filePath, 'utf8'));
      
      return {
        slug: file.replace('.md', ''),
        ...data
      };
    });
} 