# Exercise 1: Agent Mode Basics 🤖

**Duration**: 20 minutes | **Difficulty**: Intermediate

## 🎯 Objective

Learn how to use GitHub Copilot's Agent Mode to handle complex, multi-file coding tasks autonomously.

---

## 📚 What is Agent Mode?

**Agent Mode** transforms Copilot from a suggestion tool into an autonomous coding partner that can:

✅ **Plan** complex implementations
✅ **Execute** multi-file changes
✅ **Iterate** when errors occur
✅ **Use tools** (file system, terminal, search)
✅ **Self-correct** based on feedback

### Key Differences

| Regular Chat | Agent Mode |
|--------------|------------|
| Suggests code snippets | Implements complete features |
| Single file context | Multi-file awareness |
| Manual implementation | Autonomous execution |
| No error recovery | Automatic iteration |
| You write code | Copilot writes code |

---

## 🛠️ Enabling Agent Mode

### In VS Code

1. Open Copilot Chat (`Ctrl+I` / `Cmd+I`)
2. Look for **mode selector** at bottom of chat window
3. Toggle from "Ask" to "Agent"
4. You'll see agent capabilities listed (file operations, terminal access, etc.)

### Verification

When agent mode is active, you should see:
- 🤖 Agent icon in chat
- List of available tools
- "Copilot is working..." status when executing

---

## 📝 Practice Exercises

### Exercise 1.1: Your First Agent Task

#### Setup

1. Create a new folder: `agent-demo`
2. Open in VS Code
3. Initialize git: `git init`

#### Task: Create a Simple API

Open Copilot Chat in **Agent Mode** and type:

```
Create a RESTful API for a book library:

1. Create a basic Express.js server
2. Implement endpoints:
   - GET /api/books (list all books)
   - GET /api/books/:id (get single book)
   - POST /api/books (create book)
   - PUT /api/books/:id (update book)
   - DELETE /api/books/:id (delete book)
3. Use in-memory storage (array)
4. Include proper error handling
5. Add input validation
6. Create a package.json with dependencies

File structure:
- server.js (main server)
- routes/books.js (route handlers)
- middleware/validation.js (validation logic)
```

**What to Observe**:

1. 📄 **Plan Generation**: Copilot creates implementation plan
2. 🔍 **Review Phase**: You can review plan before execution
3. ⚙️ **Execution**: Copilot creates files and writes code
4. ✔️ **Completion**: You review and accept changes

<details>
<summary>Expected Behavior</summary>

**Copilot will**:
1. Create a plan with file list and implementation steps
2. Ask for your approval
3. Create all necessary files:
   - `package.json`
   - `server.js`
   - `routes/books.js`
   - `middleware/validation.js`
4. Write complete, working code for each file
5. Show you a summary of changes

**You should**:
- Review the plan carefully
- Check created files
- Test the API (run `npm install` then `npm start`)
- Verify endpoints work as expected
</details>

---

### Exercise 1.2: Iterative Development

Now let's add features iteratively:

#### Iteration 1: Add Search

```
Add search functionality:
- New endpoint: GET /api/books/search?q=query
- Search by title or author
- Case-insensitive
- Return matching books
```

Copilot will update existing files automatically!

#### Iteration 2: Add Persistence

```
Replace in-memory storage with JSON file persistence:
- Store books in data/books.json
- Load on server start
- Save after create/update/delete operations
- Handle file I/O errors gracefully
```

#### Iteration 3: Add Tests

```
Create comprehensive tests using Jest:
- Test all CRUD endpoints
- Test search functionality
- Test error cases (invalid IDs, missing fields)
- Test file persistence
- Set up test script in package.json
```

**Observe**: Copilot creates `tests/` folder and writes complete test suites!

---

### Exercise 1.3: Error Recovery

Let's see agent mode handle errors:

#### Intentional Error Task

```
Create a function to fetch data from https://api.example-invalid-url.com/data
Handle all possible errors and retry up to 3 times
```

If Copilot's implementation has issues:

1. Run the code
2. Copy any error messages
3. Tell Copilot in chat: "This code failed with error: [paste error]"
4. Agent will analyze and fix automatically!

---

### Exercise 1.4: Complex Refactoring

Create a messy file to refactor:

**Create `messy.js`**:
```javascript
// Intentionally messy code
var x = function(a,b){return a+b}
var y = function(a,b){return a-b}
function z(a,b){return a*b}
const w=function(a,b){if(b===0){return 'error'}return a/b}
var data=[1,2,3,4,5]
function process(){var result=[];for(var i=0;i<data.length;i++){result.push(data[i]*2)}return result}
```

