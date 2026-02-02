# Exercise 4: MCP Integration 🔌

**Duration**: 25 minutes | **Difficulty**: Advanced

## 🎯 Objectives

By the end of this exercise, you will:
- ✅ Understand Model Context Protocol (MCP)
- ✅ Configure MCP servers in VS Code
- ✅ Connect external tools to Copilot
- ✅ Use MCP tools in agent mode
- ✅ Create custom MCP server integrations

---

## 📚 Background

### What is MCP?

Model Context Protocol (MCP) is an open standard that enables AI applications like GitHub Copilot to securely connect with external tools and data sources[web:72]. It provides a standardized way for Copilot to:

- ✅ Access external APIs
- ✅ Query databases  
- ✅ Read documentation sites
- ✅ Integrate with tools (GitHub, Jira, Notion, etc.)
- ✅ Execute custom scripts
- ✅ Interact with web browsers (Playwright)

### Why MCP Matters

**Before MCP**:
- Limited to code context
- Manual data gathering
- No external tool access
- Repetitive instructions

**With MCP**:
- Rich external context
- Automated data retrieval  
- Direct tool manipulation
- Integrated workflows

### MCP Architecture

```
┌───────────────────────┐
│  GitHub Copilot Chat  │
│   (MCP Client)        │
└─────────┬─────────────┘
         │
         │ MCP Protocol
         │
    ┌────┼─────────────────┐
    │    │                  │
┌───┴────┴────────────────┴───┐
│ MCP Servers              │
├─────────────────────────┤
│ - GitHub MCP Server      │
│ - Playwright MCP Server  │
│ - Memory MCP Server      │
│ - Filesystem MCP Server  │
│ - Custom MCP Servers     │
└─────────────────────────┘
         │
         │ Tool APIs
         │
┌────────┼─────────────────┐
│  External Services       │
├─────────────────────────┤
│ - GitHub API            │
│ - Web Browsers          │
│ - Databases             │
│ - Your APIs             │
└─────────────────────────┘
```

---

## 🛠️ Part 1: Setup MCP in VS Code

### Step 1: Prerequisites

1. **Install VS Code Insiders** (required for MCP support):
   - Download from: https://code.visualstudio.com/insiders/
   - Or use regular VS Code if MCP support has been released

2. **Install Node.js** (v18 or higher):
   ```bash
   node --version  # Should be v18+
   ```

3. **Update GitHub Copilot Extensions**:
   - GitHub Copilot
   - GitHub Copilot Chat

### Step 2: Enable MCP in VS Code

1. Open VS Code Settings (`Ctrl+,` / `Cmd+,`)

2. Search for: `github.copilot.chat.mcp`

3. Enable these settings:
   - `GitHub Copilot Chat: Enable MCP`
   - `GitHub Copilot Chat: MCP Servers`

4. Restart VS Code

### Step 3: Configure MCP Settings File

1. Create MCP configuration directory:
   ```bash
   # Windows
   mkdir %APPDATA%\Code\User\globalStorage\github.copilot-chat
   
   # macOS
   mkdir -p ~/Library/Application\ Support/Code/User/globalStorage/github.copilot-chat
   
   # Linux
   mkdir -p ~/.config/Code/User/globalStorage/github.copilot-chat
   ```

2. Create `mcp-settings.json` in the directory:
   ```json
   {
     "servers": {}
   }
   ```

### Step 4: Verify Setup

1. Open Copilot Chat (`Ctrl+I` / `Cmd+I`)
2. Enable **Agent Mode** (toggle at bottom of chat)
3. Look for MCP indicator in the chat interface

---

## 🛠️ Part 2: Set Up GitHub MCP Server

### What is GitHub MCP Server?

The official GitHub MCP server allows Copilot to:
- Read repository files
- Search code
- List issues and pull requests
- Create and update issues
- Manage branches
- View commit history

### Step 1: Install GitHub MCP Server

```bash
npm install -g @modelcontextprotocol/server-github
```

### Step 2: Get GitHub Personal Access Token

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)

2. Click "Generate new token (classic)"

3. Select scopes:
   - `repo` (Full control of private repositories)
   - `read:org` (Read org and team membership)
   - `read:user` (Read user profile data)

4. Copy the generated token

### Step 3: Configure GitHub MCP Server

Update your `mcp-settings.json`:

```json
{
  "servers": {
    "github": {
      "url": "https://api.githubcopilot.com/mcp/",
      "requestInit": {
        "headers": {
          "Authorization": "Bearer YOUR_GITHUB_PAT_HERE"
        }
      }
    }
  }
}
```

**Security Note**: Store your token securely. Consider using environment variables:

