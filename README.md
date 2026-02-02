# GitHub Copilot Training Workshop 🚀

**Interactive Hands-On Training for Customer Success Teams**

Welcome to the comprehensive GitHub Copilot training workshop! This repository contains three progressive lessons designed to help engineers, product managers, and designers master GitHub Copilot through practical, hands-on learning.

## 🎯 Workshop Overview

This workshop is structured for **customer success architects** to share with customers ahead of time, allowing participants to follow along during live demos and practice independently.

### Workshop Sessions

| Session | Duration | Audience | Focus |
|---------|----------|----------|-------|
| [**Lesson 1: Getting Started**](#lesson-1-getting-started-with-github-copilot) | ~1 hour | Engineers (Beginner) | Code-ready education, inline suggestions, chat basics |
| [**Lesson 2: Advanced Copilot**](#lesson-2-advanced-github-copilot) | ~1.5 hours | Engineers (Advanced) | Agent mode, custom instructions, MCP servers, advanced workflows |
| [**Lesson 3: Copilot for Non-Technical Users**](#lesson-3-copilot-for-non-technical-users) | ~1 hour | Product Managers, Designers, Technical Writers | GitHub collaboration, documentation, issue management |

---

## 📋 Prerequisites

### For All Participants
- **GitHub Account**: [Sign up here](https://github.com/signup)
- **GitHub Copilot Access**: 
  - Free trial: Available in VS Code (monthly limit)
  - Copilot Individual/Pro: $10-19/month
  - Copilot Business/Enterprise: Through your organization

### For Engineers (Lessons 1 & 2)
- **Visual Studio Code**: [Download here](https://code.visualstudio.com/)
- **GitHub Copilot Extension**: Install from VS Code marketplace
- **Git**: [Download here](https://git-scm.com/downloads)
- Basic programming knowledge (JavaScript, Python, or any language)

### For Non-Technical Users (Lesson 3)
- Web browser (Chrome, Firefox, Edge, Safari)
- Basic familiarity with text editing
- Willingness to learn version control concepts

---

## 🚀 Quick Start

### Option 1: Clone This Repository (Recommended)

```bash
git clone https://github.com/vishaljsoni/copilot-training-workshop.git
cd copilot-training-workshop
```

### Option 2: Fork This Repository

1. Click the **Fork** button in the top-right corner
2. Clone your fork to your local machine
3. Follow along with the lessons

### Option 3: Use GitHub Codespaces

1. Click the **Code** button above
2. Select **Codespaces** tab
3. Click **Create codespace on main**
4. Start coding immediately in your browser!

---

## 📚 Lesson Details

### Lesson 1: Getting Started with GitHub Copilot

**Duration**: ~1 hour | **Level**: Beginner | **Hands-On**: 90%

#### What You'll Learn
- ✅ Install and authenticate GitHub Copilot in VS Code
- ✅ Use inline code suggestions effectively
- ✅ Leverage Copilot Chat for code generation
- ✅ Generate functions, classes, and complete features
- ✅ Fix bugs and optimize code with AI assistance
- ✅ Write tests automatically
- ✅ Best practices for effective prompting

#### Hands-On Project
Build a **Task Management Web Application** from scratch:
- HTML/CSS/JavaScript single-page app
- Add, delete, mark tasks complete
- Local storage persistence
- Responsive design

📂 **Location**: [`lesson-1-getting-started/`](./lesson-1-getting-started/)

---

### Lesson 2: Advanced GitHub Copilot

**Duration**: ~1.5 hours | **Level**: Advanced | **Hands-On**: 85%

#### What You'll Learn
- ✅ Master **Agent Mode** for autonomous coding
- ✅ Configure **custom instructions** (`.github/copilot-instructions.md`)
- ✅ Create **custom agents** for specialized tasks
- ✅ Use **prompt files** for reusable workflows
- ✅ Integrate **MCP (Model Context Protocol)** servers
- ✅ Leverage **Edits mode** for multi-file changes
- ✅ Plan complex features with AI assistance
- ✅ Advanced debugging and refactoring techniques

#### Hands-On Projects
1. **Weather Dashboard API Integration**
   - Refactor existing codebase
   - Add new features with agent mode
   - Implement error handling
   - Write comprehensive tests

2. **Custom Agent Development**
   - Create a code review agent
   - Build a documentation agent
   - Configure MCP tools

📂 **Location**: [`lesson-2-advanced/`](./lesson-2-advanced/)

---

### Lesson 3: Copilot for Non-Technical Users

**Duration**: ~1 hour | **Level**: Beginner | **Hands-On**: 70%

#### What You'll Learn
- ✅ Navigate GitHub's interface confidently
- ✅ Create and manage repositories
- ✅ Write beautiful Markdown documentation
- ✅ Use GitHub Issues for project management
- ✅ Collaborate with pull requests
- ✅ Leverage GitHub Projects for planning
- ✅ Use Copilot Chat on GitHub.com
- ✅ Generate content and documentation with AI

#### Hands-On Activities
1. **Create Product Requirements Document**
   - Use Copilot to draft PRD
   - Format with Markdown
   - Add images and tables

2. **Design System Documentation**
   - Document UI components
   - Create style guides
   - Manage design tokens

3. **Project Planning with Issues**
   - Create issue templates
   - Use Copilot to generate user stories
   - Track progress with Projects

📂 **Location**: [`lesson-3-non-technical/`](./lesson-3-non-technical/)

---

## 🎓 Teaching Guide for Customer Success Architects

### Pre-Workshop Checklist
- [ ] Share repository link with participants 1 week before
- [ ] Ensure all participants have GitHub Copilot access
- [ ] Test all code samples in your environment
- [ ] Prepare screen sharing setup
- [ ] Have backup examples ready

### During Workshop
- **Code Along**: Type code live, don't paste
- **Show Failures**: Demonstrate when Copilot gets it wrong
- **Iterate**: Show how to refine prompts
- **Take Questions**: Pause regularly for Q&A
- **Share Screen**: Let participants see your workflow

### After Workshop
- [ ] Share recording (if available)
- [ ] Provide additional resources
- [ ] Schedule follow-up Q&A session
- [ ] Collect feedback for improvement

---

## 🔧 Repository Structure

```
copilot-training-workshop/
├── README.md                          # This file
├── lesson-1-getting-started/
│   ├── README.md                      # Lesson 1 guide
│   ├── exercises/                     # Step-by-step exercises
│   ├── solutions/                     # Complete solutions
│   └── slides/                        # Presentation materials
├── lesson-2-advanced/
│   ├── README.md                      # Lesson 2 guide
│   ├── exercises/
│   │   ├── weather-app-starter/       # Starting project
│   │   ├── custom-agents/             # Agent examples
│   │   └── mcp-integration/           # MCP server setup
│   ├── solutions/
│   └── slides/
├── lesson-3-non-technical/
│   ├── README.md                      # Lesson 3 guide
│   ├── exercises/
│   │   ├── markdown-basics/
│   │   ├── documentation-examples/
│   │   └── project-management/
│   ├── templates/                     # Issue & PR templates
│   └── slides/
└── resources/
    ├── cheat-sheets/                  # Quick reference guides
    ├── troubleshooting.md             # Common issues & fixes
    └── additional-resources.md        # Links & references
```

---

## 🤝 Contributing

Found an issue or have suggestions? Please:
1. Open an issue describing the problem/enhancement
2. Or submit a pull request with improvements

This is a living repository - feedback welcome!

---

## 📖 Additional Resources

### Official Documentation
- [GitHub Copilot Documentation](https://docs.github.com/copilot)
- [VS Code Copilot Guide](https://code.visualstudio.com/docs/copilot/overview)
- [GitHub Skills: Copilot](https://skills.github.com/)

### Community
- [GitHub Community Discussions](https://github.com/orgs/community/discussions/categories/copilot)
- [VS Code Copilot Tips](https://github.com/features/copilot/tutorials)

### Best Practices
- [Copilot Patterns & Exercises](https://github.com/yuhattor/copilot-patterns)
- [Prompt Engineering Guide](https://www.promptingguide.ai/)

---

## 📄 License

MIT License - Feel free to use this material for your customer training sessions!

---

## 🎯 Learning Objectives Summary

### By End of Workshop, Participants Will:

**Engineers**:
- [ ] Generate production-ready code with Copilot
- [ ] Configure advanced Copilot features
- [ ] Build custom agents and workflows
- [ ] Debug and refactor efficiently with AI
- [ ] Write comprehensive tests automatically

**Non-Technical Users**:
- [ ] Navigate GitHub confidently
- [ ] Write professional Markdown documentation
- [ ] Manage projects with Issues and Projects
- [ ] Collaborate effectively with pull requests
- [ ] Use Copilot for content generation

---

## 🚀 Let's Get Started!

Choose your lesson:
1. **[Lesson 1: Getting Started →](./lesson-1-getting-started/)**
2. **[Lesson 2: Advanced Copilot →](./lesson-2-advanced/)**
3. **[Lesson 3: Non-Technical Users →](./lesson-3-non-technical/)**

---

**Questions?** Open an issue or reach out to your Customer Success Architect!

**Happy Learning! 🎉**