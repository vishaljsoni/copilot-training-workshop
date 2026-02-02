# Exercise 4: Build Task Management App 📋

**Duration**: 20 minutes | **Difficulty**: Beginner/Intermediate

## 🎯 Objective

Build a complete, functional task management web application using GitHub Copilot. This project combines everything you've learned about inline suggestions and Copilot Chat.

---

## 🌟 Project Overview

### What We're Building

A single-page task manager with:
- ✅ Add new tasks
- ✅ Mark tasks as complete
- ✅ Delete tasks
- ✅ Persist data in browser (localStorage)
- ✅ Responsive, modern design
- ✅ Keyboard shortcuts

### Technologies
- HTML5
- CSS3 (Flexbox/Grid)
- Vanilla JavaScript (no frameworks!)
- LocalStorage API

---

## 🛠️ Setup

1. Create a new folder: `task-manager-app`
2. Open it in VS Code
3. We'll create three files:
   - `index.html`
   - `styles.css`
   - `script.js`

---

## 📝 Step-by-Step Build

### Step 1: HTML Structure (5 minutes)

Create `index.html` and let Copilot help!

#### Prompt for Copilot:

Type this comment at the top of the file:

```html
<!-- 
Task Management App
Requirements:
- Clean, semantic HTML5
- Form with input and add button
- Empty div for task list
- Link to external CSS and JS
- Responsive viewport meta tag
- Modern, minimal design
-->
```

Then start typing:
```html
<!DOCTYPE html>
<html lang="en">
<head>
```

Let Copilot suggest the rest!

<details>
<summary>Click to see complete HTML structure</summary>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task Manager</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>📋 Task Manager</h1>
            <p>Stay organized and productive</p>
        </header>

        <div class="task-input-section">
            <form id="task-form">
                <input 
                    type="text" 
                    id="task-input" 
                    placeholder="What needs to be done?" 
                    required
                    autocomplete="off"
                >
                <button type="submit" class="btn-add">
                    <span class="plus-icon">+</span> Add Task
                </button>
            </form>
        </div>

        <div class="task-stats">
            <span id="total-tasks">Total: 0</span>
            <span id="completed-tasks">Completed: 0</span>
        </div>

        <ul id="task-list" class="task-list">
            <!-- Tasks will be dynamically added here -->
        </ul>

        <div class="empty-state" id="empty-state">
            <p>🎉 No tasks yet! Add one above to get started.</p>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
```
</details>

**Pro Tip**: If Copilot's first suggestion isn't perfect, use Copilot Chat:
```
Improve this HTML structure with better accessibility and semantic elements
```

---

### Step 2: CSS Styling (5 minutes)

Create `styles.css`. Use Copilot to create modern, responsive styles.

#### Prompt for Copilot:

```css
/* 
Task Manager Styles
Requirements:
- Modern, clean design
- CSS variables for theming
- Responsive layout
- Smooth transitions and animations
- Mobile-first approach
- Accessible (good contrast, focus states)
*/

:root {
  /* Define CSS variables for colors and spacing */
```

Let Copilot suggest from here!

<details>
<summary>Click to see complete CSS</summary>

```css
:root {
  --primary-color: #4a90e2;
  --danger-color: #e74c3c;
  --success-color: #2ecc71;
  --background: #f5f7fa;
  --surface: #ffffff;
  --text-primary: #2c3e50;
  --text-secondary: #7f8c8d;
  --border: #e1e8ed;
  --shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background: var(--background);
  color: var(--text-primary);
  line-height: 1.6;
  padding: 20px;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  background: var(--surface);
  border-radius: 12px;
  padding: 30px;
  box-shadow: var(--shadow);
}

header {
  text-align: center;
  margin-bottom: 30px;
}

header h1 {
  color: var(--primary-color);
  font-size: 2rem;
  margin-bottom: 8px;
}

header p {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.task-input-section {
  margin-bottom: 20px;
}

#task-form {
  display: flex;
  gap: 10px;
}

#task-input {
  flex: 1;
  padding: 12px 16px;
  border: 2px solid var(--border);
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

#task-input:focus {
  outline: none;
  border-color: var(--primary-color);
}