Now ask agent:

```
Refactor messy.js following best practices:
1. Use consistent naming (camelCase)
2. Use const/let instead of var
3. Add JSDoc comments
4. Extract magic numbers as constants
5. Use modern array methods instead of for loops
6. Add proper error handling
7. Split into separate modules if appropriate
```

<details>
<summary>Expected Result</summary>

```javascript
/**
 * Mathematical operations module
 */

const MULTIPLIER = 2;

/**
 * Adds two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
const add = (a, b) => a + b;

/**
 * Subtracts second number from first
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Difference of a and b
 */
const subtract = (a, b) => a - b;

/**
 * Multiplies two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of a and b
 */
const multiply = (a, b) => a * b;

/**
 * Divides first number by second
 * @param {number} a - Numerator
 * @param {number} b - Denominator
 * @returns {number|string} Quotient or error message
 * @throws {Error} When dividing by zero
 */
const divide = (a, b) => {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
};

const data = [1, 2, 3, 4, 5];

/**
 * Processes array by doubling each value
 * @returns {number[]} Array with doubled values
 */
const processData = () => data.map(value => value * MULTIPLIER);

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  processData
};
```
</details>

---

## 🎮 Challenge: Build a CLI Tool

Use agent mode to build a complete command-line tool:

```
Create a CLI todo manager using Node.js:

Features:
- Add tasks: todo add "Buy groceries"
- List tasks: todo list
- Complete tasks: todo complete <id>
- Delete tasks: todo delete <id>
- Mark priority: todo priority <id> <high|medium|low>
- Filter by status: todo list --status pending
- Filter by priority: todo list --priority high

Requirements:
- Use commander.js for CLI parsing
- Store tasks in ~/.todos.json
- Colorful output using chalk
- Include help command with examples
- Error handling for invalid commands
- Make it executable (#!/usr/bin/env node)

File structure:
- bin/todo.js (executable)
- lib/storage.js (file operations)
- lib/commands.js (command handlers)
- package.json (with bin configuration)
```

Agent mode should create a fully functional CLI tool!

---

## 💡 Agent Mode Best Practices

### 1. Be Explicit About Scope

✅ **Good**:
```
Create a user authentication system:
- JWT-based authentication
- Register, login, logout endpoints
- Password hashing with bcrypt
- Update files: server.js, routes/auth.js, middleware/auth.js
```

❌ **Too Vague**:
```
Add authentication
```

### 2. Specify File Structure

```
Organize code with this structure:
```
src/
  components/
  services/
  utils/
tests/
config/
```
```

### 3. Include Acceptance Criteria

```
Implement user profile page

Acceptance criteria:
- [ ] Shows user avatar, name, email
- [ ] Allows editing name and avatar
- [ ] Validates email format
- [ ] Shows success/error messages
- [ ] Mobile responsive
```

### 4. Reference Examples

```
Create ProductCard component
Follow the same pattern as UserCard component in src/components/UserCard.jsx
```

---

## ✅ Checkpoint

Before moving to next exercise:
- [ ] Successfully toggled agent mode on
- [ ] Completed at least one multi-file task
- [ ] Observed plan generation and execution
- [ ] Reviewed and accepted agent changes
- [ ] Tested generated code works
- [ ] Tried iterative refinement

---

## 🐞 Troubleshooting

### Problem: Agent mode not available

**Solution**: 
- Verify Copilot subscription (Pro/Business/Enterprise required)
- Update VS Code and Copilot extensions
- Check organization settings if on Business/Enterprise

### Problem: Agent gets stuck

**Solution**:
- Break task into smaller steps
- Provide more specific instructions
- Reference existing code patterns
- Check for file permission issues

### Problem: Changes not as expected

**Solution**:
- Review plan before approving
- Reject and provide feedback: "Don't use library X, use Y instead"
- Iterate with follow-up instructions
- Start with smaller scope, add features incrementally

---

## 💡 Key Takeaways

- ✅ Agent mode works autonomously on complex tasks
- ✅ Always review plans before execution
- ✅ Iterate with follow-up instructions
- ✅ Break large tasks into smaller chunks
- ✅ Be specific about requirements and structure
- ✅ Use agent for refactoring, not just new code

---

## 🚀 Next Exercise

Now that you understand agent mode, learn how to guide it with custom instructions!

**Continue to [Exercise 2: Custom Instructions](./02-custom-instructions.md)**