# Exercise 6: Hands-On Scenarios 🎯

**Duration**: 30-45 minutes | **Difficulty**: Intermediate to Advanced

## 🎯 Objectives

This exercise provides **ready-to-use code scenarios** for practicing all Lesson 2 concepts:
- Custom Instructions
- Custom Agents  
- MCP Integration
- Agent Mode workflows

Each scenario includes:
- ✅ **Starter code** to work with
- ✅ **Specific tasks** to accomplish
- ✅ **Expected outcomes** to verify
- ✅ **Copilot prompts** to try

---

## 📋 Scenario 1: E-Commerce API with Custom Instructions

### Setup

1. Create a new directory:
   ```bash
   mkdir ecommerce-api
   cd ecommerce-api
   npm init -y
   npm install express typescript zod prisma bcrypt jsonwebtoken
   ```

2. Create `.github/copilot-instructions.md`:

```markdown
# E-Commerce API Custom Instructions

## Tech Stack
- Express.js for API
- TypeScript strict mode
- Prisma ORM
- Zod for validation
- JWT authentication

## Code Standards

### API Response Format
All successful responses:
```json
{
  "success": true,
  "data": { /* payload */ },
  "meta": {
    "timestamp": "ISO-8601",
    "requestId": "uuid"
  }
}
```

All error responses:
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable message",
    "details": []
  }
}
```

### Service Layer Pattern
Every entity has a service class:
```typescript
export class ProductService {
  constructor(private prisma: PrismaClient) {}
  
  async create(data: CreateProductDto): Promise<Product> {
    // Business logic
    // Validation
    // Database operation
    // Return result
  }
  
  async findById(id: string): Promise<Product | null> {
    return await this.prisma.product.findUnique({ where: { id } });
  }
}
```

### Error Handling
Always use custom error classes:
```typescript
export class ValidationError extends Error {
  code = 'VALIDATION_ERROR';
  statusCode = 400;
  constructor(message: string, public details: any[] = []) {
    super(message);
  }
}

export class NotFoundError extends Error {
  code = 'NOT_FOUND';
  statusCode = 404;
  constructor(resource: string) {
    super(`${resource} not found`);
  }
}
```

### Route Structure
Use this pattern for all routes:
```typescript
import { Router } from 'express';
import { authenticate, validateRequest } from '../middleware';
import { ProductService } from '../services/ProductService';
import { CreateProductSchema } from '../schemas';

const router = Router();
const productService = new ProductService(prisma);

// POST /api/v1/products
router.post(
  '/products',
  authenticate,
  validateRequest(CreateProductSchema),
  async (req, res, next) => {
    try {
      const product = await productService.create(req.body);
      res.status(201).json({
        success: true,
        data: product,
        meta: {
          timestamp: new Date().toISOString(),
          requestId: req.id
        }
      });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
```
```

### Task 1: Create Product Service

**Starter Code** - Create `src/services/ProductService.ts`:

```typescript
import { PrismaClient, Product } from '@prisma/client';

export class ProductService {
  constructor(private prisma: PrismaClient) {}
  
  // TODO: Implement methods
}
```

**Copilot Prompt**:
```
Implement a complete ProductService class with methods for:
1. create(data) - Create a new product with validation
2. findById(id) - Get product by ID
3. findAll(filters) - List products with pagination
4. update(id, data) - Update existing product
5. delete(id) - Soft delete a product

Follow the project custom instructions for:
- Service layer pattern
- Error handling with custom error classes
- Validation
- Soft deletes (deletedAt field)
```

**Expected Outcome**:
- ✅ Complete service class with all CRUD operations
- ✅ Custom error handling (ValidationError, NotFoundError)
- ✅ Proper TypeScript types
- ✅ Pagination support
- ✅ Soft delete implementation

### Task 2: Create Product Routes

**Copilot Prompt**:
```
Create Express routes for the ProductService at /api/v1/products following the custom instructions:

1. POST /products - Create product (authenticated)
2. GET /products - List products with pagination
3. GET /products/:id - Get single product
4. PUT /products/:id - Update product (authenticated)
5. DELETE /products/:id - Delete product (authenticated)

Follow the route structure pattern from custom instructions.
Include proper middleware chain and error handling.
```

**Expected Outcome**:
- ✅ RESTful API endpoints
- ✅ Authentication middleware on protected routes
- ✅ Request validation with Zod schemas
- ✅ Proper response format
- ✅ Error handling middleware

### Task 3: Test with Test Engineer Agent

**Switch to `test-engineer` agent**, then:

```
Create comprehensive tests for ProductService including:

1. Unit tests for all CRUD operations
2. Test success and failure scenarios
3. Test validation errors
4. Test soft delete functionality
5. Mock Prisma database calls
6. Achieve 80%+ code coverage

