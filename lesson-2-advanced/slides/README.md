# Lesson 2 Slide Deck

This directory contains the markdown-based slide deck for Lesson 2: Advanced GitHub Copilot.

## Files

- `lesson-2-slides.md` - Main slide deck with presenter notes

## Using the Slides

### Option 1: Markdown Preview (Simple)

1. Open `lesson-2-slides.md` in VS Code
2. Press `Ctrl+Shift+V` (Windows/Linux) or `Cmd+Shift+V` (Mac)
3. Scroll through the slides
4. Present directly from the preview

**Pros**: No setup required, works in any markdown viewer
**Cons**: Less polished presentation, no slide transitions

### Option 2: Marp (Recommended)

Marp is a markdown presentation ecosystem that converts markdown to beautiful slides.

#### Install Marp VS Code Extension

1. Open VS Code
2. Go to Extensions (`Ctrl+Shift+X` / `Cmd+Shift+X`)
3. Search for "Marp for VS Code"
4. Install the extension

#### Present with Marp

1. Open `lesson-2-slides.md`
2. Click the "Preview" button in the top-right corner
3. Use arrow keys to navigate slides
4. Press `F` for fullscreen
5. Press `P` for presenter mode

#### Export to PDF or HTML

1. Open `lesson-2-slides.md`
2. Press `Ctrl+Shift+P` / `Cmd+Shift+P`
3. Type "Marp: Export Slide Deck"
4. Choose format (PDF, HTML, PPTX)

### Option 3: Slidev (Advanced)

For interactive web-based presentations with code highlighting and animations.

```bash
# Install Slidev
npm install -g @slidev/cli

# Create a new presentation
cd lesson-2-advanced/slides
slidev lesson-2-slides.md
```

### Option 4: Reveal.js

Convert markdown to Reveal.js presentation:

```bash
npm install -g reveal-md
reveal-md lesson-2-slides.md --theme night
```

## Slide Structure

The slide deck is organized into sections:

1. **Introduction** (5 min)
   - Welcome and objectives
   - Prerequisites check
   - Lesson overview

2. **Part 1: Agent Mode** (20 min)
   - What is agent mode
   - Capabilities and workflow
   - Live demo
   - Exercise 1 intro

3. **Part 2: Custom Instructions** (20 min)
   - Why custom instructions
   - Types and structure
   - Best practices
   - Exercise 2 intro

4. **Part 3: Custom Agents** (25 min)
   - What are custom agents
   - Creating agents
   - Multi-agent workflows
   - Exercise 3 intro

5. **Part 4: MCP Integration** (25 min)
   - MCP overview
   - Setup and configuration
   - Popular servers
   - Exercise 4 intro

6. **Part 5: Integration** (10 min)
   - Putting it all together
   - Best practices summary
   - Real-world impact

7. **Exercises & Wrap-up** (Q&A + Exercises time)

## Presenter Notes

### Before the Session

- [ ] Test all demo environments
- [ ] Ensure agent mode is working
- [ ] Prepare custom instructions example
- [ ] Set up MCP servers
- [ ] Have example repositories ready
- [ ] Test screen sharing setup

### Demo Preparation

**Agent Mode Demo** (Slide ~15):
- Have a sample repo open
- Prepared task: "Add user authentication with JWT"
- Show the full workflow
- Demonstrate error handling

**Custom Instructions Demo** (Slide ~25):
- Show before/after code generation
- Demonstrate instruction effectiveness
- Show path-specific instructions in action

**Custom Agents Demo** (Slide ~35):
- Have test-engineer agent ready
- Show agent selection and usage
- Demonstrate specialized behavior

**MCP Demo** (Slide ~45):
- GitHub MCP: List issues command
- Playwright MCP: Navigate and screenshot
- Show combined workflow

### Timing Recommendations

| Section | Time | Notes |
|---------|------|-------|
| Intro & Setup | 5 min | Keep brief, check prerequisites |
| Agent Mode | 20 min | Include demo and Q&A |
| Custom Instructions | 20 min | Show real examples |
| Break | 5 min | Let people refresh |
| Custom Agents | 25 min | Interactive demonstration |
| MCP Integration | 25 min | Setup can be tricky, help available |
| Exercises | 30+ min | Hands-on practice |
| Wrap-up & Q&A | 10 min | Address questions |

