# Lesson 1: Getting Started with GitHub Copilot 🚀

**Duration**: ~1 hour | **Level**: Beginner | **Focus**: Code-Ready Education

## 🎯 Learning Objectives

By the end of this lesson, you will:
- ✅ Install and configure GitHub Copilot in VS Code
- ✅ Understand how inline suggestions work
- ✅ Use Copilot Chat effectively
- ✅ Generate functions, classes, and complete features
- ✅ Fix bugs and optimize code with AI
- ✅ Write tests automatically
- ✅ Build a complete task management web app from scratch

---

## 📋 Prerequisites

- **VS Code** installed ([Download](https://code.visualstudio.com/))
- **GitHub account** with Copilot access
- **Git** installed ([Download](https://git-scm.com/))
- Basic understanding of HTML/CSS/JavaScript (or any programming language)

---

## 🛠️ Setup Instructions

### Step 1: Install VS Code

1. Download from [code.visualstudio.com](https://code.visualstudio.com/)
2. Install and launch

### Step 2: Install GitHub Copilot Extension

1. Open VS Code
2. Click Extensions icon (or press `Ctrl+Shift+X` / `Cmd+Shift+X`)
3. Search for "GitHub Copilot"
4. Click **Install** on:
   - GitHub Copilot
   - GitHub Copilot Chat

### Step 3: Sign In to GitHub

1. Click the GitHub icon in the bottom left
2. Click **Sign in to use GitHub Copilot**
3. Authorize VS Code in your browser
4. Return to VS Code

### Step 4: Verify Installation

1. Open any `.js`, `.py`, or `.html` file
2. Start typing a comment like `// create a function`
3. You should see gray suggested code appear!

---

## 📚 Exercise Overview

This lesson includes 4 hands-on exercises:

### [Exercise 1: Setup & First Suggestions](./exercises/01-setup.md)
- Verify Copilot is working
- Learn to accept/reject suggestions
- Understand inline completion triggers
- **Time**: 10 minutes

### [Exercise 2: Inline Suggestions Mastery](./exercises/02-inline-suggestions.md)
- Write functions with natural language comments
- Generate complete code blocks
- Use keyboard shortcuts effectively
- Explore multiple suggestions
- **Time**: 15 minutes

### [Exercise 3: Copilot Chat Basics](./exercises/03-chat-basics.md)
- Open and use Copilot Chat
- Ask questions about code
- Generate code from descriptions
- Fix bugs and optimize code
- Generate documentation and tests
- **Time**: 15 minutes

### [Exercise 4: Build Task Management App](./exercises/04-task-app-project.md)
- Create a complete web application
- HTML structure with semantic elements
- CSS styling with modern design
- JavaScript functionality (add, delete, complete tasks)
- Local storage persistence
- Responsive design
- **Time**: 20 minutes

---

## ⏱️ Recommended Schedule

| Time | Activity | Duration |
|------|----------|----------|
| 0:00 | Introduction & Setup | 5 min |
| 0:05 | Exercise 1: Setup | 10 min |
| 0:15 | Exercise 2: Inline Suggestions | 15 min |
| 0:30 | Exercise 3: Copilot Chat | 15 min |
| 0:45 | Exercise 4: Task App Project | 20 min |
| 1:05 | Q&A and Wrap-up | 10 min |

---

## 💡 Key Concepts

### Inline Suggestions
- Copilot suggests code as you type
- Gray text = suggestion (not yet accepted)
- Press `Tab` to accept
- Press `Esc` to reject
- Press `Alt+]` or `Option+]` to see next suggestion

### Copilot Chat
- Conversational interface for complex tasks
- Can reference current file or workspace
- Understands context from open files
- Can generate, explain, fix, and optimize code

### Effective Prompting
**Good prompts are**:
- ✅ Specific: "Create a function to validate email format"
- ✅ Contextual: Include what language/framework
- ✅ Clear: Break complex tasks into steps

**Avoid**:
- ❌ Vague: "make it better"
- ❌ Too complex: Multiple requirements in one prompt

---

## 🎯 Pro Tips for Beginners

1. **Start with Comments**: Write what you want in a comment, Copilot will suggest the code
   ```javascript
   // Function to calculate the average of an array of numbers
   // Copilot will suggest the implementation!
   ```

2. **Use Descriptive Names**: Function and variable names help Copilot understand intent
   ```javascript
   function calculateShippingCost(weight, distance) {
     // Copilot knows this is about shipping calculations
   }
   ```

3. **Accept Partially**: You can accept a suggestion and then modify it

4. **Iterate**: If first suggestion isn't perfect, try Alt+] for alternatives

5. **Chat for Complex Tasks**: Use chat for multi-file changes or complex logic

6. **Review Everything**: Always review and test AI-generated code

---

## 🚀 Getting Started

1. Complete the setup above
2. Start with [Exercise 1: Setup & First Suggestions](./exercises/01-setup.md)
3. Progress through each exercise in order
4. Complete the Task App project
5. Explore the solutions folder if you get stuck

---

## 📝 Notes for Instructors

### Teaching Tips
- **Live Code**: Type everything live, don't paste
- **Show Mistakes**: Demonstrate when Copilot gets it wrong
- **Pause for Questions**: After each exercise
- **Encourage Exploration**: Let students try different prompts
- **Share Screen**: Make sure everyone can see the suggestions

### Common Issues
- **No suggestions appearing**: Check internet connection, verify Copilot is active (icon in status bar)
- **Wrong language suggestions**: Save file with correct extension first
- **Rate limiting**: Free tier has usage limits

### Time Management
- If running short: Skip Exercise 3, focus on Task App
- If ahead: Add enhancements to Task App (filtering, editing, due dates)

---

## 📚 Additional Resources

- [VS Code Copilot Documentation](https://code.visualstudio.com/docs/copilot/overview)
- [GitHub Copilot Keyboard Shortcuts](https://docs.github.com/en/copilot/using-github-copilot/getting-code-suggestions-in-your-ide-with-github-copilot#keyboard-shortcuts)
- [Copilot Patterns & Examples](https://github.com/yuhattor/copilot-patterns)

---

## ✅ What's Next?

After completing this lesson:
- Move to [Lesson 2: Advanced GitHub Copilot](../lesson-2-advanced/) to learn agent mode, custom instructions, and MCP servers
- Or share feedback on this lesson!

---

**Ready to start? Begin with [Exercise 1 →](./exercises/01-setup.md)**