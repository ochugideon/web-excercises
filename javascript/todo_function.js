const todoList = [];

let todoListField = document.querySelector('.todo-list');

let task = document.querySelector('.input-field');

const listItem = document.querySelector('js-listItem');


function addTask(){ 
  let taskInList = '';
  
  todoListField.innerHTML = '';
  
  updateList();
     for (let taskValue = 0; taskValue < todoList.length; taskValue++ ) {
    html = `<p>
    ${todoList[taskValue]}  <input type="date" class="date-feild"> <button onclick="todoList.splice(${taskValue},1); addTask()"   class="btn">Delete Task</button>
    </p>`  

    taskInList += html;
    task.value = ''

todoListField.innerHTML = taskInList;

  }
   
}

function updateList() {
  if (task.value) {
  todoList.push(task.value);
}
}