Follow AAA pattern and use Jest.
```

**Expected Outcome**:
- ✅ Complete test suite
- ✅ Mocked Prisma client
- ✅ Tests for edge cases
- ✅ Clear test structure

---

## 📋 Scenario 2: React Dashboard with Path-Specific Instructions

### Setup

1. Create React app:
   ```bash
   npx create-react-app dashboard-app --template typescript
   cd dashboard-app
   ```

2. Create `.github/instructions/components.instructions.md`:

```markdown
---
applyTo:
  - "src/components/**/*.tsx"
  - "src/pages/**/*.tsx"
---

# React Component Instructions

## Component Template

```typescript
import React, { useState, useEffect } from 'react';
import styles from './ComponentName.module.css';

interface ComponentNameProps {
  title: string;
  data?: DataType[];
  onAction?: (id: string) => void;
}

export const ComponentName: React.FC<ComponentNameProps> = ({
  title,
  data = [],
  onAction
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    // Side effects
  }, []);
  
  const handleAction = (id: string) => {
    onAction?.(id);
  };
  
  if (error) {
    return <div className={styles.error}>{error}</div>;
  }
  
  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }
  
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      {/* Component content */}
    </div>
  );
};
```

## State Management Rules
- Local state: `useState` for simple values
- Complex state: `useReducer`
- Server state: React Query (not Context)
- Forms: React Hook Form + Zod

## Accessibility Requirements
- All images have alt text
- Interactive elements have aria-labels
- Semantic HTML (button not div with onClick)
- Keyboard navigation support
- Focus indicators visible

## Performance Rules
- Lazy load route components
- Use React.memo for expensive components
- Debounce search inputs (300ms)
- Virtual scrolling for lists > 100 items
```

### Task 1: Create Dashboard Card Component

**Copilot Prompt**:
```
Create a DashboardCard component that displays:
- Title
- Value (number with optional formatting)
- Trend indicator (up/down arrow with percentage)
- Optional action button

Follow the component template and accessibility rules from custom instructions.
Include proper TypeScript types and CSS Modules.
```

**Expected Outcome**:
- ✅ Proper component structure
- ✅ TypeScript interfaces
- ✅ CSS Modules import
- ✅ Accessibility attributes
- ✅ Loading and error states

### Task 2: Create Data Table with Pagination

**Copilot Prompt**:
```
Create a DataTable component with:
- Generic type support for any data shape
- Column configuration (header, accessor, renderer)
- Sorting (client-side)
- Pagination (page size: 10, 25, 50)
- Loading skeleton
- Empty state
- Row selection (checkboxes)

Follow React component instructions.
Use semantic HTML table elements.
Include full keyboard navigation.
```

**Expected Outcome**:
- ✅ Generic TypeScript component
- ✅ Column configuration interface
- ✅ Sorting functionality
- ✅ Pagination controls
- ✅ Accessibility support
- ✅ Keyboard navigation

### Task 3: Document with Doc Writer Agent

**Switch to `doc-writer` agent**:

```
Create comprehensive documentation for the DashboardCard and DataTable components including:

1. Component purpose and use cases
2. Props documentation with types
3. Usage examples
4. Styling customization guide
5. Accessibility features
6. Performance considerations

Format as JSDoc comments in the code and a separate COMPONENTS.md file.
```

**Expected Outcome**:
- ✅ JSDoc comments on components
- ✅ Detailed COMPONENTS.md file
- ✅ Usage examples
- ✅ Props tables

---

## 📋 Scenario 3: GitHub MCP Workflow Automation

### Prerequisites
- GitHub MCP server configured (see Exercise 4)
- GitHub Personal Access Token with repo access
- Active GitHub repository

### Task 1: Issue Management Workflow

**Enable Agent Mode and use GitHub MCP**:

```
Use GitHub MCP to:

1. List all open issues in this repository
2. Filter for issues labeled "bug" and "high-priority"
3. For each high-priority bug:
   - Check if it has an assignee
   - If not assigned, check when it was created
   - If older than 7 days, add comment: "This issue needs attention"
4. Create a summary report of all high-priority bugs
```

**Expected Outcome**:
- ✅ List of issues retrieved via MCP
- ✅ Filtered results
- ✅ Comments added to old unassigned issues
- ✅ Summary report generated

### Task 2: PR Review Automation

**Copilot Prompt**:
```
Use GitHub MCP to:

1. Find all open pull requests
2. For each PR:
   - Check if it has been reviewed
   - List the files changed
   - Check if tests were added/modified
   - Verify PR description is not empty
3. Create a checklist of PRs that need:
   - Review
   - Tests
   - Better description
```

**Expected Outcome**:
- ✅ PR list with review status
- ✅ File change analysis
- ✅ Test coverage check
- ✅ Quality checklist

### Task 3: Code Search and Documentation

**Copilot Prompt**:
```
Use GitHub MCP to:

