---
title: Optimize Laravel Queries with `when()`
description: Improve query readability using conditional logic.
date: March 20, 2024
icon: laravel
---

```php
$users = User::query()
    ->when(request('role'), fn($query, $role) => $query->where('role', $role))
    ->when(request('active'), fn($query, $active) => $query->where('active', $active))
    ->get();
```

This approach:  
- Prevents cluttered `if` statements  
- Keeps queries flexible and dynamic  
- Improves readability for complex queries  
