import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ClientMarkdownContent from '@/components/ClientMarkdownContent';

export function getMarkdownContent(filePath) {
  // Read the markdown file
  const fileContents = fs.readFileSync(filePath, 'utf8');
  
  // Parse the frontmatter and content
  const { data: frontmatter, content: markdownContent } = matter(fileContents);
  
  return {
    frontmatter,
    content: markdownContent,
  };
}

// Component for rendering markdown with syntax highlighting
export function MarkdownContent({ content }) {
  return <ClientMarkdownContent content={content} />;
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