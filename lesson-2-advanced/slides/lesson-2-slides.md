# Lesson 2: Advanced GitHub Copilot
## Agent Mode, Custom Instructions, Custom Agents & MCP Integration

---

# Welcome! 👋

## Today's Journey

- ⏱️ **Duration**: ~1.5 hours
- 🎯 **Level**: Advanced
- 🛠️ **Hands-on**: 5 exercises
- 🚀 **Goal**: Become a Copilot power user

---

# What You'll Learn

## Core Skills

1. 🤖 **Agent Mode** - Autonomous multi-file coding
2. 📝 **Custom Instructions** - Project-specific guidance  
3. 🧑‍💻 **Custom Agents** - Specialized AI teammates
4. 🔌 **MCP Integration** - External tool connections
5. ⚙️ **Edits Mode** - Precise code changes

---

# Prerequisites Check ✅

## Do you have?

- ✅ Completed Lesson 1 or equivalent experience
- ✅ GitHub Copilot Pro/Business/Enterprise
- ✅ VS Code with latest Copilot extensions
- ✅ Node.js installed (v18+)
- ✅ Basic git and CLI knowledge

**Not ready?** Let's get you set up!

---

# The Evolution of Copilot

## From Assistant to Agent

```
2021: Copilot Launch
  └─ Autocomplete suggestions

2023: Copilot Chat  
  └─ Conversational coding

2024: Agent Mode
  └─ Autonomous task execution

2025-2026: Advanced Features
  ├─ Custom instructions
  ├─ Custom agents
  └─ MCP integration
```

---

# Part 1: Understanding Agent Mode

---

# What is Agent Mode? 🤖

## Traditional Copilot vs Agent Mode

| Traditional Copilot | Agent Mode |
|---------------------|------------|
| Single file focus | Multi-file operations |
| Manual iterations | Autonomous execution |
| Code suggestions | Complete task planning |
| Immediate responses | Background processing |
| No file operations | Create/edit/delete files |

---

# Agent Mode Capabilities

## What Can Agents Do?

1. **Plan** complex implementations
2. **Create** multiple files at once
3. **Edit** across the codebase
4. **Search** for patterns and dependencies
5. **Execute** terminal commands
6. **Test** and iterate automatically
7. **Fix** errors autonomously
8. **Refactor** entire modules

---

# Agent Mode Workflow

## The 6-Step Process

```
1. 💬 You Describe → Natural language task description
           ↓
2. 🧠 Agent Plans → Creates implementation steps
           ↓
3. 👀 You Review → Approve or modify the plan
           ↓
4. ⚙️ Agent Executes → Makes changes autonomously
           ↓
5. 🔄 Agent Iterates → Fixes errors if they occur
           ↓
6. ✅ You Accept → Review and merge changes
```

---

# When to Use Agent Mode

## Perfect For

- ✅ Adding new features across multiple files
- ✅ Refactoring large codebases
- ✅ Implementing design patterns
- ✅ Setting up new project structures
- ✅ Writing comprehensive test suites
- ✅ Documentation generation

## Not Ideal For

- ❌ Quick single-line edits
- ❌ Simple syntax fixes
- ❌ Learning/exploration

---

# Agent Mode Demo

## Live Demonstration

**Task**: "Add user authentication with JWT tokens"

Watch how the agent:
1. Plans the implementation
2. Creates multiple files
3. Updates existing code
4. Adds tests
5. Handles errors

---

# Part 2: Custom Instructions

---

# Why Custom Instructions?

## The Problem

Without instructions:
- ❌ Inconsistent code style
- ❌ Wrong libraries used
- ❌ Missing error handling
- ❌ Repeated explanations
- ❌ Team pattern violations

With instructions:
- ✅ Consistent patterns
- ✅ Correct dependencies  
- ✅ Automatic best practices
- ✅ One-time configuration
- ✅ Team alignment

---

# Types of Custom Instructions

## Three Levels

### 1. Repository-Wide
```
.github/copilot-instructions.md
```
Applies to ALL files in the repo

### 2. Path-Specific  
```
.github/instructions/*.instructions.md
```
Applies to specific file paths

### 3. User/Workspace
Personal instructions in your IDE

---

# Anatomy of Good Instructions

