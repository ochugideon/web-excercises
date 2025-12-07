const todoList = [];

let todoListField = document.querySelector('.todo-list');

const task = document.querySelector('input');

const listItem = document.querySelector('js-listItem');


let taskValue;

function updateList(){ 
  todoListField.innerHTML = '';
    for (taskValue = 0; taskValue <= todoList.length - 1; taskValue++ ) {
    todoListField.innerHTML += `<p>${todoList[taskValue]} <button onclick="todoList.splice(todoList.indexOf(todoList[taskValue - 1]), 1); updateList()"; class="btn">Delete Task</button></p>`  
  }
  task.value = '' 
}

function addTask() {
  if (task.value){
  todoList.push(task.value);
  updateList()
  } else{alert('No task was entered!')}
  
}