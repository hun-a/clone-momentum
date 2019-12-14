const todoForm = document.querySelector('#js-todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('#js-todo-list');

const TODOS_LC = 'TODOS';
const DONE_CL = 'js-done';
const BTN_DONE = 'done';
const BTN_DELETE = 'delete';
const MAX_TODO_LENGTH = 5;
const MAX_MESSAGE = 'Can\'t add more than 5';
const DEFAULT_MESSAGE = 'Add your TODO';

let todos = [];

function saveTodos() {
  localStorage.setItem(TODOS_LC, JSON.stringify(todos));
}

function handleDone(event) {
  const li = event.target.parentNode;
  li.classList.add(DONE_CL);
  todos.forEach(todo => {
    if (todo.id === Number(li.id)) {
      todo.isDone = true;
    }
  });
  saveTodos();
}

function handleDelete(event) {
  const li = event.target.parentNode;
  todoList.removeChild(li);
  todos = todos.filter(todo => todo.id !== Number(li.id));
  saveTodos();
}

function createLi(todoObject) {
  todoObject.id = todoObject.id || todos.length + 1;
  todoObject.isDone = !!todoObject.isDone;
  todos.push(todoObject);
  saveTodos();

  const li = document.createElement('li');
  const span = document.createElement('span');
  const doneBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');

  li.id = todoObject.id;
  span.innerHTML = todoObject.text;
  doneBtn.classList.add(BTN_DONE);
  deleteBtn.classList.add(BTN_DELETE);
  doneBtn.innerHTML = BTN_DONE;
  deleteBtn.innerHTML = BTN_DELETE;
  doneBtn.addEventListener('click', handleDone);
  deleteBtn.addEventListener('click', handleDelete);

  li.appendChild(doneBtn);
  li.appendChild(deleteBtn);
  li.appendChild(span);

  return li;
}

function paintTodo(todoObject) {
  const li = createLi(todoObject);
  if (todoObject.isDone) {
    li.classList.add(DONE_CL);
  }
  todoList.appendChild(li);
}

function loadTodos() {
  todoInput.placeholder = DEFAULT_MESSAGE;
  const list = localStorage.getItem(TODOS_LC);
  if (list) {
    const parsedList = JSON.parse(list);
    parsedList.forEach(paintTodo);
  }
}

function handleSubmit(event) {
  event.preventDefault();
  if (todos.length === MAX_TODO_LENGTH) {
    todoInput.placeholder = MAX_MESSAGE;
    todoInput.value = '';
    return;
  }
  const text = todoInput.value;
  paintTodo({ text });
  todoInput.placeholder = DEFAULT_MESSAGE;
  todoInput.value = '';
}

function init() {
  loadTodos();
  todoForm.addEventListener('submit', handleSubmit);
}

init();