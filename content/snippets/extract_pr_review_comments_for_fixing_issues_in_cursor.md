---
title: "GitHub CLI: Extract PR Review Comments for Fixing Issues in Cursor"  
description: Fetch and format PR review comments using `gh api` and `jq` to automate fixes in Cursor.  
date: '2025-03-22'
icon: github  
---

```bash
gh api /repos/<organisation>/<repo-name>/pulls/627/comments | jq '.[] | {reviewer: .user.login, comment: .body, file: .path, line: .line}'
```

## Use Case:  
This snippet helps extract PR review comments and their associated files and line numbers. It can be used in **Cursor** (AI-powered code editor) to quickly identify issues and apply suggested fixes.


## Explanation:
1. **`gh api /repos/<organisation>/<repo-name>/pulls/627/comments`** – Fetches all comments on PR **#627** from the specified repository.  
2. **Pipes to `jq`** – Extracts relevant fields for processing:  
   - **`reviewer`** → Username of the commenter.  
   - **`comment`** → The review comment text (suggested fix).  
   - **`file`** → The file where the issue exists.  
   - **`line`** → The exact line number of the issue.  

Example output:
```json
{
  "reviewer": "octocat",
  "comment": "Consider refactoring this function.",
  "file": "src/main.go",
  "line": 42
}
```

#### How to Use in Cursor:
1. Run the command to extract PR comments.  
2. Use Cursor AI to apply suggested fixes to the identified files.  
3. Verify changes and commit the fixes efficiently.

Automate code review fixes and speed up your workflow! 🚀