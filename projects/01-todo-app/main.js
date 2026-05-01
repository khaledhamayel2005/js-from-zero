/**
 * Todo App logic:
 * - Add tasks
 * - Toggle completion
 * - Delete tasks
 * - Persist tasks in Local Storage
 */

const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const emptyMsg = document.getElementById("emptyMsg");

const STORAGE_KEY = "todos";
let todos = [];

window.addEventListener("DOMContentLoaded", () => {
  loadTodos();
  renderTodos();
});

addBtn.addEventListener("click", addTodo);
todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTodo();
});

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText === "") {
    alert("Please enter a task.");
    return;
  }

  const newTodo = {
    id: Date.now(),
    text: todoText,
    completed: false,
  };

  todos.push(newTodo);
  todoInput.value = "";
  todoInput.focus();

  saveTodos();
  renderTodos();
}

function toggleTodo(id) {
  const todo = todos.find((t) => t.id === id);
  if (todo) todo.completed = !todo.completed;

  saveTodos();
  renderTodos();
}

function deleteTodo(id) {
  todos = todos.filter((t) => t.id !== id);
  saveTodos();
  renderTodos();
}

function renderTodos() {
  todoList.innerHTML = "";

  if (todos.length === 0) {
    emptyMsg.classList.add("show");
    return;
  }

  emptyMsg.classList.remove("show");

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = "todo-item";

    if (todo.completed) li.classList.add("completed");

    li.innerHTML = `
      <input
        type="checkbox"
        class="todo-checkbox"
        ${todo.completed ? "checked" : ""}
        onchange="toggleTodo(${todo.id})"
      >
      <span class="todo-text">${escapeHtml(todo.text)}</span>
      <button class="delete-btn" onclick="deleteTodo(${todo.id})">Delete</button>
    `;

    todoList.appendChild(li);
  });
}

function saveTodos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function loadTodos() {
  const jsonString = localStorage.getItem(STORAGE_KEY);
  todos = jsonString ? JSON.parse(jsonString) : [];
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}