## Structure

```markdown
# Project Overview
- Tech stack
- Architecture
- Key patterns

## Coding Standards
- Naming conventions
- File organization
- Error handling

## Examples
- Show, don't just tell
- Provide code templates
- Include anti-patterns
```

---

# Custom Instructions Example

## Real-World Pattern

```markdown
## Error Handling

Always use try-catch for async operations:

```typescript
try {
  const result = await riskyOperation();
  return result;
} catch (error) {
  logger.error('Operation failed', { error });
  throw new ServiceError('OP_FAILED', 'Unable to complete');
}
```

Never expose internal errors to clients.
```

---

# Path-Specific Instructions

## Target Specific Areas

```markdown
---
applyTo:
  - "src/components/**/*.tsx"
  - "src/pages/**/*.tsx"
---

# React Component Instructions

- Use TypeScript
- Use React.FC
- Include PropTypes interface
- CSS Modules for styling
- Accessibility attributes required
```

---

# Custom Instructions Best Practices

## Do's ✅

1. **Be Specific** - Provide exact patterns
2. **Show Examples** - Code speaks louder than words
3. **Stay Concise** - Keep under 1000 lines
4. **Update Regularly** - Keep current
5. **Test Thoroughly** - Verify they work

## Don'ts ❌

1. Too vague: "Write good code"
2. Too long: 2000+ line files
3. Contradictory rules
4. Outdated patterns

---

# Measuring Instruction Effectiveness

## Success Metrics

- 📊 **Consistency**: Same patterns across codebase
- ⏱️ **Speed**: Fewer manual corrections
- ✅ **Quality**: Better error handling
- 🔒 **Security**: Best practices followed
- 📝 **Documentation**: Auto-generated docs
- 🧪 **Testing**: Comprehensive tests

---

# Part 3: Custom Agents

---

# What Are Custom Agents?

## Specialized AI Teammates

Think of agents as expert consultants:

- 🧪 **Test Engineer** - Testing specialist
- 🔧 **Refactoring Specialist** - Code quality expert  
- 📝 **Documentation Writer** - Technical writer
- 🔒 **Security Auditor** - Security reviewer
- 🎨 **Frontend Expert** - UI/UX specialist
- 📦 **Database Architect** - Data modeling expert

---

# Custom Agents vs Instructions

## Key Differences

| Feature | Instructions | Agents |
|---------|-------------|--------|
| **Scope** | Repository-wide | Task-specific |
| **Selection** | Always active | Manually chosen |
| **Tools** | All tools | Specific subset |
| **Purpose** | General guidance | Specialized expertise |
| **Configuration** | Simple markdown | YAML + markdown |

---

# Agent Architecture

## Agent Profile Structure

```markdown
---
name: agent-name
description: What the agent specializes in
tools:
  - read
  - edit
  - create
  - search
autoInvoke: false
---

# Agent Prompt

Detailed instructions for the agent's behavior,
expertise, and best practices to follow.
```

---

# Creating a Test Engineer Agent

## Example: test-engineer.agent.md

```markdown
---
name: test-engineer
description: Expert in comprehensive testing
tools:
  - read
  - edit  
  - create
  - terminal
---

# Test Engineer Agent

You specialize in:
- Unit testing with Jest
- Integration testing
- TDD methodology
- 80%+ coverage goals

Always follow AAA pattern: Arrange, Act, Assert
```

---

# Agent Tool Configuration

## Available Tools

- **read** - Read file contents
- **edit** - Modify existing files
- **create** - Create new files
- **delete** - Remove files
- **search** - Search codebase
- **terminal** - Execute commands
- **analysis** - Analyze code
- **browser** - Web interaction (via MCP)

**Pro Tip**: Limit tools to what the agent actually needs!

---

# Using Custom Agents

## Agent Selection

1. Open Copilot Chat
2. Select agent from dropdown
3. Describe your task
4. Let the specialist work!

```
@test-engineer Create comprehensive tests 
for the UserService class
```

```
@refactor-specialist Improve the 
authentication module's code quality
```

---

# Multi-Agent Workflows

## Chaining Agents

**Scenario**: Add new feature