```json
{
  "servers": {
    "github": {
      "url": "https://api.githubcopilot.com/mcp/",
      "requestInit": {
        "headers": {
          "Authorization": "Bearer ${GITHUB_TOKEN}"
        }
      }
    }
  }
}
```

### Step 4: Test GitHub MCP Server

1. Restart VS Code
2. Open Copilot Chat in Agent Mode
3. Try these commands:

```
List all open issues in this repository
```

```
Show me the most recent pull requests
```

```
Find all files containing "authentication" in the codebase
```

```
Create a new issue titled "Add user authentication" with description "Implement OAuth 2.0 login"
```

---

## 🛠️ Part 3: Set Up Playwright MCP Server

### What is Playwright MCP Server?

Playwright MCP server enables Copilot to:
- Navigate web pages
- Click elements
- Fill forms
- Take screenshots
- Run automated tests
- Scrape web content

### Step 1: Install Playwright MCP Server

```bash
npm install -g @modelcontextprotocol/server-playwright
```

### Step 2: Configure Playwright Server

Update your `mcp-settings.json`:

```json
{
  "servers": {
    "github": {
      "url": "https://api.githubcopilot.com/mcp/",
      "requestInit": {
        "headers": {
          "Authorization": "Bearer ${GITHUB_TOKEN}"
        }
      }
    },
    "playwright": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-playwright"
      ]
    }
  }
}
```

### Step 3: Test Playwright Integration

1. Restart VS Code
2. Open Copilot Chat in Agent Mode
3. Try these commands:

```
Navigate to https://github.com and take a screenshot
```

```
Go to https://example.com, find the heading text, and extract it
```

```
Create a Playwright test that:
1. Navigates to our login page
2. Fills in email and password
3. Clicks submit button
4. Verifies successful login
```

---

## 🛠️ Part 4: Additional MCP Servers

### Memory MCP Server

Stores context across conversations.

**Install**:
```bash
npm install -g @modelcontextprotocol/server-memory
```

**Configure**:
```json
{
  "servers": {
    "memory": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-memory"
      ]
    }
  }
}
```

**Usage**:
```
Remember that our API endpoint is https://api.example.com/v1
```

Later:
```
What API endpoint should I use?
```

### Filesystem MCP Server

Provides enhanced file system operations.

**Install**:
```bash
npm install -g @modelcontextprotocol/server-filesystem
```

**Configure**:
```json
{
  "servers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/path/to/allowed/directory"
      ]
    }
  }
}
```

### Fetch MCP Server

Fetches and processes web content.

**Install**:
```bash
npm install -g @modelcontextprotocol/server-fetch
```

**Configure**:
```json
{
  "servers": {
    "fetch": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-fetch"
      ]
    }
  }
}
```

**Usage**:
```
Fetch the content from https://docs.example.com/api and summarize the authentication section
```

---

## 🛠️ Part 5: Complete MCP Configuration Example

Here's a full `mcp-settings.json` with multiple servers:

```json
{
  "servers": {
    "github": {
      "url": "https://api.githubcopilot.com/mcp/",
      "requestInit": {
        "headers": {
          "Authorization": "Bearer ${GITHUB_TOKEN}"
        }
      }
    },
    "playwright": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-playwright"
      ]
    },
    "memory": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-memory"
      ]
    },
    "fetch": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-fetch"
      ]
    },
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "${workspaceFolder}"
      ]
    }
  }
}
```

---

## 🧪 Part 6: Practical MCP Workflows

### Workflow 1: Automated Issue Creation from Web Research

**Scenario**: Research a technology and create GitHub issues for implementation.

```
Use the fetch MCP to research "React Server Components best practices" 
from https://react.dev/blog, then create 3 GitHub issues in this 
repository with implementation tasks based on the findings.
```

**What happens**:
1. Fetch MCP retrieves documentation
2. Copilot analyzes content
3. GitHub MCP creates issues
4. You get URLs to created issues

### Workflow 2: Automated Testing with Browser

**Scenario**: Test your web application automatically.

```
Use Playwright to:
1. Navigate to http://localhost:3000
2. Test the login flow
3. Take screenshots at each step
4. Create a test report with the results
```

### Workflow 3: Code Review with GitHub Context

**Scenario**: Review a pull request with full context.

```
Use GitHub MCP to:
1. Fetch PR #42 details
2. Analyze the changed files
3. Check if tests were added
4. Add review comments on lines that need improvement
5. Suggest better patterns based on our custom instructions
```

### Workflow 4: Documentation Generation

**Scenario**: Generate docs from code and external resources.

```
Use fetch MCP to get TypeScript best practices from 
https://typescript.dev, then analyze our UserService.ts and 
generate comprehensive documentation following those practices.
```

