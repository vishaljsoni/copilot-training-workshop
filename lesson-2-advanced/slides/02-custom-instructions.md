# Custom Instructions Mastery
## Teaching Copilot Your Project Patterns

---

# The Problem Without Instructions

## Common Frustrations

❌ **Inconsistent Code Style**
```typescript
// Developer 1's code
function getUserData(userId: string) { ... }

// Developer 2's code  
function get_user_info(user_id: str) { ... }

// Copilot's suggestions: Mix of both!
```

❌ **Wrong Libraries**
```typescript
// You use Zod for validation
// Copilot suggests Joi
```

❌ **Missing Patterns**
```typescript
// Your team requires try-catch
// Copilot generates code without it
```

---

# The Solution: Custom Instructions

## One-Time Configuration

✅ **Teach Copilot Once**
- Define your patterns
- Specify your libraries
- Set your standards

✅ **Consistent Output**
- Same style everywhere
- Correct dependencies
- Proper error handling

✅ **Team Alignment**
- Everyone follows same patterns
- New developers onboard faster
- Code reviews go smoother

---

# What Are Custom Instructions?

## Definition

**Custom Instructions** = Markdown files that teach GitHub Copilot about your:
- 🏗️ Project architecture
- 📐 Coding standards
- 🔧 Preferred tools and libraries
- 🎯 Common patterns
- 🚫 Anti-patterns to avoid
- 🧪 Testing requirements
- 📝 Documentation standards

**Location**: `.github/` directory in your repository

---

# Three Types of Instructions

## Scope Levels

### 1️⃣ Repository-Wide
```
.github/copilot-instructions.md
```
- Applies to **ALL files** in the repo
- Project-wide standards
- General patterns

### 2️⃣ Path-Specific
```
.github/instructions/
  ├── react-components.instructions.md
  ├── api-routes.instructions.md
  └── tests.instructions.md
```
- Applies to **specific file paths**
- Domain-specific rules
- Tech-specific patterns

### 3️⃣ User/Workspace
- Personal IDE settings
- Your individual preferences
- Not shared with team

---

# Creating Repository-Wide Instructions

## Step-by-Step

**Step 1**: Create directory
```bash
mkdir -p .github
```

**Step 2**: Create file
```bash
touch .github/copilot-instructions.md
```

