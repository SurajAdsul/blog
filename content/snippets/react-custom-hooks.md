---
title: Essential React Custom Hooks
description: A collection of useful custom hooks for React applications.
date: March 18, 2024
icon: hook
---

Custom hooks are a powerful way to reuse stateful logic in React components. Here are some essential custom hooks that you can use in your projects.

useLocalStorage Hook:
```javascript
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') return initialValue;
    
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = value => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}
```

Usage:
```javascript
function App() {
  const [name, setName] = useLocalStorage('name', 'Bob');
  return (
    <input
      type="text"
      value={name}
      onChange={e => setName(e.target.value)}
    />
  );
}
```

This hook:
- Syncs state with localStorage
- Handles JSON serialization/deserialization
- Works with SSR
- Includes error handling 