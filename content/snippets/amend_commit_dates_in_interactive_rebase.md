---
title: "Git: Amend Commit Dates in Interactive Rebase"   
description: Amend Commit Dates in Interactive Rebase.  
date: March 14, 2024  
icon: git  
---



```bash
git rebase -i HEAD~8  
git commit --amend --no-edit --date="$(date)"  
git rebase --continue
```

One liner:
```bash
git rebase -i HEAD~8 && GIT_COMMITTER_DATE="$(date)" git commit --amend --no-edit && git rebase --continue
```

#### Explanation:
1. **`git rebase -i HEAD~8`** – Start an interactive rebase for the last 8 commits.  
2. **`git commit --amend --no-edit --date="$(date)"`** – Update the commit date to the current time without modifying the commit message.  
3. **`git rebase --continue`** – Continue the rebase process after amending the commit.

Useful for keeping commit timestamps updated while rebasing. 🚀