**Step 3**: Write instructions (we'll cover structure next)

**Step 4**: Commit to repository
```bash
git add .github/copilot-instructions.md
git commit -m "Add Copilot custom instructions"
git push
```

**That's it!** Copilot will read it automatically.

---

# Anatomy of Good Instructions

## Recommended Structure

```markdown
# Project: [Your Project Name]

## Project Overview
- Tech stack
- Architecture patterns
- Key dependencies

## Coding Standards
- Naming conventions
- File organization
- Code style rules

## Specific Patterns
- Error handling
- API design
- Database operations
- Testing approach

## Examples
- Show actual code
- Include do's and don'ts
- Provide templates
```

---

# Example: Error Handling Pattern

## Bad Instruction ❌

```markdown
## Error Handling

Always handle errors properly.
Use try-catch blocks.
```

**Why it's bad**:
- Too vague
- No specifics
- No examples
- Copilot won't know what "properly" means

---

# Example: Error Handling Pattern

## Good Instruction ✅

```markdown
## Error Handling

ALWAYS use try-catch for async operations:

```typescript
try {
  const result = await riskyOperation();
  logger.info('Operation succeeded', { result });
  return result;
} catch (error) {
  logger.error('Operation failed', { 
    error, 
    context: 'service-name',
    userId: user.id 
  });
  throw new ServiceError(
    'OPERATION_FAILED', 
    'Unable to complete operation'
  );
}
```

Never expose internal error details to clients.
Always log with context.
Use custom error classes with error codes.
```

---

# Example: API Design Pattern

## Specify Your API Standards

```markdown
## API Response Format

All successful responses:
```json
{
  "success": true,
  "data": { /* actual payload */ },
  "meta": {
    "timestamp": "2024-01-15T10:30:00Z",
    "requestId": "uuid-here"
  }
}
```

All error responses:
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable message",
    "details": [/* validation errors */]
  }
}
```

HTTP Status Codes:
- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 404: Not Found
- 500: Internal Server Error
```

---

# Example: Naming Conventions

## Be Explicit About Names

```markdown
## Naming Conventions

### Variables and Functions
- Use camelCase: `getUserData`, `isValid`
- Boolean variables start with `is`, `has`, `should`: `isActive`, `hasPermission`
- Event handlers start with `handle`: `handleClick`, `handleSubmit`

### Classes and Components
- Use PascalCase: `UserService`, `ProductCard`
- Service classes end with `Service`: `AuthService`, `EmailService`
- React components are nouns: `UserProfile`, not `ShowUser`

### Files
- Utilities: kebab-case: `string-utils.ts`, `date-helper.ts`
- Components: PascalCase: `UserProfile.tsx`, `DataTable.tsx`
- Tests: `[filename].test.ts` or `[filename].spec.ts`

### Constants
- Use UPPER_SNAKE_CASE: `MAX_RETRY_COUNT`, `API_BASE_URL`
```

---

# Path-Specific Instructions

## Why Use Them?

**Problem**: Different parts of codebase have different rules

- **Frontend**: React patterns, CSS modules, accessibility
- **Backend**: Service layer, database, API design
- **Tests**: Jest, mocking, AAA pattern

**Solution**: Create focused instructions for each area

---

# Path-Specific Instructions Structure

## File Format

```markdown
---
applyTo:
  - "src/components/**/*.tsx"
  - "src/pages/**/*.tsx"
---

# React Component Instructions

[Your React-specific rules here]
```

**Key Parts**:
1. **YAML frontmatter**: Specifies file patterns
2. **Glob patterns**: Matches specific paths
3. **Instructions**: Domain-specific rules

---

# Example: React Component Instructions

## `.github/instructions/react-components.instructions.md`

```markdown
---
applyTo:
  - "src/components/**/*.tsx"
  - "src/pages/**/*.tsx"
---

# React Component Instructions

## Component Template

Always use this structure:

```typescript
import React, { useState, useEffect } from 'react';
import styles from './ComponentName.module.css';

interface ComponentNameProps {
  title: string;
  onAction?: () => void;
}

export const ComponentName: React.FC<ComponentNameProps> = ({
  title,
  onAction
}) => {
  const [isLoading, setIsLoading] = useState(false);
  
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
    </div>
  );
};
```

## Rules
- Always export as named export (not default)
- Props interface must be defined
- Use CSS Modules for styling
- Include loading and error states
```

---

# Example: API Route Instructions

## `.github/instructions/api-routes.instructions.md`

```markdown
---
applyTo:
  - "src/api/**/*.ts"
  - "src/routes/**/*.ts"
---

# API Route Instructions

## Route Structure

All routes must follow this pattern:

```typescript
import { Router } from 'express';
import { authenticate, validateRequest } from '../middleware';
import { CreateUserSchema } from '../schemas';

const router = Router();

router.post(
  '/users',
  authenticate,           // 1. Auth first
  validateRequest(CreateUserSchema),  // 2. Then validation
  async (req, res, next) => {
    try {
      const user = await userService.create(req.body);
      res.status(201).json({ data: user });
    } catch (error) {
      next(error);  // 3. Pass to error handler
    }
  }
);
```

## Middleware Order
1. Authentication
2. Validation
3. Business logic
```

---

# Example: Test Instructions

## `.github/instructions/tests.instructions.md`

```markdown
---
applyTo:
  - "**/*.test.ts"
  - "**/*.spec.ts"
  - "src/__tests__/**/*.ts"
---

# Test Instructions

## Test Structure - AAA Pattern

```typescript
describe('UserService', () => {
  describe('createUser', () => {
    it('should create user with hashed password', async () => {
      // Arrange
      const userData = { email: 'test@example.com', password: 'pass123' };
      
      // Act
      const user = await userService.createUser(userData);
      
      // Assert
      expect(user.password).not.toBe(userData.password);
      expect(user.email).toBe(userData.email);
    });
  });
});
```

## Rules
- Use AAA pattern (Arrange, Act, Assert)
- Test names: "should [expected behavior] when [condition]"
- Mock external dependencies
- Clear mocks in afterEach
```

---

# Testing Your Instructions

## How to Verify They Work

**Test 1**: Generate New Code
```
Create a new UserService class
```

**Check**:
- ✅ Follows your service pattern?
- ✅ Uses your error handling?
- ✅ Matches your naming conventions?
- ✅ Includes your required imports?

**Test 2**: Ask for Specific Component
```
Create a ProductCard React component
```

**Check**:
- ✅ Uses your component template?
- ✅ Includes TypeScript interface?
- ✅ Uses CSS Modules?
- ✅ Has loading/error states?

---

# Common Mistakes to Avoid

## Don'ts ❌

### 1. Too Vague
```markdown
❌ Write clean code
❌ Follow best practices
❌ Make it secure
```

### 2. Too Long
```markdown
❌ 3000+ lines of instructions
❌ Every possible scenario documented
❌ Excessive detail on trivial matters
```

### 3. Contradictory
```markdown
❌ "Use camelCase" ... later ... "Use snake_case"
❌ "No semicolons" ... later ... "Always use semicolons"
```

### 4. Outdated
```markdown
❌ "Use moment.js" (when you switched to date-fns)
❌ "Class components" (when you use functional components)
```

---

# Best Practices for Instructions

## Do's ✅

### 1. Be Specific
```markdown
✅ "Use bcrypt with 12 rounds for password hashing"
✅ "JWT tokens expire in 1 hour, refresh tokens in 7 days"
```

### 2. Show Examples
```markdown
✅ Include actual code snippets
✅ Show the exact pattern to follow
✅ Provide before/after examples
```

### 3. Keep Updated
```markdown
✅ Review instructions monthly
✅ Update when patterns change
✅ Remove deprecated practices
```

### 4. Use Proper Length
```markdown
✅ Repository-wide: 500-1000 lines
✅ Path-specific: 200-400 lines
✅ Focus on what's unique to your project
```

---

# Organizing Instructions

## Recommended Structure

```
.github/
├── copilot-instructions.md          # Repository-wide
└── instructions/
    ├── react-components.instructions.md
    ├── api-routes.instructions.md
    ├── database.instructions.md
    ├── tests.instructions.md
    ├── documentation.instructions.md
    └── security.instructions.md
```

**Benefits**:
- Modular and maintainable
- Easy to update specific areas
- Clear ownership per domain
- Reusable across projects

---

# Measuring Instruction Effectiveness

## Success Metrics

**Code Quality**:
- ✅ Consistency: Same patterns across codebase
- ✅ Standards: Fewer violations in code reviews
- ✅ Security: Better practices followed automatically

**Developer Productivity**:
- ✅ Speed: Fewer manual corrections needed
- ✅ Onboarding: New devs productive faster
- ✅ Reviews: Less time spent on style issues

**Team Alignment**:
- ✅ Documentation: Living documentation
- ✅ Knowledge: Patterns captured and shared
- ✅ Evolution: Instructions evolve with project

---

# Example: Complete Instructions File

## Real-World Template

```markdown
# Project: E-Commerce API

## Tech Stack
- Express.js + TypeScript
- Prisma ORM + PostgreSQL
- Zod for validation
- Jest for testing
- JWT for authentication

## Code Standards

### Naming
- camelCase: functions and variables
- PascalCase: classes and interfaces
- UPPER_SNAKE_CASE: constants

### Error Handling
[Include full pattern with code example]

### API Design
[Include response format examples]

### Database
[Include Prisma patterns]

### Testing
[Include test structure]
```

*See Exercise 2 for complete example!*

---

# Instructions + Agent Mode

## Powerful Combination

**Without Instructions**:
```
Agent creates code → You correct style → Agent updates → Repeat
```

**With Instructions**:
```
Agent creates code → Already follows your patterns → Accept
```

**Result**: 
- 50% less iteration
- Faster acceptance
- Higher quality output

---

# Sharing Instructions Across Projects

## Templates and Standards

**Company-Wide**:
```
.github/
├── copilot-instructions-template.md
├── instructions/
    └── security-standards.instructions.md  # Reuse everywhere
```

**Project-Specific**:
```
.github/
├── copilot-instructions.md  # Import template + add specifics
```

**Benefits**:
- Consistent standards across teams
- Easy to onboard new projects
- Centralized best practices

---

# Versioning Instructions

## Track Changes Over Time

**Git History Shows Evolution**:
```bash
git log .github/copilot-instructions.md

# View specific version
git show abc123:.github/copilot-instructions.md
```

**Meaningful Commit Messages**:
```bash
git commit -m "instructions: add new error handling pattern"
git commit -m "instructions: deprecate class components"
git commit -m "instructions: add API versioning guidelines"
```

---

# Troubleshooting

## Instructions Not Working?

### Issue: Copilot Ignores Instructions
**Solutions**:
- Make instructions more specific
- Add concrete code examples
- Check file is in `.github/` directory
- Verify file name is correct
- Restart VS Code

### Issue: Conflicting Patterns
**Solutions**:
- Review for contradictions
- Prioritize one approach
- Remove outdated rules
- Be explicit about exceptions

---

# Hands-On Exercise

## Create Your Instructions

**Task**: Write custom instructions for your project

1. **Identify Patterns** (10 min)
   - What's unique about your project?
   - What do you repeat explaining?
   - What patterns do code reviews catch?

2. **Document Standards** (15 min)
   - Write `.github/copilot-instructions.md`
   - Include 3-5 key patterns
   - Add code examples

3. **Test Effectiveness** (10 min)
   - Ask Copilot to generate new code
   - Verify it follows your patterns
   - Iterate and improve

---

# Real-World Impact

## Case Studies

**Startup Team (5 developers)**:
- Before: 30% of code review comments on style
- After: 5% on style, focus on architecture
- Result: 2x faster code reviews

**Enterprise Team (50+ developers)**:
- Before: 2 weeks to onboard new developers
- After: 3 days with custom instructions
- Result: Faster productivity ramp-up

---

# Key Takeaways

## Remember These Points

✅ Custom instructions = **One-time configuration**
✅ Be **specific** with examples
✅ Use **path-specific** instructions for different areas
✅ **Test and iterate** regularly
✅ Keep instructions **updated** as patterns evolve
✅ **Share** templates across projects
✅ Instructions + Agent Mode = **Powerful combination**

---

# What's Next?

## Continue Learning

**Next Topic**: Custom Agents
- Create specialized AI experts
- Test engineer, refactoring specialist, etc.
- Chain agents for workflows

**Practice**:
- Complete Exercise 2
- Create instructions for your project
- Share with your team
- Measure the impact

---

# Resources

## Learn More

**Official Docs**:
- [Custom Instructions Guide](https://docs.github.com/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot)
- [Best Practices](https://github.blog/ai-and-ml/github-copilot/5-tips-for-writing-better-custom-instructions-for-copilot/)

**Examples**:
- [Instructions Repository](https://github.com/github/copilot-instructions-examples)
- [Community Templates](https://github.com/topics/copilot-instructions)

---

# Q&A 🙋

## Your Questions

- How detailed should instructions be?
- What if my team disagrees on patterns?
- Can instructions be too long?
- How often should we update them?
- Can we have multiple instruction files?
- Do instructions slow down Copilot?

**Ask anything about Custom Instructions!**

---

# Thank You! 🎯

## Custom Instructions Mastered

You now know how to:
- ✅ Create effective custom instructions
- ✅ Use path-specific instructions
- ✅ Test and measure effectiveness
- ✅ Share and maintain instructions

**Next**: Learn to create Custom Agents for specialized tasks!

---