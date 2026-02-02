# Lesson 2: Advanced GitHub Copilot 🚀

**Duration**: ~1.5 hours | **Level**: Advanced | **Focus**: Agent Mode, Custom Instructions, MCP Servers

## 🎯 Learning Objectives

By the end of this lesson, you will:
- ✅ Master **Agent Mode** for autonomous multi-file coding
- ✅ Configure **custom instructions** for project-specific guidance
- ✅ Create **custom agents** with specialized skills
- ✅ Use **prompt files** for reusable workflows
- ✅ Integrate **MCP (Model Context Protocol)** servers
- ✅ Leverage **Edits mode** for precise multi-file changes
- ✅ Plan and implement complex features with AI
- ✅ Refactor legacy code effectively
- ✅ Debug and optimize at scale

---

## 📋 Prerequisites

- **Completed Lesson 1** or equivalent Copilot experience
- **GitHub Copilot Pro/Business/Enterprise** (Agent mode not available on free tier)
- **VS Code** with latest Copilot extensions
- **Node.js** installed (for some examples)
- Familiarity with git, CLI, and your programming language

---

## 🎓 What's New in Advanced Copilot?

### Agent Mode vs Regular Copilot

| Feature | Regular Copilot | Agent Mode |
|---------|----------------|------------|
| **Scope** | Single file, inline suggestions | Multi-file, autonomous changes |
| **Planning** | No planning phase | Creates implementation plan |
| **Iteration** | Manual refinement | Automatic error fixing |
| **Tools** | Code completion only | File ops, terminal, search, build |
| **Autonomy** | Requires constant input | Works in background |

### Key Capabilities

1. **Agent Mode**: Assign complex tasks, Copilot works autonomously
2. **Custom Instructions**: Teach Copilot your project's patterns
3. **Custom Agents**: Create specialized agents for specific tasks
4. **MCP Integration**: Connect external tools and data sources
5. **Edits Mode**: Preview and accept multi-file changes

---

## 🛠️ Setup for Advanced Features

### Step 1: Enable Agent Mode

1. Open VS Code settings (`Ctrl+,` / `Cmd+,`)
2. Search for "GitHub Copilot Agent"
3. Ensure "Enable Agent Mode" is checked
4. Restart VS Code

### Step 2: Verify Agent Mode Access

1. Open Copilot Chat (`Ctrl+I` / `Cmd+I`)
2. Look for **agent mode toggle** at bottom of chat
3. If not visible, verify your Copilot subscription tier

### Step 3: Update Extensions

Ensure you have latest versions:
- GitHub Copilot
- GitHub Copilot Chat

---

## 📚 Exercise Overview

This lesson includes 5 hands-on exercises:

### [Exercise 1: Agent Mode Basics](./exercises/01-agent-mode-basics.md)
- Understand how agent mode works
- Assign tasks to Copilot
- Review and accept changes
- **Time**: 20 minutes

### [Exercise 2: Custom Instructions](./exercises/02-custom-instructions.md)
- Create `.github/copilot-instructions.md`
- Define project coding standards
- Test instruction effectiveness
- **Time**: 20 minutes

### [Exercise 3: Custom Agents](./exercises/03-custom-agents.md)
- Build specialized agents
- Configure agent capabilities
- Chain agents for workflows
- **Time**: 25 minutes

### [Exercise 4: MCP Integration](./exercises/04-mcp-integration.md)
- Set up MCP servers
- Connect external tools
- Use custom tools in agent mode
- **Time**: 25 minutes

### [Exercise 5: Real-World Project](./exercises/05-weather-app-refactor.md)
- Refactor existing codebase
- Add new features with agent mode
- Implement error handling
- Write comprehensive tests
- **Time**: 30 minutes

---

## ⏱️ Recommended Schedule

| Time | Activity | Duration |
|------|----------|----------|
| 0:00 | Introduction & Setup | 5 min |
| 0:05 | Exercise 1: Agent Mode Basics | 20 min |
| 0:25 | Exercise 2: Custom Instructions | 20 min |
| 0:45 | Break | 5 min |
| 0:50 | Exercise 3: Custom Agents | 25 min |
| 1:15 | Exercise 4: MCP Integration | 25 min |
| 1:40 | Exercise 5: Weather App Project | 30 min |
| 2:10 | Q&A and Wrap-up | 10 min |

