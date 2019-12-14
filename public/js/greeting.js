const greetingContainer = document.querySelector('#js-greeting');
const userForm = greetingContainer.querySelector('form');
const userInput = userForm.querySelector('input');

const USER_NAME_LS = 'USER_NAME';
const SHOW_CL = 'showing';

function loadName() {
  return localStorage.getItem(USER_NAME_LS);
}

function paintGreeting(name) {
  userForm.classList.remove(SHOW_CL);
  greetingContainer.innerHTML = `Hello! ${name}`;
}

function saveName(name) {
  localStorage.setItem(USER_NAME_LS, name);
}

function handleSubmit(event) {
  event.preventDefault();
  
  const name = userInput.value;
  paintGreeting(name);
  saveName(name);
}

function askName() {
  userForm.classList.add(SHOW_CL);
  userForm.addEventListener('submit', handleSubmit);
}

function init() {
  const userName = loadName();
  if (userName) {
    paintGreeting(userName);
  } else {
    askName();
  }
}

init();