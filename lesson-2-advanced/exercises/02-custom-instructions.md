# Exercise 2: Custom Instructions 📝

**Duration**: 20 minutes | **Difficulty**: Intermediate

## 🎯 Objectives

By the end of this exercise, you will:
- ✅ Create repository-wide custom instructions
- ✅ Implement path-specific instructions
- ✅ Test instruction effectiveness
- ✅ Understand instruction best practices

---

## 📚 Background

Custom instructions teach GitHub Copilot about your project's specific patterns, conventions, and requirements. They help Copilot:
- Follow your coding standards
- Use your preferred libraries and frameworks
- Understand your project structure
- Apply security and compliance rules

### Types of Custom Instructions

1. **Repository-wide**: `.github/copilot-instructions.md` - applies to all files
2. **Path-specific**: `.github/instructions/*.instructions.md` - applies to specific file paths
3. **User/Workspace**: Personal instructions in your IDE

---

## 🛠️ Part 1: Create Repository-Wide Instructions

### Step 1: Create the Instructions File

1. In your project root, create the directory structure:
   ```bash
   mkdir -p .github
   ```

2. Create `.github/copilot-instructions.md`

### Step 2: Write Effective Instructions

Add the following content to your `copilot-instructions.md`:

```markdown
# Project: E-Commerce Platform Custom Instructions

## Project Overview
This is a Node.js-based e-commerce platform using:
- Express.js for API
- PostgreSQL for database
- React for frontend
- Jest for testing

## Coding Standards

### General
- Use TypeScript strict mode for all new files
- Prefer async/await over promises chains
- Use functional programming patterns where applicable
- Maximum line length: 100 characters
- Use 2 spaces for indentation

### Naming Conventions
- Variables and functions: camelCase (e.g., `getUserData`)
- Classes and components: PascalCase (e.g., `UserProfile`)
- Constants: UPPER_SNAKE_CASE (e.g., `MAX_RETRY_COUNT`)
- Files: kebab-case for utilities (e.g., `user-service.ts`)
- Components: PascalCase (e.g., `UserProfile.tsx`)

### Error Handling
- Always use try-catch blocks for async operations
- Create custom error classes that extend Error
- Include error codes for all custom errors
- Log errors with context using our logging service
- Never expose internal error details to clients

Example:
```typescript
try {
  await riskyOperation();
} catch (error) {
  logger.error('Operation failed', { error, context: 'user-service' });
  throw new ServiceError('OPERATION_FAILED', 'Unable to complete operation');
}
```

### API Design
- RESTful endpoints follow: `/api/v1/{resource}/{id}`
- Use plural nouns for collections: `/api/v1/users`
- Use HTTP status codes correctly:
  - 200: Success
  - 201: Created
  - 400: Bad request
  - 401: Unauthorized
  - 403: Forbidden
  - 404: Not found
  - 500: Internal server error

### Database
- Use Prisma ORM for all database operations
- Never write raw SQL queries (use Prisma query builder)
- Always use transactions for multi-step operations
- Use soft deletes (deletedAt timestamp) instead of hard deletes

### Security
- Never log sensitive data (passwords, tokens, PII)
- Sanitize all user inputs
- Use bcrypt with 12 rounds for password hashing
- JWT tokens expire in 1 hour
- Always validate request payloads with Zod schemas

### Testing
- Write unit tests for all services and utilities
- Use Jest with ts-jest
- Mock external dependencies
- Aim for 80%+ code coverage
- Test file naming: `{filename}.test.ts`

Example test structure:
```typescript
describe('UserService', () => {
  describe('createUser', () => {
    it('should create a user with valid data', async () => {
      // Arrange
      const userData = { email: 'test@example.com', password: 'password123' };
      
      // Act
      const user = await userService.createUser(userData);
      
      // Assert
      expect(user.email).toBe(userData.email);
      expect(user.password).not.toBe(userData.password); // Should be hashed
    });
  });
});
```

### React Components
- Use functional components with hooks
- Implement error boundaries for route components
- Use React.memo for expensive components
- Props interface naming: `{ComponentName}Props`

Example:
```typescript
interface UserProfileProps {
  userId: string;
  onUpdate?: (user: User) => void;
}

