---
title: Simplify Model Updates with `tap()` in Laravel  
description: Use `tap()` to modify and return a model instance in a single line.  
date: March 1, 2024  
icon: laravel  
---

```php
$user = tap(User::find($id))->update(['active' => true]);
```

This approach:  
- Retrieves a model instance  
- Updates the instance while keeping it accessible  
- Makes the code cleaner and more readable  

**Example Use Case:**  
```php
$user = tap(User::where('email', 'test@example.com')->first())
    ->update(['last_login' => now()]);

Log::info("User {$user->name} logged in at {$user->last_login}");
```

