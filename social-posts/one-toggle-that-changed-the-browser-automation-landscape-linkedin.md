For two years, connecting an AI agent to your real browser session meant running this every single morning:

chrome --remote-debugging-port=9222 --user-data-dir=/tmp/chrome-debug

Every reboot. Every crash. Fresh session, no cookies, no logins. Developers building daily workflows with Claude Code or Cursor called it "torture" — and they weren't wrong.

Chrome 146 replaced all of that with one toggle.

Navigate to chrome://inspect/#remote-debugging, flip the switch, and your agent connects to your real browser — live tabs, real sessions, actual logins intact. No relaunch. No flag gymnastics. Consent-based, persistent across sessions.

Install this skill: https://github.com/pasky/chrome-cdp-skill

This also signals something bigger: the Chrome extension era of browser automation is winding down. For years, tools hacked around browser limitations by injecting content scripts, abusing extension APIs, or asking users to install sidebars with elevated permissions — paid or DIY. Chrome 146 makes all of that unnecessary. No extension to install, no subscription to unlock basic browser access, no brittle content scripts to maintain. Direct CDP access is now a first-class, consent-based feature built into Chrome itself. The cleaner path won.

What this unlocks in practice:

→ Post to social media across multiple accounts without copy-pasting
→ Extract leads from LinkedIn, directories, or job boards using your real logged-in session
→ Auto-comment or engage on posts as part of an outreach workflow
→ Fill out forms, submit applications, or manage repetitive account tasks
→ Scrape data that sits behind a login wall — no headless browser workarounds
→ Let your coding agent test your app in the browser while you watch
→ UI automation for QA and dev — build, test, and debug in one agent loop without switching tools

All of it. No extension. No subscription. Just your browser and an agent.

This changes the calculus for every browser automation tool out there.

In my latest post, I break down how six frameworks (chrome-cdp-skill — https://github.com/pasky/chrome-cdp-skill/ — Claude in Chrome, Playwright MCP, Browser Use, Stagehand, and Vercel agent-browser) are positioned in this new landscape — which ones benefit most, which ones are unchanged, and what the shift from "automation" to "delegation" actually means for developers.

Read it here 👇
https://surajadsul.me/blog/one-toggle-that-changed-the-browser-automation-landscape

#ChromeDevTools #BrowserAutomation #AIAgents #DeveloperTools #ClaudeCode