.btn-add {
  padding: 12px 24px;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s, transform 0.1s;
  display: flex;
  align-items: center;
  gap: 6px;
}

.btn-add:hover {
  background: #357ab8;
}

.btn-add:active {
  transform: scale(0.98);
}

.plus-icon {
  font-size: 1.2rem;
  font-weight: bold;
}

.task-stats {
  display: flex;
  justify-content: space-between;
  padding: 12px;
  background: var(--background);
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.task-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.task-item {
  display: flex;
  align-items: center;
  padding: 16px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  margin-bottom: 10px;
  transition: all 0.3s;
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.task-item:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.task-item.completed {
  opacity: 0.6;
}

.task-item.completed .task-text {
  text-decoration: line-through;
  color: var(--text-secondary);
}

.task-checkbox {
  width: 20px;
  height: 20px;
  margin-right: 12px;
  cursor: pointer;
  accent-color: var(--success-color);
}

.task-text {
  flex: 1;
  font-size: 1rem;
  color: var(--text-primary);
}

.btn-delete {
  padding: 8px 16px;
  background: var(--danger-color);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-delete:hover {
  background: #c0392b;
}

.empty-state {
  text-align: center;
  padding: 40px 20px;
  color: var(--text-secondary);
}

.empty-state.hidden {
  display: none;
}

/* Responsive Design */
@media (max-width: 600px) {
  body {
    padding: 10px;
  }

  .container {
    padding: 20px;
  }

  #task-form {
    flex-direction: column;
  }

  .btn-add {
    width: 100%;
    justify-content: center;
  }

  header h1 {
    font-size: 1.5rem;
  }
}
```
</details>

---

### Step 3: JavaScript Functionality (10 minutes)

Create `script.js`. This is where Copilot really shines!

#### Strategy: Build Section by Section

Type comments first, then let Copilot implement:

```javascript
// Task Manager Application

// 1. Get DOM elements
// Get task form, input, list, and other elements

// 2. Initialize tasks array from localStorage or empty array

// 3. Function to save tasks to localStorage

// 4. Function to render tasks to the DOM

// 5. Function to add a new task

// 6. Function to toggle task completion

// 7. Function to delete a task

// 8. Function to update statistics

// 9. Event listeners setup

// 10. Initialize app on page load
```

Now, expand each section. Let's do the first few together:

#### Section 1: DOM Elements

```javascript
// 1. Get DOM elements
const taskForm = document.getElementById('task-form');
// Let Copilot suggest the rest!
```

<details>
<summary>Click to see complete JavaScript</summary>

```javascript
// Task Manager Application

// 1. Get DOM elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const emptyState = document.getElementById('empty-state');
const totalTasksEl = document.getElementById('total-tasks');
const completedTasksEl = document.getElementById('completed-tasks');

// 2. Initialize tasks from localStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// 3. Save tasks to localStorage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// 4. Render tasks to DOM
function renderTasks() {
  // Clear current list
  taskList.innerHTML = '';
  
  // Show/hide empty state
  if (tasks.length === 0) {
    emptyState.classList.remove('hidden');
    return;
  } else {
    emptyState.classList.add('hidden');
  }
  
  // Create and append task items
  tasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.className = `task-item ${task.completed ? 'completed' : ''}`;
    taskItem.innerHTML = `
      <input 
        type="checkbox" 
        class="task-checkbox" 
        ${task.completed ? 'checked' : ''}
        onchange="toggleTask(${index})"
      >
      <span class="task-text">${task.text}</span>
      <button class="btn-delete" onclick="deleteTask(${index})">
        Delete
      </button>
    `;
    taskList.appendChild(taskItem);
  });
  
  updateStats();
}

