# Exercise 5: Weather App Refactor - Real-World Project 🌤️

**Duration**: 30 minutes | **Difficulty**: Advanced | **Type**: Capstone Project

## 🎯 Objectives

Apply **all Lesson 2 concepts** in a single integrated project:
- ✅ Use **Agent Mode** for multi-file refactoring
- ✅ Apply **Custom Instructions** for consistent patterns
- ✅ Leverage **Custom Agents** for specialized tasks
- ✅ Implement **modern best practices**
- ✅ Add **comprehensive tests**
- ✅ Create **production-ready code**

This exercise simulates a **real-world scenario**: You inherit a legacy weather app that works but needs modernization.

---

## 📋 Project Overview

### The Scenario

Your team inherited a working weather application with technical debt:
- ❌ No TypeScript
- ❌ No error handling
- ❌ Inconsistent code style
- ❌ No tests
- ❌ Hardcoded API keys
- ❌ Poor separation of concerns
- ❌ No loading states
- ❌ Limited features

**Your mission**: Refactor it into a production-ready application using Copilot's advanced features.

---

## 🛠️ Setup (5 minutes)

### Step 1: Create Project Structure

```bash
mkdir weather-app-refactor
cd weather-app-refactor
npm init -y
```

### Step 2: Install Dependencies

```bash
npm install express axios dotenv
npm install --save-dev typescript @types/node @types/express ts-node nodemon jest @types/jest ts-jest
```

### Step 3: Create Legacy Code

Create `src/app.js` with the legacy code:

```javascript
const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Hardcoded API key - BAD!
const API_KEY = 'your-api-key-here';

app.get('/weather', async (req, res) => {
  const city = req.query.city;
  
  // No validation
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  
  // No error handling
  const response = await axios.get(url);
  
  // No transformation
  res.json(response.data);
});

app.get('/forecast', async (req, res) => {
  const city = req.query.city;
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`;
  const response = await axios.get(url);
  res.json(response.data);
});

app.listen(port, () => {
  console.log('Server running');
});
```

---

## 📝 Task 1: Setup Custom Instructions (5 minutes)

### Create `.github/copilot-instructions.md`

```markdown
# Weather App Custom Instructions

## Project Overview
- **Purpose**: Weather forecasting application
- **Tech Stack**: Node.js, Express, TypeScript, Axios
- **Architecture**: Service layer pattern with clean separation

## Code Standards

### TypeScript Configuration
- Strict mode enabled
- No implicit any
- ES2020+ features
- Path aliases: `@/` for src directory

### Service Layer Pattern
Every external API has a service class:

\`\`\`typescript
export class WeatherService {
  constructor(
    private apiKey: string,
    private baseUrl: string,
    private httpClient: HttpClient
  ) {}
  
  async getCurrentWeather(city: string): Promise<WeatherData> {
    // Implementation
  }
}
\`\`\`

### Error Handling
Use custom error classes:

\`\`\`typescript
export class WeatherApiError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode: number,
    public originalError?: Error
  ) {
    super(message);
    this.name = 'WeatherApiError';
  }
}
\`\`\`

Error responses follow this format:
\`\`\`json
{
  "error": {
    "message": "City not found",
    "code": "CITY_NOT_FOUND",
    "timestamp": "2026-02-02T17:00:00Z"
  }
}
\`\`\`

### API Response Format
Success responses:
\`\`\`json
{
  "data": {
    "city": "Dallas",
    "temperature": 72,
    "conditions": "Sunny",
    "humidity": 45,
    "windSpeed": 10
  },
  "meta": {
    "timestamp": "2026-02-02T17:00:00Z",
    "source": "OpenWeatherMap"
  }
}
\`\`\`

### Input Validation
- Use Zod for request validation
- Validate city names (no special characters, max 100 chars)
- Sanitize all inputs
- Rate limiting: 100 requests per 15 minutes per IP

### Environment Configuration
- Never hardcode API keys
- Use dotenv for configuration
- Validate required env vars on startup
- Provide .env.example file

### Route Structure
\`\`\`typescript
// routes/weather.routes.ts
import { Router } from 'express';
import { WeatherController } from '@/controllers/WeatherController';
import { validateRequest } from '@/middleware/validation';
import { GetWeatherSchema } from '@/schemas/weather.schema';

const router = Router();
const weatherController = new WeatherController();

router.get(
  '/weather',
  validateRequest(GetWeatherSchema),
  weatherController.getCurrentWeather
);

export default router;
\`\`\`

### Testing Requirements
- Unit tests for all services
- Integration tests for all endpoints
- Mock external API calls
- Minimum 80% code coverage
- Use Jest with ts-jest

### Logging
- Use structured logging (console.log wrapper)
- Log levels: error, warn, info, debug
- Include timestamps and context
- Never log sensitive data (API keys, tokens)
\`\`\`

### Task: Create the Instructions File

**Copilot Prompt**:
```
Create .github/copilot-instructions.md based on the content above.
Ensure it's properly formatted and complete.
```

---

## 🤖 Task 2: Create Custom Agents (5 minutes)

### Create Test Engineer Agent

Create `.github/agents/test-engineer.md`:

**Copilot Prompt**:
```
Create a test-engineer custom agent with:

Name: test-engineer
Description: Expert in comprehensive testing for Node.js/TypeScript applications

Tools: read, edit, create, terminal

Agent Instructions:
- Specialize in Jest and ts-jest
- Follow AAA pattern (Arrange, Act, Assert)
- Mock external dependencies
- Test success and failure scenarios
- Include edge cases
- Write clear test descriptions
- Aim for 80%+ code coverage
- Use beforeEach for test setup
- Clean up after tests (afterEach)

Save to .github/agents/test-engineer.md
```

### Create Refactor Specialist Agent

Create `.github/agents/refactor-specialist.md`:

**Copilot Prompt**:
```
Create a refactor-specialist custom agent with:

Name: refactor-specialist
Description: Expert in code refactoring and quality improvements

Tools: read, edit, search, analysis

Agent Instructions:
- Identify code smells and anti-patterns
- Suggest modern JavaScript/TypeScript patterns
- Improve separation of concerns
- Extract reusable functions
- Reduce code duplication
- Improve naming conventions
- Add proper error handling
- Enhance type safety
- Follow SOLID principles
- Maintain backward compatibility when possible

Save to .github/agents/refactor-specialist.md
```

---

## 🚀 Task 3: Refactor with Agent Mode (10 minutes)

### Step 1: Initial Assessment with Refactor Specialist

**Switch to `@refactor-specialist` agent**:

```
Review src/app.js and provide a refactoring plan covering:

1. TypeScript migration
2. Project structure improvements
3. Security issues (hardcoded API key)
4. Error handling gaps
5. Missing validation
6. Code organization issues
7. Testing requirements

Prioritize issues by severity and provide step-by-step refactoring plan.
```

### Step 2: Execute Refactoring with Agent Mode

**Switch to regular Agent Mode**:

```
Refactor the weather application following our custom instructions:

Project Structure:
src/
  server.ts (Express app setup)
  config/
    env.config.ts (environment validation)
  services/
    WeatherService.ts (OpenWeatherMap integration)
    HttpClient.ts (Axios wrapper with error handling)
  controllers/
    WeatherController.ts (route handlers)
  routes/
    weather.routes.ts (Express routes)
  middleware/
    validation.middleware.ts (Zod validation)
    errorHandler.middleware.ts (global error handler)
    rateLimiter.middleware.ts (rate limiting)
  schemas/
    weather.schema.ts (Zod schemas)
  types/
    weather.types.ts (TypeScript interfaces)
  errors/
    WeatherApiError.ts (custom error classes)
  utils/
    logger.ts (logging utility)

Requirements:
1. Convert to TypeScript with strict mode
2. Implement service layer pattern
3. Add comprehensive error handling
4. Use environment variables for API key
5. Add input validation with Zod
6. Add rate limiting middleware
7. Transform API responses to our format
8. Add proper logging
9. Include JSDoc comments
10. Create .env.example file

Follow all patterns from custom instructions.
```

### Step 3: Review and Accept Changes

**Expected Files Created**:
- ✅ TypeScript configuration (`tsconfig.json`)
- ✅ Environment example (`.env.example`)
- ✅ Service layer (`WeatherService.ts`)
- ✅ Controllers (`WeatherController.ts`)
- ✅ Routes (`weather.routes.ts`)
- ✅ Middleware (validation, error handler, rate limiter)
- ✅ Schemas (`weather.schema.ts`)
- ✅ Types and interfaces
- ✅ Error classes
- ✅ Logger utility
- ✅ Updated `package.json` with scripts

**Verify**:
1. Review each file for adherence to custom instructions
2. Check that API key is now in environment variables
3. Verify error handling is comprehensive
4. Confirm response format matches standards
5. Ensure proper TypeScript types throughout

---

## 🧪 Task 4: Add Tests with Test Engineer (7 minutes)

### Switch to `@test-engineer` agent:

```
Create comprehensive test suite for the weather application:

Test Files to Create:
1. tests/unit/services/WeatherService.test.ts
   - Test getCurrentWeather with valid city
   - Test getCurrentWeather with invalid city
   - Test API error handling
   - Test timeout handling
   - Mock axios calls

2. tests/unit/controllers/WeatherController.test.ts
   - Test successful weather request
   - Test validation errors
   - Test service errors
   - Mock WeatherService

3. tests/integration/routes/weather.routes.test.ts
   - Test GET /weather endpoint
   - Test query parameter validation
   - Test error responses
   - Test rate limiting
   - Use supertest for HTTP testing

4. tests/unit/middleware/validation.test.ts
   - Test valid inputs pass
   - Test invalid inputs rejected
   - Test error messages

5. tests/unit/errors/WeatherApiError.test.ts
   - Test error creation
   - Test error properties

Configuration:
- Use Jest with ts-jest
- Create jest.config.js
- Add test scripts to package.json
- Mock external API calls
- Aim for 80%+ coverage

Include setup and teardown as needed.
Follow AAA pattern for all tests.
```

### Verify Tests

```bash
npm test
npm run test:coverage
```

**Expected Outcome**:
- ✅ All tests passing
- ✅ 80%+ code coverage
- ✅ No external API calls in tests
- ✅ Clear test descriptions
- ✅ Proper mocking

---

## 📚 Task 5: Documentation (3 minutes)

### Create API Documentation

**Copilot Prompt**:
```
Create comprehensive documentation:

1. README.md:
   - Project overview
   - Installation instructions
   - Environment variables setup
   - Running the application
   - API endpoints documentation
   - Testing instructions
   - Project structure explanation

2. API.md:
   - Detailed endpoint documentation
   - Request/response examples
   - Error codes and meanings
   - Rate limiting information
   - Authentication (if applicable)

3. Add JSDoc comments to all public methods if not already present