**Total**: ~2 hours 20 minutes (includes buffer time)

### Teaching Tips

1. **Demo First, Explain Second**
   - Show agent mode working before explaining theory
   - Let them see the power before diving into details

2. **Emphasize Review**
   - Always stress reviewing agent output
   - Show examples of when things go wrong
   - Security and correctness are paramount

3. **Share Real Failures**
   - Show when agents get stuck
   - Demonstrate recovery techniques
   - Build realistic expectations

4. **Use Real Code**
   - Actual projects resonate more than toy examples
   - Use examples from your organization if possible
   - Show messy real-world scenarios

5. **Encourage Experimentation**
   - Exercises are hands-on for a reason
   - Let them break things and learn
   - Pair programming helps

### Common Questions & Answers

**Q: Do I need Copilot Pro for agent mode?**
A: Yes, agent mode requires Pro, Business, or Enterprise subscription.

**Q: Can I use custom instructions without agent mode?**
A: Yes! Custom instructions work with regular Copilot too.

**Q: Are MCP servers required?**
A: No, but they greatly enhance capabilities for certain workflows.

**Q: How do I know which agent to use?**
A: Start with descriptive names and clear purposes. The agent dropdown shows descriptions.

**Q: Can agents make breaking changes?**
A: Yes, always review before accepting changes. Use version control.

**Q: What if my organization blocks MCP?**
A: You can still use agent mode and custom instructions. MCP is optional.

### Troubleshooting During Session

**Agent mode not showing:**
- Verify subscription in GitHub settings
- Check VS Code extension versions
- Restart VS Code
- Verify internet connection

**Custom instructions not working:**
- Check file location: `.github/copilot-instructions.md`
- Verify file is committed to repository
- Reload VS Code window
- Check for syntax errors in YAML frontmatter (path-specific)

**MCP setup failing:**
- Verify Node.js version (v18+)
- Check npm global installation
- Review mcp-settings.json syntax
- Validate authentication tokens
- Check network/firewall settings

## Customization

### Adapting for Your Organization

You can customize the slides by:

1. **Adding your company examples**
   - Replace generic examples with your codebase
   - Use your tech stack in demonstrations
   - Show your actual custom instructions

2. **Adjusting timing**
   - Extend exercises if needed
   - Add more demos for complex topics
   - Reduce theory if audience is advanced

3. **Adding supplementary slides**
   - Your company's Copilot policies
   - Internal agent marketplace
   - Custom MCP servers you've built
   - Success stories from your teams

### Formatting Guidelines

The slides use standard markdown with horizontal rules (`---`) as slide separators.

**Slide separator:**
```markdown
---
```

**Headers become slide titles:**
```markdown
# Main Title
## Subtitle
```

**Lists and code blocks work as expected:**
```markdown
- Bullet point
- Another point

```javascript
code example
```
```

## Feedback

After delivering the lesson, please consider:

1. **Gathering feedback**
   - What worked well?
   - What was confusing?
   - What examples resonated?
   - What should be added/removed?

2. **Updating the slides**
   - Fix any errors found
   - Add clarifying examples
   - Update based on questions asked
   - Improve demos that didn't land

3. **Sharing improvements**
   - Create a pull request with updates
   - Share new examples with other instructors
   - Document common questions for FAQ

## Additional Resources

### For Instructors

- [GitHub Copilot Teaching Guide](https://docs.github.com/en/copilot/teaching-with-github-copilot)
- [Copilot Best Practices](https://github.blog/2023-06-20-how-to-write-better-prompts-for-github-copilot/)
- [Advanced Copilot Patterns](https://github.com/yuhattor/copilot-patterns)

### For Students

- [Official Copilot Documentation](https://docs.github.com/copilot)
- [Copilot Community Forum](https://github.com/orgs/community/discussions/categories/copilot)
- [VS Code Copilot Guide](https://code.visualstudio.com/docs/copilot/overview)

## License

These materials are part of the GitHub Copilot Training Workshop.
Feel free to adapt and use for your organization's training needs.

---

**Questions or suggestions?** Open an issue or submit a pull request!