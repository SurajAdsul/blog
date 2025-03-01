import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
});

export function getMarkdownContent(filePath) {
  // Read the markdown file
  const fileContents = fs.readFileSync(filePath, 'utf8');
  
  // Parse the frontmatter and content
  const { data, content } = matter(fileContents);
  
  // Convert markdown to HTML
  const htmlContent = md.render(content);
  
  return {
    frontmatter: data,
    content: htmlContent
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