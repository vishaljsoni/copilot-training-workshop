# Custom Agents
## Building Your AI Expert Team

---

# What Are Custom Agents?

## Think of Them as Specialized Teammates

**Regular Copilot** = Generalist developer
- Knows a bit of everything
- Adapts to any task
- Good all-around assistant

**Custom Agents** = Specialists with expertise
- 🧪 Test Engineer - Testing expert
- 🔧 Refactoring Specialist - Code quality expert
- 📝 Documentation Writer - Technical writer
- 🔒 Security Auditor - Security reviewer
- 🎨 Frontend Expert - UI/UX specialist
- 📊 Data Engineer - Database expert

---

# Why Custom Agents?

## The Problem

**Without Custom Agents**:
```
"Write tests for this code"
→ Generic tests, might miss edge cases

"Refactor this code"
→ Generic improvements, might miss patterns

"Document this API"
→ Basic docs, might miss details
```

**With Custom Agents**:
```
@test-engineer "Write tests for this code"
→ Comprehensive tests, AAA pattern, edge cases, proper mocks

@refactor-specialist "Refactor this code" 
→ Targeted improvements, SOLID principles, performance

@doc-writer "Document this API"
→ Complete API docs, examples, error codes, usage
```

---

# Custom Agents vs Custom Instructions

## Key Differences

| Feature | Custom Instructions | Custom Agents |
|---------|-------------------|---------------|
| **Scope** | Repository-wide context | Task-specific expertise |
| **Selection** | Always active | Manually selected |
| **Tools** | All available tools | Specific tool subset |
| **Purpose** | General project patterns | Specialized workflows |
| **Configuration** | Simple markdown | YAML frontmatter + markdown |
| **Use Case** | Project standards | Specific tasks |

**Both work together!** Instructions provide context, agents provide expertise.

---

# Agent Architecture

## File Structure

**Location**: `.github/agents/`

**File Extension**: `.agent.md`

**Format**:
```markdown
---
name: agent-name
description: Brief description of agent expertise
tools:
  - read
  - edit
  - create
  - search
autoInvoke: false
---

# Agent Name

Detailed instructions about the agent's:
- Expertise areas
- Approach and methodology  
- Patterns to follow
- Best practices
- Examples
```

---

# Creating Your First Agent

## Test Engineer Agent

**File**: `.github/agents/test-engineer.agent.md`

```markdown
---
name: test-engineer
description: Expert in comprehensive testing with Jest and React Testing Library
tools:
  - read
  - edit
  - create
  - search
  - terminal
autoInvoke: false
---

# Test Engineer Agent

You are an expert testing engineer specializing in:
- Unit testing with Jest
- Integration testing
- React component testing
- TDD methodology
- Test coverage analysis

[Continue with detailed patterns and examples...]
```

---

# Agent Tools Configuration

## Available Tools

**File Operations**:
- `read` - Read file contents
- `edit` - Modify existing files
- `create` - Create new files
- `delete` - Remove files

**Code Operations**:
- `search` - Search codebase
- `analysis` - Analyze code

**Execution**:
- `terminal` - Run commands
- `browser` - Web interaction (via MCP)

**Best Practice**: Only enable tools the agent actually needs!

---

# Tool Permissions Strategy

## Examples by Agent Type

**Test Engineer** (creates and runs tests):
```yaml
tools:
  - read
  - create
  - edit
  - terminal  # For running tests
```

**Security Auditor** (read-only reviewer):
```yaml
tools:
  - read
  - search
  - analysis
  # No edit/create - security agent only reviews!
```

**Refactoring Specialist** (modifies code):
```yaml
tools:
  - read
  - edit
  - search
  # No create - only improves existing files
```

---

# Example Agent: Test Engineer

## Complete Implementation

```markdown
---
name: test-engineer
description: Expert in writing comprehensive tests
tools: [read, edit, create, search, terminal]
autoInvoke: false
---

# Test Engineer Agent

## Philosophy
1. AAA Pattern: Arrange, Act, Assert
2. Each test should be independent
3. Test names describe expected behavior
4. Aim for meaningful coverage, not just metrics

## Test Structure
```typescript
describe('ComponentName', () => {
  describe('methodName', () => {
    it('should do X when Y happens', () => {
      // Arrange: Setup
      const input = setupTestData();
      
      // Act: Execute
      const result = methodUnderTest(input);
      
      // Assert: Verify
      expect(result).toBe(expected);
    });
  });
});
```

## Coverage Requirements
- Services: 90%+
- Utilities: 100%
- Components: 70%+
```

