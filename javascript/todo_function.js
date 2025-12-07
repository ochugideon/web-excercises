const todoList = [];

const task = document.querySelector('input');

const listItem = document.querySelector('js-listItem');

function addTask() {
  todoList.push(task.value);
  for (x in todoList) {
    console.log(x)
    
  }
  task.value = ''
}