---

## 💡 Using MCP with Custom Agents

You can configure custom agents to use specific MCP servers.

Create `.github/agents/github-specialist.agent.md`:

```markdown
---
name: github-specialist
description: Expert at managing GitHub repositories using GitHub MCP
tools:
  - read
  - github.list_issues
  - github.create_issue
  - github.search_code
  - github.list_pull_requests
autoInvoke: false
mcp-servers:
  - github
---

# GitHub Specialist Agent

You are an expert at managing GitHub repositories.

When asked to manage issues, pull requests, or repository content:
1. Use GitHub MCP tools to access repository data
2. Analyze the information thoroughly
3. Provide actionable recommendations
4. Create or update issues/PRs as needed

Always verify changes before committing.
```

**Usage**:
```
@github-specialist Review all open issues and prioritize them by urgency
```

---

## 🐛 Troubleshooting

### Issue: MCP Server Not Found

**Solution**:
1. Verify npm global installation:
   ```bash
   npm list -g @modelcontextprotocol/server-github
   ```

2. Check npx is available:
   ```bash
   npx --version
   ```

3. Try full path in config:
   ```json
   {
     "command": "/usr/local/bin/npx",
     "args": [...]
   }
   ```

### Issue: Authentication Failed

**Solution**:
1. Verify token has correct scopes
2. Check token hasn't expired
3. Ensure no typos in configuration
4. Test token with curl:
   ```bash
   curl -H "Authorization: Bearer YOUR_TOKEN" https://api.github.com/user
   ```

### Issue: Agent Mode Not Available

**Solution**:
1. Ensure you're using VS Code Insiders or latest version
2. Update Copilot extensions
3. Check your Copilot subscription tier
4. Restart VS Code

### Issue: MCP Commands Timeout

**Solution**:
1. Check network connectivity
2. Verify external service is accessible
3. Increase timeout in settings
4. Check server logs for errors

---

## 🎯 Challenge Tasks

### Challenge 1: Create Custom MCP Integration

Create an MCP server that integrates with your team's tools:
- Jira/Linear for issue tracking
- Slack for notifications
- Your company's internal APIs

### Challenge 2: Automated Workflow

Create a complete workflow:
1. Fetch requirements from external doc
2. Generate code based on requirements
3. Create tests automatically
4. Open PR with GitHub MCP
5. Request review from team

### Challenge 3: Multi-Tool Agent

Create an agent that uses multiple MCP servers:
- Playwright for testing
- GitHub for repository management
- Fetch for documentation research
- Memory for maintaining context

---

## 📊 Best Practices

### Security

1. **Token Management**:
   - Use environment variables
   - Rotate tokens regularly
   - Use minimal required scopes
   - Never commit tokens to git

2. **Access Control**:
   - Limit filesystem server paths
   - Restrict Playwright to specific domains
   - Use read-only tokens when possible

### Performance

1. **Minimize MCP Calls**:
   - Batch operations when possible
   - Cache results in Memory server
   - Use specific queries vs broad searches

2. **Error Handling**:
   - Verify server availability
   - Handle timeouts gracefully
   - Provide fallback behaviors

### Maintenance

1. **Keep Servers Updated**:
   ```bash
   npm update -g @modelcontextprotocol/*
   ```

2. **Monitor Usage**:
   - Check rate limits
   - Review server logs
   - Track API quotas

3. **Documentation**:
   - Document your MCP configuration
   - Share setup with team
   - Maintain troubleshooting guide

---

## 📚 Additional Resources

- [MCP Documentation](https://docs.github.com/copilot/customizing-copilot/using-model-context-protocol)[web:36]
- [MCP Video Tutorial](https://www.youtube.com/watch?v=Jdv-BqPy604)[web:72]
- [MCP Setup Guide](https://dev.to/pwd9000/supercharge-vscode-github-copilot-using-model-context-protocol-mcp-easy-setup-guide-371e)[web:76]
- [Azure MCP Integration](https://learn.microsoft.com/en-us/azure/app-service/tutorial-ai-model-context-protocol-server-python)[web:74]

---

## ✅ Completion Checklist

- [ ] Installed VS Code with MCP support
- [ ] Created mcp-settings.json configuration
- [ ] Set up GitHub MCP server with PAT
- [ ] Configured Playwright MCP server
- [ ] Tested at least 3 different MCP commands
- [ ] Created custom agent using MCP servers
- [ ] Built a multi-step workflow with MCP
- [ ] Documented setup for team

---

**Congratulations!** 🎉 You've successfully integrated MCP servers with GitHub Copilot.

**Next**: Move on to [Exercise 5: Real-World Project](./05-weather-app-refactor.md) to apply everything you've learned.