```
Step 1: @refactor-specialist
  "Prepare existing code for new feature"

Step 2: @copilot (default)
  "Implement the feature"
  
Step 3: @test-engineer
  "Write comprehensive tests"
  
Step 4: @doc-writer
  "Document the new feature"
  
Step 5: @security-auditor  
  "Review for vulnerabilities"
```

---

# Agent Best Practices

## Design Principles

1. **Single Responsibility** - One clear purpose
2. **Clear Description** - Users know when to use
3. **Right Tools** - Only necessary permissions
4. **Good Examples** - Show expected patterns
5. **Regular Testing** - Verify behavior

---

# Part 4: MCP Integration

---

# What is MCP?

## Model Context Protocol

An **open standard** that lets Copilot connect to:

- 🐙 **GitHub** - Repositories, issues, PRs
- 🎭 **Playwright** - Browser automation
- 💾 **Databases** - Query and update data
- 🌐 **Web APIs** - External services
- 📦 **Your Tools** - Custom integrations

**Think of it as**: Copilot's plugin system

---

# MCP Architecture

```
┌───────────────────────┐
│  GitHub Copilot Chat  │ ← MCP Client
│      (VS Code)        │
└─────────┬─────────────┘
         │
         │ MCP Protocol
         │
┌────────┼─────────────────┐
│    MCP Servers         │ ← Your integrations
├─────────────────────────┤
│ - GitHub             │
│ - Playwright         │  
│ - Memory             │
│ - Filesystem         │
│ - Custom servers     │
└─────────────────────────┘
```

---

# MCP Benefits

## Why Use MCP?

### Without MCP
- ❌ Limited to code context
- ❌ Manual data gathering  
- ❌ No external tool access
- ❌ Repetitive workflows

### With MCP
- ✅ Rich external context
- ✅ Automated data retrieval
- ✅ Direct tool manipulation  
- ✅ Integrated workflows

---

# Popular MCP Servers

## Official Servers

### 1. GitHub MCP
- List issues and PRs
- Search code
- Create issues
- Manage branches

### 2. Playwright MCP
- Navigate web pages
- Run tests
- Take screenshots
- Automate browsers

### 3. Memory MCP
- Store conversation context
- Remember preferences
- Maintain state

---

# Setting Up MCP

## Quick Start

1. **Install MCP server**:
   ```bash
   npm install -g @modelcontextprotocol/server-github
   ```

2. **Configure** `mcp-settings.json`:
   ```json
   {
     "servers": {
       "github": {
         "url": "https://api.githubcopilot.com/mcp/",
         "requestInit": {
           "headers": {
             "Authorization": "Bearer YOUR_TOKEN"
           }
         }
       }
     }
   }
   ```

3. **Restart VS Code**

---

# MCP in Action

## Example Commands

**GitHub MCP**:
```
List all open issues labeled "bug" in this repository
```

**Playwright MCP**:
```
Navigate to our login page and test the authentication flow
```

**Combined**:
```
Use Playwright to test the feature, then create a GitHub 
issue if any bugs are found
```

---

# MCP + Custom Agents

## Powerful Combination

```markdown
---
name: github-specialist
description: GitHub repository expert
tools:
  - github.list_issues
  - github.create_issue
  - github.search_code
mcp-servers:
  - github
---

# GitHub Specialist

Expert at managing GitHub repositories
using GitHub MCP tools.
```

---

# MCP Security

## Best Practices

1. **Token Management**
   - Use environment variables
   - Rotate regularly
   - Minimal scopes
   - Never commit to git

2. **Access Control**
   - Limit filesystem paths
   - Restrict domains
   - Read-only when possible

3. **Monitoring**
   - Check rate limits
   - Review logs
   - Track API quotas

---

# Part 5: Putting It All Together

---

# The Complete Workflow

## Feature Implementation

**Task**: Add user profile pictures

```
1. Custom Instructions → Ensure patterns followed
2. Refactor Agent → Prepare existing code
3. Agent Mode → Implement feature
4. Test Agent → Write comprehensive tests
5. GitHub MCP → Create PR
6. Doc Agent → Update documentation
7. Security Agent → Final review
```

---

# Advanced Tips

## Pro Strategies

### 1. Write Better Prompts

❌ **Vague**: "Improve the code"

