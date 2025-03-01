import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

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
  return (
    <ReactMarkdown
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          const language = match ? match[1] : '';
          
          return !inline && language ? (
            <SyntaxHighlighter
              style={dracula}
              language={language}
              PreTag="div"
              {...props}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        }
      }}
    >
      {content}
    </ReactMarkdown>
  );
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