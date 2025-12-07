const todoList = [];

let todoListField = document.querySelector('.todo-list');

const task = document.querySelector('input');

const listItem = document.querySelector('js-listItem');

function addTask() {
  todoListField.innerHTML = '';
  todoList.push(task.value);
  for (let taskValue = 0; taskValue <= todoList.length - 1; taskValue++ ) {
    todoListField.innerHTML += `<p>${todoList[taskValue]}</p>`  
  }
  task.value = ''
}