✅ **Specific**:
```
Refactor UserService to:
1. Use repository pattern
2. Add retry logic
3. Include error handling  
4. Write tests with 80%+ coverage
```

---

# Advanced Tips (cont'd)

## Pro Strategies

### 2. Use Constraints

```
Implement authentication

Constraints:
- Use bcrypt for passwords
- JWT with 1-hour expiry
- Refresh token flow
- PostgreSQL only
- No external services
```

---

# Advanced Tips (cont'd)

## Pro Strategies

### 3. Reference Patterns

```
Create /api/products endpoint

Follow the pattern from /api/users:
- Same error handling
- Same pagination
- Same response format
- Same validation approach
```

---

# Advanced Tips (cont'd)

## Pro Strategies

### 4. Iterative Refinement

Don't aim for perfection in one shot:

1. **Round 1**: Basic implementation
2. **Round 2**: Add error handling
3. **Round 3**: Optimize performance
4. **Round 4**: Add comprehensive tests
5. **Round 5**: Polish documentation

---

# Common Pitfalls

## What to Avoid

1. **Too Ambitious** - Start small, iterate
2. **Skipping Review** - Always check agent output
3. **Ignoring Tests** - Agents can break things
4. **Vague Instructions** - Be specific
5. **Wrong Tool** - Agent mode isn't always the answer
6. **No Custom Instructions** - Missing context
7. **Forgetting Security** - Review sensitive operations

---

# Troubleshooting

## Common Issues

### Agent Mode Not Available
- Check subscription tier
- Update extensions
- Restart VS Code

### Instructions Ignored
- Make more specific
- Add examples
- Check file location

### MCP Connection Failed  
- Verify token
- Check network
- Review server logs

---

# Exercise Time! 💪

## What You'll Do

1. **Exercise 1**: Agent Mode Basics (20 min)
2. **Exercise 2**: Custom Instructions (20 min)
3. **Exercise 3**: Custom Agents (25 min)
4. **Exercise 4**: MCP Integration (25 min)
5. **Exercise 5**: Real-World Project (30 min)

**Let's get started!**

---

# Exercise 1: Agent Mode Basics

## Objectives

- Enable and test agent mode
- Assign a multi-file task
- Review and accept changes
- Handle errors and iterations

**Start here**: `exercises/01-agent-mode-basics.md`

**Time**: 20 minutes

---

# Exercise 2: Custom Instructions

## Objectives

- Create repository-wide instructions
- Add path-specific instructions
- Test instruction effectiveness
- Measure improvements

**Start here**: `exercises/02-custom-instructions.md`

**Time**: 20 minutes

---

# Exercise 3: Custom Agents

## Objectives

- Create test engineer agent
- Build refactoring specialist
- Design documentation writer
- Chain multiple agents

**Start here**: `exercises/03-custom-agents.md`

**Time**: 25 minutes

---

# Exercise 4: MCP Integration

## Objectives

- Set up GitHub MCP server
- Configure Playwright MCP
- Test MCP commands
- Build integrated workflows

**Start here**: `exercises/04-mcp-integration.md`

**Time**: 25 minutes

---

# Exercise 5: Real-World Project

## Objectives

- Refactor existing codebase
- Add new features with agents
- Implement error handling
- Write comprehensive tests
- Document everything

**Start here**: `exercises/05-weather-app-refactor.md`

**Time**: 30 minutes

---

# Key Takeaways

## Remember These

1. 🤖 **Agent Mode** = Autonomous multi-file operations
2. 📝 **Custom Instructions** = Project-specific patterns
3. 🧑‍💻 **Custom Agents** = Specialized experts
4. 🔌 **MCP** = External tool integration
5. ⚙️ **Together** = Powerful AI-assisted development

**Always review agent output before accepting!**

---

# Best Practices Summary

## Golden Rules

✅ Start with custom instructions
✅ Be specific in prompts
✅ Review agent plans before execution
✅ Create agents for repeated tasks
✅ Use MCP for external context
✅ Test thoroughly
✅ Document your setup
✅ Share with your team

---

# Measuring Success

## Track These Metrics

- ⏱️ **Time Saved** - How much faster?
- 📊 **Code Quality** - Better patterns?
- ✅ **Consistency** - Same style everywhere?
- 🔒 **Security** - Fewer vulnerabilities?
- 🧪 **Test Coverage** - More comprehensive?
- 📝 **Documentation** - Better docs?