export const UserProfile: React.FC<UserProfileProps> = ({ userId, onUpdate }) => {
  // Component implementation
};
```

### Documentation
- All public functions must have JSDoc comments
- Include @param and @returns tags
- Complex algorithms need explanatory comments
- README files must be up to date

Example:
```typescript
/**
 * Retrieves user data from the database
 * @param userId - The unique identifier of the user
 * @returns Promise resolving to User object
 * @throws {NotFoundError} If user doesn't exist
 */
async function getUserData(userId: string): Promise<User> {
  // Implementation
}
```

## File Organization
```
src/
├── api/          # Express routes and controllers
├── services/     # Business logic
├── models/       # Prisma models
├── utils/        # Helper functions
├── middleware/   # Express middleware
└── types/        # TypeScript type definitions
```

## Available Scripts
- `npm run dev` - Start development server
- `npm test` - Run all tests
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Run ESLint
- `npm run build` - Build for production

## Common Patterns

### Service Pattern
```typescript
export class UserService {
  constructor(private prisma: PrismaClient) {}
  
  async create(data: CreateUserDto): Promise<User> {
    // Implementation
  }
  
  async findById(id: string): Promise<User | null> {
    // Implementation
  }
}
```

### Controller Pattern
```typescript
export const createUser = async (req: Request, res: Response) => {
  try {
    const validatedData = CreateUserSchema.parse(req.body);
    const user = await userService.create(validatedData);
    res.status(201).json({ data: user });
  } catch (error) {
    handleError(error, res);
  }
};
```

## External Dependencies to Prefer
- Date manipulation: date-fns (NOT moment.js)
- Validation: Zod
- HTTP requests: axios
- Testing: Jest + Supertest
- Logging: winston
```

### Step 3: Commit and Test

1. Commit the file to your repository:
   ```bash
   git add .github/copilot-instructions.md
   git commit -m "Add Copilot custom instructions"
   git push
   ```

2. Test the instructions:
   - Open GitHub Copilot Chat
   - Ask: "Create a new service for handling product operations"
   - Observe that Copilot follows your patterns

---

## 🛠️ Part 2: Create Path-Specific Instructions

### Step 1: Create Instructions Directory

```bash
mkdir -p .github/instructions
```

### Step 2: Create React-Specific Instructions

Create `.github/instructions/react-components.instructions.md`:

```markdown
---
applyTo:
  - "src/components/**/*.tsx"
  - "src/pages/**/*.tsx"
---

# React Component Instructions

## Component Structure
- Always use TypeScript
- Export components as named exports
- Place interfaces at the top of the file
- Use React.FC type for functional components

## State Management
- Use useState for local state
- Use useReducer for complex state logic
- Use React Query for server state
- Use Context API sparingly

## Styling
- Use CSS Modules for component styles
- File naming: `ComponentName.module.css`
- Use semantic class names
- Mobile-first responsive design

## Accessibility
- Include aria-labels for interactive elements
- Use semantic HTML elements
- Ensure keyboard navigation works
- Test with screen readers

## Performance
- Lazy load route components
- Use React.memo for expensive renders
- Implement virtual scrolling for long lists
- Debounce search inputs

## Example Component Template
```typescript
import React, { useState, useEffect } from 'react';
import styles from './MyComponent.module.css';

interface MyComponentProps {
  title: string;
  onAction?: () => void;
}

export const MyComponent: React.FC<MyComponentProps> = ({ title, onAction }) => {
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    // Side effects here
  }, []);
  
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      {/* Component content */}
    </div>
  );
};
```
```

### Step 3: Create API-Specific Instructions

Create `.github/instructions/api-routes.instructions.md`:

```markdown
---
applyTo:
  - "src/api/**/*.ts"
  - "src/routes/**/*.ts"
---

# API Route Instructions

## Request Validation
- Always validate request body with Zod schemas
- Validate query parameters
- Sanitize all inputs

## Response Format
All successful responses should follow this structure:
```json
{
  "data": { /* actual data */ },
  "meta": {
    "timestamp": "2024-01-15T10:30:00Z",
    "requestId": "abc-123"
  }
}
```

Error responses:
```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Human-readable message",
    "details": [/* validation errors */]
  }
}
```

## Middleware Chain
Apply in this order:
1. Rate limiting
2. Authentication
3. Request validation
4. Authorization
5. Business logic

## Example Route
```typescript
import { Router } from 'express';
import { z } from 'zod';
import { authenticate, validateRequest } from '../middleware';
import { UserService } from '../services';

const router = Router();
const userService = new UserService();

const CreateUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(2)
});

router.post(
  '/users',
  authenticate,
  validateRequest(CreateUserSchema),
  async (req, res) => {
    try {
      const user = await userService.create(req.body);
      res.status(201).json({ data: user });
    } catch (error) {
      handleError(error, res);
    }
  }
);

export default router;
```
```

### Step 4: Create Test-Specific Instructions

Create `.github/instructions/tests.instructions.md`:

```markdown
---
applyTo:
  - "**/*.test.ts"
  - "**/*.spec.ts"
  - "src/__tests__/**/*.ts"
---

# Test Instructions

## Test Structure
Use AAA pattern:
- **Arrange**: Set up test data and mocks
- **Act**: Execute the code under test
- **Assert**: Verify the results

## Naming
- Describe blocks: Noun (class/function name)
- It blocks: Should + behavior

## Mocking
- Mock external dependencies
- Use jest.mock() for modules
- Use jest.spyOn() for methods
- Clear mocks between tests

## Coverage Requirements
- Services: 90%+
- Controllers: 80%+
- Utilities: 100%
- Components: 70%+

## Example Test Suite
```typescript
import { UserService } from '../services/UserService';
import { PrismaClient } from '@prisma/client';

jest.mock('@prisma/client');

describe('UserService', () => {
  let userService: UserService;
  let prisma: jest.Mocked<PrismaClient>;
  
  beforeEach(() => {
    prisma = new PrismaClient() as jest.Mocked<PrismaClient>;
    userService = new UserService(prisma);
  });
  
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  describe('createUser', () => {
    it('should create a user with hashed password', async () => {
      // Arrange
      const userData = { email: 'test@example.com', password: 'password123' };
      const mockUser = { id: '1', ...userData, password: 'hashed_password' };
      prisma.user.create.mockResolvedValue(mockUser);
      
      // Act
      const result = await userService.createUser(userData);
      
      // Assert
      expect(result.password).not.toBe(userData.password);
      expect(prisma.user.create).toHaveBeenCalledTimes(1);
    });
    
    it('should throw error for duplicate email', async () => {
      // Arrange
      const userData = { email: 'test@example.com', password: 'password123' };
      prisma.user.create.mockRejectedValue(new Error('Unique constraint violation'));
      
      // Act & Assert
      await expect(userService.createUser(userData)).rejects.toThrow();
    });
  });
});
```
```

---

## 🧪 Part 3: Test Your Instructions

### Test 1: Create a New Service

1. Open Copilot Chat
2. Ask: "Create a ProductService class with methods to create, find, update, and delete products"
3. Verify that Copilot:
   - ✅ Uses TypeScript
   - ✅ Follows the service pattern from instructions
   - ✅ Includes proper error handling
   - ✅ Uses Prisma for database operations
   - ✅ Includes JSDoc comments

### Test 2: Create a React Component