Follow clear, professional documentation style.
```

---

## ✅ Verification Checklist

### Code Quality
- [ ] All code is TypeScript with strict mode
- [ ] No `any` types (except where absolutely necessary)
- [ ] Custom instructions patterns followed
- [ ] Proper error handling throughout
- [ ] Input validation on all endpoints
- [ ] Rate limiting implemented
- [ ] Logging added appropriately
- [ ] No hardcoded secrets

### Architecture
- [ ] Service layer pattern implemented
- [ ] Controllers handle HTTP concerns only
- [ ] Services handle business logic
- [ ] Middleware properly organized
- [ ] Clear separation of concerns
- [ ] Proper dependency injection

### Security
- [ ] API keys in environment variables
- [ ] Input sanitization implemented
- [ ] Rate limiting active
- [ ] Error messages don't leak sensitive info
- [ ] .env file in .gitignore
- [ ] .env.example provided

### Testing
- [ ] Unit tests for services
- [ ] Unit tests for controllers
- [ ] Integration tests for routes
- [ ] Middleware tests
- [ ] 80%+ code coverage
- [ ] All tests passing
- [ ] External APIs mocked

### Documentation
- [ ] README.md complete
- [ ] API documentation clear
- [ ] Setup instructions provided
- [ ] JSDoc comments on public methods
- [ ] Examples included

---

## 🎯 Success Criteria

Your refactored application should:

1. **Start Successfully**:
   ```bash
   npm run dev
   # Server starts without errors
   ```

2. **Handle Valid Requests**:
   ```bash
   curl "http://localhost:3000/weather?city=Dallas"
   # Returns formatted weather data
   ```

3. **Handle Invalid Requests**:
   ```bash
   curl "http://localhost:3000/weather?city="
   # Returns proper error response
   ```

4. **Pass All Tests**:
   ```bash
   npm test
   # All tests pass with 80%+ coverage
   ```

5. **Follow Standards**:
   - TypeScript strict mode: ✅
   - Custom instructions adhered to: ✅
   - No hardcoded secrets: ✅
   - Proper error handling: ✅
   - Input validation: ✅
   - Rate limiting: ✅

---

## 🐞 Troubleshooting

### Issue: Agent Creates Incorrect Structure

**Solution**:
- Review custom instructions are properly formatted
- Restart VS Code to reload instructions
- Be more specific in your prompt about file structure

### Issue: Tests Fail After Refactoring

**Solution**:
- Use test engineer agent to debug
- Check that mocks match new service signatures
- Verify imports are correct

### Issue: TypeScript Errors

**Solution**:
- Ensure tsconfig.json is properly configured
- Check that all types are properly defined
- Use `@types` packages for dependencies

---

## 💡 Key Takeaways

### What You Practiced

1. **Custom Instructions**: Defined project-wide coding standards
2. **Custom Agents**: Created specialized agents for testing and refactoring
3. **Agent Mode**: Used for autonomous multi-file refactoring
4. **Integration**: Combined all advanced features in one workflow

### Best Practices Learned

- Always define custom instructions before major refactoring
- Use specialized agents for specific tasks
- Break large refactoring into reviewable steps
- Verify each stage before moving forward
- Test thoroughly after refactoring

### Real-World Applications

This exercise mirrors real scenarios where you:
- Inherit legacy codebases
- Need to modernize quickly
- Must maintain functionality while improving quality
- Work under time constraints
- Need comprehensive tests for confidence

---

## 🚀 Extension Challenges (Optional)

Want to go further? Try these:

### Challenge 1: Add Caching
```
Add Redis caching to WeatherService:
- Cache weather data for 10 minutes
- Cache forecast data for 30 minutes
- Add cache hit/miss logging
- Write tests for caching logic
```

### Challenge 2: Add More Features
```
Extend the application with:
- GET /weather/hourly?city=X (hourly forecast)
- GET /weather/history?city=X&date=Y (historical data)
- POST /weather/favorites (save favorite cities)
- GET /weather/favorites (list saved favorites)

Follow existing patterns and custom instructions.
```

### Challenge 3: Add Frontend
```
Create a simple frontend using:
- React or vanilla JavaScript
- Display current weather
- Show 5-day forecast
- Handle loading and error states
- Responsive design
```

### Challenge 4: Monitoring & Observability
```
Add monitoring:
- Prometheus metrics
- Health check endpoint
- Request duration tracking
- Error rate monitoring
- Custom dashboard
```

---

## 📊 Time Breakdown

| Phase | Activity | Time |
|-------|----------|------|
| 1 | Setup & Legacy Code | 5 min |
| 2 | Custom Instructions | 5 min |
| 3 | Custom Agents | 5 min |
| 4 | Refactoring with Agent Mode | 10 min |
| 5 | Testing with Test Engineer | 7 min |
| 6 | Documentation | 3 min |
| **Total** | | **35 min** |

*Note: May take 30-40 minutes depending on review thoroughness*

---

## 🎓 Reflection Questions

After completing the exercise, consider:

1. **How much time did agent mode save** compared to manual refactoring?
2. **How effective were custom instructions** at ensuring consistency?
3. **Did custom agents produce better results** than default Copilot?
4. **What would you add to custom instructions** for future projects?
5. **How would you apply this workflow** to your actual projects?

---

## 📚 Related Resources

- [Exercise 6: More Hands-On Scenarios](./06-hands-on-scenarios.md) - Additional practice scenarios
- [OpenWeatherMap API Docs](https://openweathermap.org/api) - API reference
- [TypeScript Best Practices](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)
- [Express.js TypeScript Guide](https://expressjs.com/en/starter/typescript.html)

---

## ✨ Congratulations!

You've completed the capstone project for Lesson 2! You now know how to:

- ✅ Define and use custom instructions
- ✅ Create specialized custom agents
- ✅ Leverage agent mode for complex refactoring
- ✅ Integrate all advanced Copilot features
- ✅ Transform legacy code into production-ready applications

**Next Steps**:
- Apply these techniques to your real projects
- Share custom instructions and agents with your team
- Explore [Exercise 6](./06-hands-on-scenarios.md) for more scenarios
- Continue to [Lesson 3](../../lesson-3-non-technical/) for non-technical training

---

**You're now a GitHub Copilot power user!** 🚀🎉