1. Search for all functions containing "authentication" in the codebase
2. For each result:
   - Extract the function signature
   - Check if it has JSDoc comments
   - Note which file it's in
3. Create a documentation file listing:
   - All authentication-related functions
   - Their locations
   - Which ones need documentation
4. Create issues for undocumented functions
```

**Expected Outcome**:
- ✅ Code search results
- ✅ Documentation audit
- ✅ Missing docs identified
- ✅ Issues created automatically

---

## 📋 Scenario 4: Playwright MCP for E2E Testing

### Prerequisites
- Playwright MCP server configured
- Local web application running (or use public site)

### Task 1: Automated Login Test

**Copilot Prompt with Playwright MCP**:
```
Use Playwright MCP to create and run an E2E test:

1. Navigate to http://localhost:3000/login
2. Fill in email: "test@example.com"
3. Fill in password: "password123"
4. Click the "Login" button
5. Wait for navigation to /dashboard
6. Verify the page contains "Welcome" text
7. Take a screenshot of the dashboard
8. Generate a test report
```

**Expected Outcome**:
- ✅ Browser automation executed
- ✅ Form filled correctly
- ✅ Navigation verified
- ✅ Screenshot captured
- ✅ Test report generated

### Task 2: Form Validation Testing

**Copilot Prompt**:
```
Use Playwright to test form validation:

1. Navigate to /register
2. Test invalid email formats:
   - Enter "notanemail"
   - Click submit
   - Verify error message appears
3. Test password requirements:
   - Enter password less than 8 characters
   - Verify error message
4. Test successful registration:
   - Fill valid email and password
   - Submit form
   - Verify success message or redirect
5. Take screenshots at each step
```

**Expected Outcome**:
- ✅ Validation errors triggered
- ✅ Error messages verified
- ✅ Success flow tested
- ✅ Visual proof via screenshots

### Task 3: Performance Testing

**Copilot Prompt**:
```
Use Playwright MCP to test page performance:

1. Navigate to the main application page
2. Measure and report:
   - Time to first contentful paint
   - Time to interactive
   - Total page load time
3. Navigate through 5 different pages
4. Collect performance metrics for each
5. Create a performance report with recommendations
```

**Expected Outcome**:
- ✅ Performance metrics collected
- ✅ Multiple pages tested
- ✅ Comparison data
- ✅ Performance report

---

## 📋 Scenario 5: Multi-Agent Refactoring Workflow

### Setup

**Starter Code** - Legacy user authentication:

```typescript
// auth.ts - Legacy code with issues
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const users = []; // In-memory storage

export function register(email, password) {
  // No validation
  const hashedPassword = bcrypt.hashSync(password, 10);
  const user = {
    id: users.length + 1,
    email: email,
    password: hashedPassword
  };
  users.push(user);
  return user;
}

export function login(email, password) {
  const user = users.find(u => u.email === email);
  if (!user) {
    throw new Error('User not found');
  }
  
  const isValid = bcrypt.compareSync(password, user.password);
  if (!isValid) {
    throw new Error('Invalid password');
  }
  
  const token = jwt.sign({ userId: user.id }, 'secret', { expiresIn: '1h' });
  return { token, user };
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, 'secret');
  } catch (error) {
    throw new Error('Invalid token');
  }
}
```

### Task 1: Code Review with Refactor Specialist

**Switch to `refactor-specialist` agent**:

```
Review this authentication code and identify:

1. Security issues
2. Type safety problems
3. Error handling issues
4. Code organization problems
5. Missing functionality

Provide a detailed refactoring plan with priorities.
```

**Expected Outcome**:
- ✅ Security issues identified (hardcoded secret, etc.)
- ✅ Missing types noted
- ✅ Weak error handling highlighted
- ✅ Refactoring plan with steps

### Task 2: Implement Improvements with Agent Mode

**Enable regular Agent Mode**:

```
Refactor the authentication code to:

1. Add TypeScript with strict types
2. Use environment variables for JWT secret
3. Implement proper error classes
4. Add input validation with Zod
5. Replace in-memory storage with Prisma
6. Add password strength validation
7. Implement refresh tokens
8. Add rate limiting
9. Hash refresh tokens in database
10. Add proper logging

Create new files:
- src/auth/AuthService.ts (service layer)
- src/auth/schemas.ts (Zod schemas)
- src/auth/errors.ts (custom errors)
- src/auth/middleware.ts (auth middleware)
```

**Expected Outcome**:
- ✅ Multiple files created
- ✅ TypeScript implementation
- ✅ Proper architecture
- ✅ Security improvements
- ✅ Database integration

### Task 3: Add Tests with Test Engineer

**Switch to `test-engineer` agent**:

```
Create comprehensive tests for the refactored authentication system:

1. AuthService unit tests:
   - Registration with valid/invalid data
   - Login success/failure scenarios
   - Token generation and validation
   - Refresh token flow
   - Password strength validation

2. Integration tests:
   - Full registration flow
   - Login and token refresh
   - Expired token handling
   - Database interactions

3. Security tests:
   - SQL injection attempts
   - XSS in inputs
   - Brute force protection
   - Token tampering

Achieve 90%+ code coverage.
```

**Expected Outcome**:
- ✅ Complete test suite
- ✅ Unit and integration tests
- ✅ Security test cases
- ✅ High coverage

### Task 4: Document with Doc Writer

**Switch to `doc-writer` agent**:

```
Create comprehensive documentation for the authentication system:

1. API.md:
   - All endpoints
   - Request/response formats
   - Authentication flow
   - Error codes

2. SECURITY.md:
   - Security measures implemented
   - Token handling
   - Password requirements
   - Rate limiting details

3. JSDoc comments:
   - All public methods
   - Parameters and return types
   - Example usage

4. MIGRATION.md:
   - How to migrate from old to new auth
   - Breaking changes
   - Migration script
```

**Expected Outcome**:
- ✅ Complete API documentation
- ✅ Security documentation
- ✅ Code comments
- ✅ Migration guide

---

## 🎯 Verification Checklist

After completing scenarios, verify:

### Custom Instructions
- [ ] Instructions file exists in `.github/`
- [ ] Copilot follows project patterns
- [ ] Generated code matches examples
- [ ] Fewer manual corrections needed
- [ ] Team patterns consistently applied

### Custom Agents
- [ ] Agents created in `.github/agents/`
- [ ] Each agent has clear purpose
- [ ] Tools properly configured
- [ ] Agents produce expected output
- [ ] Workflow chaining works

### MCP Integration
- [ ] MCP servers configured in settings
- [ ] GitHub MCP commands work
- [ ] Playwright MCP runs tests
- [ ] External data accessed successfully
- [ ] Workflows automated correctly

### Agent Mode
- [ ] Multi-file changes executed
- [ ] Plans reviewed before execution
- [ ] Errors handled gracefully
- [ ] Iterations work correctly
- [ ] Final code is production-ready

---

## 💡 Tips for Success

### Prompt Engineering

**Be Specific**:
- ❌ "Create a user service"
- ✅ "Create a UserService class with CRUD operations following the service layer pattern from custom instructions, including error handling and Prisma database integration"

**Provide Context**:
- ❌ "Add validation"
- ✅ "Add validation using Zod schemas as specified in our custom instructions, with error messages in the format defined in our API response standards"

**Set Constraints**:
- ❌ "Make it secure"
- ✅ "Implement security following our standards: bcrypt with 12 rounds, JWT with 1-hour expiry, refresh tokens stored hashed in database, rate limiting at 5 requests per minute"

### Reviewing Agent Output

1. **Always Review Plans**: Check what files will be modified
2. **Verify Patterns**: Ensure custom instructions were followed
3. **Test Thoroughly**: Run tests before accepting
4. **Check Security**: Review for vulnerabilities
5. **Validate Types**: Ensure TypeScript types are correct

### Iteration Strategy

1. **Start Small**: Basic implementation first
2. **Add Complexity**: Enhance in stages
3. **Refine Quality**: Improve error handling, types
4. **Add Tests**: Comprehensive test coverage
5. **Polish Docs**: Complete documentation

---

## 📊 Expected Time Investment

- **Scenario 1** (E-Commerce API): 45-60 minutes
- **Scenario 2** (React Dashboard): 30-45 minutes
- **Scenario 3** (GitHub MCP): 20-30 minutes
- **Scenario 4** (Playwright): 20-30 minutes
- **Scenario 5** (Multi-Agent): 60-90 minutes

**Total**: 2.5 - 4 hours for all scenarios

**Recommendation**: Complete 1-2 scenarios per session

---

## 🚀 Next Steps

1. **Choose a scenario** that matches your work
2. **Set up the environment** (5-10 min)
3. **Work through tasks** using Copilot
4. **Compare your results** with expected outcomes
5. **Iterate and improve** your approach
6. **Apply to real projects** in your work

---

## 📚 Additional Resources

- [GitHub Copilot Best Practices](https://docs.github.com/copilot/using-github-copilot/best-practices-for-using-github-copilot)
- [Custom Instructions Examples](https://github.com/github/copilot-instructions-examples)
- [Agent Patterns Repository](https://github.com/microsoft/copilot-agent-patterns)
- [MCP Server Directory](https://github.com/modelcontextprotocol/servers)

---

**Ready to build something amazing with Copilot?** 🚀

Pick a scenario and let's get started!