---

# Example Agent: Refactoring Specialist

## Code Quality Expert

```markdown
---
name: refactor-specialist
description: Expert in code refactoring and optimization
tools: [read, edit, search, analysis]
autoInvoke: false
---

# Refactoring Specialist Agent

## Core Principles
1. Preserve behavior - never change functionality
2. Make small, incremental changes
3. Ensure tests pass before and after
4. Focus on readability and maintainability

## Common Refactorings

### Extract Method
When: Function > 20 lines
How: Break into smaller, focused functions

### Replace Conditional with Polymorphism
When: Multiple if/else based on type
How: Use strategy pattern or inheritance

### Consolidate Duplicate Code
When: Same logic in multiple places
How: Extract to shared utility

[Include detailed examples...]
```

---

# Example Agent: Documentation Writer

## Technical Writing Expert

```markdown
---
name: doc-writer
description: Expert in clear, comprehensive technical documentation
tools: [read, create, edit, search]
autoInvoke: false
---

# Documentation Writer Agent

## Documentation Types

### 1. API Documentation (JSDoc)
```typescript
/**
 * Retrieves user by ID
 * 
 * @param userId - Unique identifier
 * @returns Promise<User>
 * @throws {NotFoundError} If user doesn't exist
 * 
 * @example
 * const user = await getUserById('123');
 */
async function getUserById(userId: string): Promise<User>
```

### 2. README Files
- Clear project description
- Installation instructions
- Usage examples
- API reference
- Contributing guidelines

[Continue with more patterns...]
```

---

# Using Custom Agents

## How to Select and Use

**Step 1**: Open Copilot Chat
```
Ctrl+I (Windows/Linux)
Cmd+I (Mac)
```

**Step 2**: Enable Agent Mode
- Toggle at bottom of chat window

**Step 3**: Select Agent
- Dropdown menu shows available agents
- Choose the specialist you need

**Step 4**: Describe Task
```
@test-engineer Create comprehensive tests for UserService
```

```
@refactor-specialist Improve the authentication module
```

---

# Multi-Agent Workflows

## Chaining Agents for Complex Tasks

**Scenario**: Add New Feature

```
Step 1: @refactor-specialist
"Review and refactor existing code to prepare for new feature"

Step 2: Regular Copilot Agent
"Implement the user profile picture upload feature"

Step 3: @test-engineer
"Create comprehensive tests for the new feature"

Step 4: @doc-writer
"Document the new API endpoint"

Step 5: @security-auditor
"Review for security vulnerabilities"
```

---

# Advanced: Security Auditor Agent

## Read-Only Reviewer

```markdown
---
name: security-auditor
description: Security-focused code reviewer
tools:
  - read
  - search
  - analysis
  # Note: No 'edit' or 'create' - read-only!
autoInvoke: false
---

# Security Auditor Agent

You review code for security vulnerabilities.

## Check For

### 1. Input Validation
❌ Trusting user input
✅ Sanitization and validation

### 2. Authentication
❌ Weak password requirements
✅ Proper hashing, secure tokens

### 3. SQL Injection
❌ String concatenation in queries
✅ Parameterized queries

### 4. XSS Prevention
❌ Unescaped user content
✅ Proper output encoding

[Include detailed security patterns...]
```

---

# Auto-Invoke Agents

## Automatic Agent Activation

**Use Case**: Agents that should run automatically

```markdown
---
name: commit-validator
description: Validates code before commits
autoInvoke: true  # Runs automatically!
tools: [read, analysis]
---

# Commit Validator Agent

Automatically review code before commits:

1. Check for console.log statements
2. Verify test files updated
3. Ensure no TODOs in production code
4. Validate code style
5. Check for security issues
```

**Caution**: Use sparingly - can slow down workflow

---

# Agent Best Practices

## Design Principles

### 1. Single Responsibility
✅ Each agent has one clear purpose
❌ Don't create "do everything" agents