1. Create a new file: `src/components/ProductCard.tsx`
2. In Copilot Chat, ask: "Create a ProductCard component that displays product information"
3. Verify that Copilot:
   - ✅ Uses React.FC with TypeScript
   - ✅ Defines ProductCardProps interface
   - ✅ Uses CSS Modules for styling
   - ✅ Includes accessibility attributes
   - ✅ Follows naming conventions

### Test 3: Create an API Route

1. Create a new file: `src/api/products.ts`
2. Ask: "Create a POST endpoint for creating products"
3. Verify that Copilot:
   - ✅ Uses Express Router
   - ✅ Includes Zod schema validation
   - ✅ Follows the middleware chain
   - ✅ Uses correct response format
   - ✅ Includes error handling

### Test 4: Create Tests

1. Create a new file: `src/services/ProductService.test.ts`
2. Ask: "Create unit tests for ProductService"
3. Verify that Copilot:
   - ✅ Uses Jest with proper mocking
   - ✅ Follows AAA pattern
   - ✅ Includes multiple test cases
   - ✅ Uses descriptive test names
   - ✅ Cleans up mocks properly

---

## 💡 Best Practices

### Do's ✅

1. **Be Specific**: Provide exact patterns and examples
2. **Keep It Concise**: Focus on what's unique to your project
3. **Use Examples**: Show the pattern you want followed
4. **Update Regularly**: Keep instructions current with your codebase
5. **Test Thoroughly**: Verify instructions work as expected
6. **Version Control**: Track changes to instructions

### Don'ts ❌

1. **Too General**: "Write good code" is not helpful
2. **Too Long**: Keep under 1000 lines per file
3. **Contradictory**: Ensure instructions don't conflict
4. **Overly Complex**: Simple, clear instructions work best
5. **Neglecting Updates**: Outdated instructions cause confusion

---

## 📊 Measuring Effectiveness

### Checklist for Good Instructions

- [ ] Copilot generates code matching your patterns
- [ ] Fewer manual corrections needed
- [ ] Consistent code style across the project
- [ ] Proper error handling implemented
- [ ] Security best practices followed
- [ ] Tests generated correctly
- [ ] Documentation included automatically

### Common Issues and Solutions

| Issue | Solution |
|-------|----------|
| Copilot ignores instructions | Make instructions more specific with examples |
| Instructions conflict | Review for contradictions, prioritize |
| Too verbose output | Add conciseness guidelines |
| Missing error handling | Add explicit error handling patterns |
| Inconsistent naming | Provide clear naming convention examples |

---

## 🎯 Challenge Tasks

### Challenge 1: Enhance Your Instructions
Add instructions for:
- Performance optimization guidelines
- Caching strategies
- Rate limiting patterns

### Challenge 2: Create Domain-Specific Instructions
Create instruction files for:
- Database migrations
- Configuration files
- Deployment scripts

### Challenge 3: Team Instructions
Collaborate with your team to:
- Review and refine instructions
- Add team-specific patterns
- Document lessons learned

---

## 📚 Additional Resources

- [GitHub Copilot Custom Instructions Documentation](https://docs.github.com/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot)[web:16]
- [Best Practices for Custom Instructions](https://github.blog/ai-and-ml/github-copilot/5-tips-for-writing-better-custom-instructions-for-copilot/)[web:79]
- [Custom Instructions Tutorial](https://docs.github.com/en/copilot/tutorials/use-custom-instructions)[web:70]

---

## ✅ Completion Checklist

- [ ] Created `.github/copilot-instructions.md`
- [ ] Created path-specific instructions for React components
- [ ] Created path-specific instructions for API routes
- [ ] Created path-specific instructions for tests
- [ ] Tested instructions with real code generation
- [ ] Verified Copilot follows your patterns
- [ ] Committed instructions to repository
- [ ] Shared with team for feedback

---

**Congratulations!** 🎉 You've successfully configured custom instructions for GitHub Copilot.

**Next**: Move on to [Exercise 3: Custom Agents](./03-custom-agents.md) to learn how to create specialized agents.