---

# Real-World Impact

## What Teams Report

- **40-60%** faster feature development
- **80%+** code consistency
- **50%** fewer bugs in production
- **90%** better test coverage
- **2x** faster onboarding for new devs

*Source: GitHub Copilot case studies*

---

# Next Steps

## After This Lesson

1. 📝 Apply to your real projects
2. 👥 Create team custom instructions
3. 🤖 Build organization agents
4. 🔌 Set up MCP servers for your tools
5. 📚 Share knowledge with teammates
6. 📈 Measure and iterate

---

# Additional Resources

## Learn More

### Documentation
- [Agent Mode Guide](https://docs.github.com/copilot)
- [Custom Instructions](https://docs.github.com/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot)
- [Custom Agents](https://docs.github.com/copilot/how-tos/use-copilot-agents/coding-agent/create-custom-agents)
- [MCP Documentation](https://docs.github.com/copilot/customizing-copilot/using-model-context-protocol)

### Community
- [Copilot Patterns](https://github.com/yuhattor/copilot-patterns)
- [Advanced Prompts](https://github.com/microsoft/copilot-prompts)

---

# Q&A Time 🙋

## Questions?

- Agent mode confusion?
- Custom instructions help?
- Agent creation questions?
- MCP setup issues?
- Real-world scenarios?

**Ask anything!**

---

# Break Time! ☕

## 5 Minute Break

When we return:
- Start exercises
- Get hands-on
- Build something real

**See you in 5!**

---

# Enterprise Considerations

## For Organizations

### Governance
- 📜 Custom instructions as policy
- 🔒 Security agent for compliance
- 📈 Usage tracking and metrics
- 📚 Documentation standards

### Scaling
- 🏗️ Organization-level agents
- 🔧 Shared MCP servers
- 👥 Team-specific instructions
- 📦 Agent marketplace (internal)

---

# Advanced Topics

## Beyond This Lesson

- **Copilot CLI** - Terminal workflows
- **Copilot Workspace** - Issue-to-PR automation  
- **Custom Model Fine-tuning** - Enterprise only
- **Security Scanning** - Built-in vulnerability detection
- **Custom MCP Servers** - Build your own integrations

---

# Lesson 3 Preview

## Non-Technical Audiences

Next lesson focuses on:
- Training non-developers
- Business user scenarios
- Documentation workflows
- No-code/low-code approaches
- Communication tools integration

**Perfect for training broader teams!**

---

# Thank You! 🙏

## You're Now a Copilot Power User!

### Remember
- Practice makes perfect
- Start small, iterate
- Share with your team
- Keep learning

### Stay Connected
- GitHub Discussions
- Community forums
- Office hours

**Happy coding with Copilot!** 🚀

---

# Appendix: Quick Reference

---

# Quick Reference: Agent Mode

## Key Commands

- Enable: Toggle agent mode in chat
- Assign: Describe task in natural language
- Review: Check plan before execution
- Accept: Merge approved changes
- Iterate: Ask for refinements

## Tips
- Be specific
- Review plans carefully
- Start with small tasks
- Build complexity gradually

---

# Quick Reference: Custom Instructions

## File Locations

```
.github/
  ├── copilot-instructions.md (repo-wide)
  └── instructions/
      ├── react.instructions.md
      ├── api.instructions.md
      └── tests.instructions.md
```

## Template
```markdown
# Project Overview
# Coding Standards
# Examples
# Common Patterns
```

---

# Quick Reference: Custom Agents

## Agent Template

```markdown
---
name: agent-name
description: Brief description
tools:
  - read
  - edit
  - create
autoInvoke: false
---

# Agent Name

Detailed instructions and patterns...
```

## Usage
```
@agent-name Your task description here
```

---

# Quick Reference: MCP

## Setup Steps

1. Install server: `npm install -g @modelcontextprotocol/server-NAME`
2. Configure `mcp-settings.json`
3. Restart VS Code
4. Test in agent mode

## Popular Servers
- `server-github` - GitHub integration
- `server-playwright` - Browser automation
- `server-memory` - Context storage
- `server-fetch` - Web content

---