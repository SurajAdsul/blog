import fs from 'fs';
import path from 'path';

const promptsDirectory = path.join(process.cwd(), 'content/prompts');
const categoriesDirectory = path.join(promptsDirectory, 'categories');

export function getAllPrompts() {
  const fileNames = fs.readdirSync(promptsDirectory);
  const allPrompts = fileNames
    .filter(fileName => fileName.endsWith('.txt'))
    .map(fileName => {
      const fullPath = path.join(promptsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      // Parse frontmatter
      const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
      const matches = fileContents.match(frontmatterRegex);
      
      if (!matches) return null;
      
      const [, frontmatter, content] = matches;
      const metadata = {};
      
      frontmatter.split('\n').forEach(line => {
        const [key, ...valueParts] = line.split(':');
        if (key && valueParts.length) {
          metadata[key.trim()] = valueParts.join(':').trim().replace(/^"(.*)"$/, '$1');
        }
      });

      return {
        slug: fileName.replace(/\.txt$/, ''),
        content: content.trim(),
        ...metadata
      };
    })
    .filter(Boolean);

  return allPrompts;
}

export function getPromptsByCategory(category) {
  return getAllPrompts().filter(prompt => prompt.category === category);
}

export function getPromptBySlug(slug) {
  const fullPath = path.join(promptsDirectory, `${slug}.txt`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const matches = fileContents.match(frontmatterRegex);
  
  if (!matches) return null;
  
  const [, frontmatter, content] = matches;
  const metadata = {};
  
  frontmatter.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length) {
      metadata[key.trim()] = valueParts.join(':').trim().replace(/^"(.*)"$/, '$1');
    }
  });

  return {
    slug,
    content: content.trim(),
    ...metadata
  };
}

export function getAllCategories() {
  const categories = fs.readdirSync(categoriesDirectory);
  return categories.map(category => {
    const fullPath = path.join(categoriesDirectory, category, '_meta.json');
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const metadata = JSON.parse(fileContents);
    
    return {
      slug: category,
      ...metadata
    };
  }).sort((a, b) => (a.order || 0) - (b.order || 0));
} 