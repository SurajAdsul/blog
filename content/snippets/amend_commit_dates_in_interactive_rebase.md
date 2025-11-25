---
title: "Git: Amend Commit Dates in Interactive Rebase"   
description: Amend Commit Dates in Interactive Rebase.  
date: '2025-03-14'
icon: git  
---



```bash
git rebase -i HEAD~8  
git commit --amend --no-edit --date="$(date)"  
git rebase --continue
```

One liner:
```bash
git rebase -i HEAD~14 --exec 'git commit --amend --no-edit --date="$(date)"'
```

#### Explanation:
1. **`git rebase -i HEAD~8`** – Start an interactive rebase for the last 8 commits.  
2. **`git commit --amend --no-edit --date="$(date)"`** – Update the commit date to the current time without modifying the commit message.  
3. **`git rebase --continue`** – Continue the rebase process after amending the commit.

Useful for keeping commit timestamps updated while rebasing. 🚀