### 2. Clear Description
✅ Users know exactly when to use each agent
❌ Vague descriptions confuse users

### 3. Right Tools Only
✅ Security auditor: read-only tools
❌ Giving all tools to every agent

### 4. Provide Examples
✅ Show expected patterns and output
❌ Abstract descriptions without examples

### 5. Test Regularly
✅ Verify agent behavior matches expectations
❌ "Set and forget" approach

---

# When to Create New Agents

## Good Reasons ✅

- **Repeated Specialized Tasks**
  - "We write tests all the time"
  - "Frequent security audits needed"

- **Complex Domain Knowledge**
  - "Our database patterns are unique"
  - "Specific framework expertise needed"

- **Different Tool Requirements**
  - "This task needs read-only access"
  - "This requires terminal access"

- **Team Role Specialization**
  - "We have dedicated QA engineers"
  - "Security team has specific requirements"

---

# When NOT to Create Agents

## Bad Reasons ❌

- **One-Off Tasks**
  - Won't use it again
  - Not worth the setup

- **Overlap with Existing Agents**
  - Functionality already covered
  - Creates confusion

- **Too General Purpose**
  - "Code helper agent"
  - Just use regular Copilot

- **Rarely Used Workflows**
  - Better to describe task each time
  - Not worth maintaining

---

# Agent Organization

## Recommended Structure

```
.github/
└── agents/
    ├── test-engineer.agent.md
    ├── refactor-specialist.agent.md
    ├── doc-writer.agent.md
    ├── security-auditor.agent.md
    ├── frontend-expert.agent.md
    ├── backend-expert.agent.md
    └── database-specialist.agent.md
```

**Naming Convention**: `[role]-[specialty].agent.md`

**Documentation**: Maintain `agents/README.md` with:
- Agent descriptions
- When to use each
- Example prompts

---

# Agent + Custom Instructions

## Powerful Combination

**Custom Instructions** = Project Context
```markdown
.github/copilot-instructions.md
"Our project uses Prisma, Zod, Express..."
```

**Custom Agent** = Specialized Expertise
```markdown
.github/agents/test-engineer.agent.md
"Expert in testing with Jest, AAA pattern..."
```

**Together**:
```
@test-engineer "Create tests for UserService"

→ Agent knows:
  ✅ Testing best practices (from agent)
  ✅ Project patterns (from instructions)
  ✅ Your tech stack (from instructions)
  
= Perfect, project-specific tests!
```

---

# Testing Your Agents

## Verification Process

**Step 1**: Create Test Scenarios
```
@test-engineer
"Create tests for a simple calculator with add and subtract"
```

**Step 2**: Check Output Quality
- ✅ Follows AAA pattern?
- ✅ Includes edge cases?
- ✅ Proper mocking?
- ✅ Descriptive test names?

**Step 3**: Iterate and Improve
- Refine agent instructions
- Add more examples
- Clarify expectations

---

# Example: Complete Test Engineer Agent

## Production-Ready Implementation

**See Exercise 3** for full code!

Includes:
- ✅ Detailed testing philosophy
- ✅ Test structure templates
- ✅ Mocking strategies
- ✅ Coverage requirements
- ✅ Multiple example patterns
- ✅ Common testing scenarios
- ✅ Best practices

**Location**: `exercises/03-custom-agents.md`

---

# Real-World Agent Examples

## Beyond the Basics

**Migration Agent**:
```markdown
name: migration-specialist
description: Expert in database migrations and versioning
```

**Performance Agent**:
```markdown
name: performance-optimizer
description: Expert in code optimization and profiling
```

**Accessibility Agent**:
```markdown
name: a11y-expert
description: Expert in web accessibility (WCAG compliance)
```

**DevOps Agent**:
```markdown
name: devops-specialist
description: Expert in CI/CD, Docker, and deployment
```

---

# Agent Maintenance

## Keeping Agents Effective

**Monthly Review**:
- ✅ Are agents being used?
- ✅ Do they produce quality output?
- ✅ Need updates for new patterns?
- ✅ Any user feedback?

**Update Triggers**:
- Tech stack changes
- New best practices discovered
- Team patterns evolve
- User reports issues

**Version Control**:
```bash
git commit -m "agents: update test-engineer with React Testing Library v14"
```

---

# Sharing Agents Across Projects

