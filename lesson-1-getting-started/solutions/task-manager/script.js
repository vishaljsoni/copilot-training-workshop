// Task Manager Application - Complete Solution

// DOM Elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const emptyState = document.getElementById('empty-state');
const totalTasksEl = document.getElementById('total-tasks');
const completedTasksEl = document.getElementById('completed-tasks');

// Initialize tasks from localStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Save tasks to localStorage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Render tasks to DOM
function renderTasks() {
  taskList.innerHTML = '';
  
  if (tasks.length === 0) {
    emptyState.classList.remove('hidden');
    return;
  } else {
    emptyState.classList.add('hidden');
  }
  
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

// Add new task
function addTask(e) {
  e.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText === '') return;
  
  tasks.push({
    text: taskText,
    completed: false,
    createdAt: new Date().toISOString()
  });
  
  saveTasks();
  renderTasks();
  taskInput.value = '';
  taskInput.focus();
}

// Toggle task completion
function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

// Delete task
function deleteTask(index) {
  if (confirm('Are you sure you want to delete this task?')) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
  }
}

// Update statistics
function updateStats() {
  const total = tasks.length;
  const completed = tasks.filter(task => task.completed).length;
  totalTasksEl.textContent = `Total: ${total}`;
  completedTasksEl.textContent = `Completed: ${completed}`;
}

// Event listeners
taskForm.addEventListener('submit', addTask);

// Initialize
renderTasks();

// Expose functions globally
window.toggleTask = toggleTask;
window.deleteTask = deleteTask;