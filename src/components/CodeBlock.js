'use client';

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { ClipboardDocumentListIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';

const CodeBlock = ({ children, className }) => {
  const [copied, setCopied] = useState(false);
  
  // Extract the language from className (format: language-*)
  const match = /language-(\w+)/.exec(className || '');
  const language = match ? match[1] : '';

  const handleCopy = async () => {
    if (typeof children === 'string') {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative group">
      <button
        onClick={handleCopy}
        className="absolute right-2 top-2 invisible group-hover:visible bg-zinc-700/50 hover:bg-zinc-600/50 text-zinc-100 rounded-md p-2 transition-colors z-10"
        aria-label={copied ? 'Copied!' : 'Copy code'}
      >
        {copied ? (
          <ClipboardDocumentCheckIcon className="h-5 w-5" />
        ) : (
          <ClipboardDocumentListIcon className="h-5 w-5" />
        )}
      </button>
      <pre>
        <SyntaxHighlighter
          language={language}
          style={dracula}
          customStyle={{
            margin: 0,
            padding: '1rem',
            background: '#090915',
          }}
        >
          {children}
        </SyntaxHighlighter>
      </pre>
    </div>
  );
};

export default CodeBlock; 