// 5. Add new task
function addTask(e) {
  e.preventDefault();
  
  const taskText = taskInput.value.trim();
  
  if (taskText === '') return;
  
  const newTask = {
    text: taskText,
    completed: false,
    createdAt: new Date().toISOString()
  };
  
  tasks.push(newTask);
  saveTasks();
  renderTasks();
  
  // Clear input
  taskInput.value = '';
  taskInput.focus();
}

// 6. Toggle task completion
function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

// 7. Delete task
function deleteTask(index) {
  if (confirm('Are you sure you want to delete this task?')) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
  }
}

// 8. Update statistics
function updateStats() {
  const total = tasks.length;
  const completed = tasks.filter(task => task.completed).length;
  
  totalTasksEl.textContent = `Total: ${total}`;
  completedTasksEl.textContent = `Completed: ${completed}`;
}

// 9. Event listeners
taskForm.addEventListener('submit', addTask);

// 10. Initialize app
renderTasks();

// Expose functions globally for onclick handlers
window.toggleTask = toggleTask;
window.deleteTask = deleteTask;
```
</details>

**Pro Tip**: After each function, test it in the browser before moving to the next!

---

## 🧪 Testing Your App

### Step 1: Open in Browser

1. Right-click `index.html` in VS Code
2. Select "Open with Live Server" (if you have the extension)
3. Or simply double-click the file

### Step 2: Test Functionality

- [ ] Add a task - does it appear?
- [ ] Mark complete - does it strike through?
- [ ] Delete task - does it remove?
- [ ] Refresh page - do tasks persist?
- [ ] Try on mobile - is it responsive?

---

## 🚀 Challenge: Add Enhancements

Once basic functionality works, use Copilot to add features:

### Challenge 1: Edit Tasks

Ask Copilot Chat:
```
Add the ability to edit existing tasks. When user clicks the task text, 
it should become editable. On blur or Enter, save the changes.
```

### Challenge 2: Filter Tasks

Ask Copilot Chat:
```
Add filter buttons to show: All tasks, Active tasks, or Completed tasks
```

### Challenge 3: Due Dates

Ask Copilot Chat:
```
Add optional due dates to tasks. Include a date input in the form and 
display due dates with tasks. Highlight overdue tasks in red.
```

### Challenge 4: Drag and Drop

Ask Copilot Chat:
```
Implement drag-and-drop reordering of tasks using HTML5 Drag and Drop API
```

### Challenge 5: Dark Mode

Ask Copilot Chat:
```
Add a dark mode toggle. Store preference in localStorage and apply 
appropriate CSS variables for dark theme.
```

---

## 💡 What You Learned

By completing this project, you've learned to:
- ✅ Use Copilot for complete application development
- ✅ Combine inline suggestions with Chat
- ✅ Build HTML, CSS, and JavaScript with AI assistance
- ✅ Implement localStorage persistence
- ✅ Create responsive, modern UI
- ✅ Test and iterate with Copilot's help
- ✅ Add features incrementally

---

## ✅ Completion Checklist

Before moving on, verify:
- [ ] App displays in browser without errors
- [ ] Can add, complete, and delete tasks
- [ ] Tasks persist after page refresh
- [ ] UI is responsive on mobile
- [ ] Code is well-organized and commented
- [ ] You tried at least one enhancement

---

## 🎓 Lesson 1 Complete!

Congratulations! You've completed Lesson 1 and built a real application with GitHub Copilot.

### What's Next?

- **For Advanced Features**: Continue to [Lesson 2: Advanced GitHub Copilot](../../lesson-2-advanced/)
- **For Non-Technical Users**: Check out [Lesson 3: Copilot for Non-Technical Users](../../lesson-3-non-technical/)
- **Want More Practice**: Try building other projects:
  - Weather app with API integration
  - Expense tracker with charts
  - Note-taking app with markdown support

---

## 📝 Solution

Complete solution is available in the `solutions/` folder:
- [`solutions/task-manager/`](../solutions/task-manager/)

Compare your implementation with the solution, but remember: there are many valid ways to solve problems!

---

**Great job! 🎉 You're now ready for advanced Copilot features!**