---

## 💡 Key Concepts

### Agent Mode Workflow

1. **You describe the task** in natural language
2. **Copilot creates a plan** with steps and affected files
3. **You review and approve** the plan
4. **Copilot executes** the plan autonomously
5. **Copilot iterates** if errors occur
6. **You review changes** and accept/reject

### Custom Instructions Best Practices

**Good instructions**:
```markdown
# Coding Standards
- Use TypeScript strict mode
- Prefer functional components with hooks
- Error boundaries for all route components
- Zod for runtime validation
```

**Too vague**:
```markdown
- Write good code
- Follow best practices
```

### MCP (Model Context Protocol)

MCP allows Copilot to:
- ✅ Access external APIs
- ✅ Query databases
- ✅ Read documentation sites
- ✅ Integrate with tools (Jira, Notion, etc.)
- ✅ Execute custom scripts

---

## 🎯 Pro Tips for Advanced Users

### 1. Write Better Task Descriptions

❌ **Vague**:
```
Improve the code
```

✅ **Specific**:
```
Refactor the UserService class to:
1. Extract database logic into a repository pattern
2. Add comprehensive error handling
3. Implement retry logic for failed requests
4. Write unit tests with 80%+ coverage
```

### 2. Use Constraints

```
Implement user authentication

Constraints:
- Use bcrypt for password hashing
- JWT tokens with 1-hour expiry
- Refresh token flow
- Must work with existing PostgreSQL schema
- No external auth services (Auth0, Firebase, etc.)
```

### 3. Reference Existing Patterns

```
Create a new API endpoint for products

Follow the pattern from /api/users endpoint:
- Same error handling
- Same pagination approach
- Same response format
```

### 4. Iterative Refinement

Don't try to get everything perfect in one prompt:

**Round 1**: Basic implementation
**Round 2**: Add error handling
**Round 3**: Optimize performance
**Round 4**: Add tests

---

## 🚀 Getting Started

1. Ensure you have agent mode access
2. Start with [Exercise 1: Agent Mode Basics](./exercises/01-agent-mode-basics.md)
3. Progress through each exercise in order
4. Complete the Weather App refactoring project

---

## 📝 Notes for Instructors

### Teaching Tips

- **Demo First**: Show agent mode working before students try
- **Emphasize Review**: Always review agent-generated code
- **Show Failures**: Demonstrate when agent gets stuck
- **Real Projects**: Use actual codebases from your organization
- **Pair Programming**: Have students work in pairs

### Common Issues

- **Agent mode not available**: Check subscription tier
- **Slow responses**: Large codebases may take time
- **Incorrect changes**: Review plan before execution
- **Rate limiting**: Distribute complex tasks

### Advanced Topics (Optional)

- GitHub Copilot CLI for terminal workflows
- Copilot Workspace for issue-to-PR automation
- Enterprise custom model fine-tuning
- Security scanning with Copilot

---

## 📚 Additional Resources

### Official Documentation
- [Agent Mode Guide](https://docs.github.com/en/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide#using-agent-mode)
- [Custom Instructions](https://docs.github.com/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot)
- [MCP Documentation](https://docs.github.com/en/copilot/customizing-copilot/using-model-context-protocol)

### Community Resources
- [Copilot Patterns Repository](https://github.com/yuhattor/copilot-patterns)
- [Advanced Prompting Guide](https://github.com/microsoft/copilot-prompts)

### Video Tutorials
- [Agent Mode Deep Dive](https://www.youtube.com/watch?v=bsfE9c2pRD0)
- [Custom Agents Tutorial](https://www.youtube.com/watch?v=xZvyEOPPxlY)

---

## ✅ What's Next?

After completing this lesson:
- Apply these techniques to your real projects
- Create custom instructions for your team
- Build organization-specific agents
- Explore [Lesson 3](../lesson-3-non-technical/) if training non-technical users

---

**Ready to become a Copilot power user? Begin with [Exercise 1 →](./exercises/01-agent-mode-basics.md)**