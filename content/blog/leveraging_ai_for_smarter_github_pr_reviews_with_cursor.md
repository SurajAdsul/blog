---
title: "Leveraging AI for Smarter GitHub PR Reviews with Cursor"
date: '2025-03-22'
description: "Code reviews are a crucial part of the software development process, but they can be time-consuming and sometimes inconsistent. Today, I'll show you how to use Cursor, an AI-powered IDE, to create automated yet intelligent PR reviews on GitHub that maintain high standards while saving valuable developer time"
tags: ['cursor', 'ai', 'Github', 'PR', 'git', 'development']
---

## Introduction

Code reviews are a crucial part of the software development process, but they can be time-consuming and sometimes inconsistent. In this post, I'll show you how to use Cursor, an AI-powered IDE, to create automated yet intelligent PR reviews on GitHub. This approach ensures high standards while saving valuable developer time.

## Setting Up the Review System

### Prerequisites
- Cursor IDE installed
- GitHub CLI configured
- Python installed
- GitHub token set up

## Adding a Prompt in Cursor Rules

Create a file named `github-pr-review.mdc` in the `rules` directory and add the following prompt:

Here is the full Gist: [github-pr-review.mdc](https://gist.github.com/SurajAdsul/66a594b951a841c3ede07e2e6715c418#file-github-pr-review-mdc)

Additionally, create a `tools` directory and add the following two scripts so that Cursor can utilize them. Adjust the paths as needed for your project:
- [fetch_pr_diff.py](https://gist.github.com/SurajAdsul/66a594b951a841c3ede07e2e6715c418#file-fetch_pr_diff-py)
- [gh-pr-comment.sh](https://gist.github.com/SurajAdsul/66a594b951a841c3ede07e2e6715c418#file-gh-pr-comment-sh)

## Performing Code Reviews

In Cursor’s agent mode, add the following prompt along with the PR ID you want to review. Be sure to select the Claude models for code reviews, as they perform best for coding-related tasks.

![Cursor PR Review](</blog/Screenshot 2025-03-22 at 7.38.09 PM.png>)

Cursor will analyze the diff and generate a series of commands to add comments to the GitHub PR. If you are using YOLO mode, Cursor will automatically post all the review comments. Otherwise, it will prompt you with commands that you need to run manually to add the review comments. Here's an example of how it might look:

![Cursor Review Commands](</blog/Screenshot 2025-03-22 at 7.44.38 PM.png>)

You can review the PR and remove any unnecessary comments as needed.

## The Review Framework

The system is designed to act as an experienced senior software engineer reviewing Pull Requests, focusing on:
- Code quality improvements
- Potential bug detection
- Security issue identification
- Actionable code suggestions

## How It Works

### 1. PR Diff Structure

The system processes PR diffs in a structured format:
```
## File: 'src/example.py'

@@ ... @@ def function():
__new hunk__
11  unchanged line
12 +new code added
13  another unchanged line
__old hunk__
 unchanged line
-removed code
 unchanged line
```

Key components:
- `__new hunk__`: Shows the updated code section
- `__old hunk__`: Displays removed code
- Line numbers for easy reference
- Prefix symbols:
  - `+`: New code added
  - `-`: Code removed
  - ` `: Unchanged code

### 2. Review Focus

The review system specifically targets:
- New code additions (lines with `+` prefix)
- Actionable improvements
- Concrete issues rather than style preferences

## Best Practices

### What the System Reviews:
- ✅ Code quality issues
- ✅ Potential bugs
- ✅ Security vulnerabilities
- ✅ Meaningful code improvements

### What the System Ignores:
- ❌ Code formatting
- ❌ Style preferences
- ❌ Documentation requests
- ❌ Implementation suggestions
- ❌ Duplicate comments

## Implementation

### Using the Tools

1. Fetch PR diff:
```bash
cd your-repo && python3 ../tools/fetch_pr_diff.py
```

2. Add review comments:
```bash
cd your-repo && ../tools/gh-pr-comment.sh pr review <PR_NUMBER> --comment -b "review comment" --path <FILE_PATH> --line <LINE_NUMBER>
```

## Key Benefits

1. **Consistency**: Ensures a standardized review approach
2. **Focus**: Addresses only meaningful code changes
3. **Efficiency**: Automates the review process intelligently
4. **Context-Aware**: Reviews code in its relevant context without assumptions

## Best Practices for Review Integration

1. **Review Scope**: The system only reviews code within the PR diff.
2. **Actionable Feedback**: All comments are specific and implementable.
3. **No Assumptions**: Reviews are based solely on visible code.
4. **Unique Comments**: Avoids duplicate or redundant feedback.

## Caution
This system is relatively new and still evolving. You may need to adjust paths based on your project setup and requirements. Use Claude models in Cursor whenever performing code reviews for the best results. Depending on the LLM’s context, its performance may vary—sometimes excelling, and other times being less effective.

## Conclusion

By integrating this AI-powered PR review system into your development workflow with Cursor, you can maintain high code quality standards while significantly reducing the time spent on routine code reviews. The system focuses on actionable, meaningful feedback, ensuring developers receive valuable input without getting bogged down by stylistic or trivial concerns. 

While this automated system is powerful, it works best as a complement to human review rather than a replacement. Use it to catch common issues and maintain consistency while allowing human reviewers to focus on higher-level architectural and design considerations.

## Next
[Check how to fix Gihub PR review comments in Cursor](https://www.surajadsul.me/snippets/extract_pr_review_comments_for_fixing_issues_in_cursor)