## Organization-Level Agents

**Company Standards**:
```
company-github/
└── copilot-agents/
    ├── security-auditor.agent.md  # Reuse everywhere!
    ├── doc-writer.agent.md
    └── test-engineer.agent.md
```

**Project-Specific**:
```
my-project/.github/agents/
├── [symlink to company agents]
└── project-specific.agent.md  # Project unique agent
```

---

# Measuring Agent Effectiveness

## Success Metrics

**Usage Statistics**:
- How often is each agent selected?
- Which agents are never used?

**Quality Metrics**:
- Acceptance rate of agent output
- Iteration count before acceptance
- Time saved vs manual work

**Team Feedback**:
- Developer satisfaction surveys
- Agent improvement suggestions
- Pain points identified

---

# Hands-On Exercise

## Build Your First Agent

**Task**: Create a custom agent (20 minutes)

**Choose One**:
1. **Test Engineer** - If you write lots of tests
2. **Doc Writer** - If you need better docs
3. **Refactoring Specialist** - If you maintain legacy code
4. **Your Idea** - Something your team needs

**Steps**:
1. Create `.github/agents/` directory
2. Write agent file with YAML frontmatter
3. Add detailed instructions
4. Include examples
5. Test with real task
6. Iterate based on output

---

# Common Issues and Solutions

## Troubleshooting

### Issue: Agent Not Appearing
**Solutions**:
- Check file extension: `.agent.md`
- Verify location: `.github/agents/`
- Restart VS Code
- Check YAML frontmatter syntax

### Issue: Agent Ignores Instructions
**Solutions**:
- Add more specific examples
- Clarify expected behavior
- Check for contradictions
- Test with simpler tasks first

### Issue: Agent Too Slow
**Solutions**:
- Reduce instruction length
- Simplify tool permissions
- Break task into smaller pieces

---

# Advanced: Agent + MCP Integration

## External Tool Access

```markdown
---
name: github-specialist
description: GitHub repository management expert
tools:
  - read
  - github.list_issues
  - github.create_issue
  - github.search_code
mcp-servers:
  - github
---

# GitHub Specialist Agent

Expert at managing GitHub repositories using MCP tools.

When managing issues or PRs:
1. Use GitHub MCP to access repository data
2. Analyze thoroughly
3. Provide recommendations
4. Create or update as needed
```

**Covered in detail in Exercise 4!**

---

# Key Takeaways

## Remember These Points

✅ Custom agents = **Specialized AI teammates**
✅ Each agent has **one clear expertise**
✅ **Tool permissions** match agent role
✅ Use **multi-agent workflows** for complex tasks
✅ Agents + Instructions = **Powerful combination**
✅ **Test and iterate** to improve agents
✅ **Share agents** across projects and teams

---

# What's Next?

## Continue Learning

**Next Topic**: MCP Integration
- Connect external tools to Copilot
- GitHub, Playwright, databases
- Custom MCP servers
- Automated workflows

**Practice**:
- Complete Exercise 3
- Create agents for your workflow
- Test with real projects
- Share with your team

---

# Resources

## Learn More

**Official Documentation**:
- [Custom Agents Guide](https://docs.github.com/copilot/how-tos/use-copilot-agents/coding-agent/create-custom-agents)
- [Configuration Reference](https://docs.github.com/copilot/reference/custom-agents-configuration)

**Examples**:
- [Agent Patterns Repository](https://github.com/microsoft/copilot-agent-patterns)
- [Community Agents](https://github.com/topics/copilot-agents)

**Blog Posts**:
- [Building Better Apps with Custom Agents](https://montemagno.com/building-better-apps-with-github-copilot-custom-agents/)

---

# Q&A 🙋

## Your Questions

- How many agents should I create?
- Can agents call other agents?
- What's the difference between agent and instruction?
- How do I know which tools to enable?
- Can agents access MCP servers?
- How often should agents be updated?

**Ask anything about Custom Agents!**

---

# Thank You! 🤖

## Custom Agents Mastered

You now know how to:
- ✅ Create specialized agent profiles
- ✅ Configure agent tools properly
- ✅ Use agents for specific tasks
- ✅ Chain multiple agents
- ✅ Maintain and share agents

**Next**: Learn MCP Integration to connect external tools!

---