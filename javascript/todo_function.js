const todoList = [];

let todoListField = document.querySelector('.todo-list');

let task = document.querySelector('.input-field');

const listItem = document.querySelector('js-listItem');


function addTask(){ 
  let taskInList = ''; 
  

  updateList();
     for (let taskValue = 0; taskValue < todoList.length; taskValue++ ) {
    html = `<p>
    ${todoList[taskValue]} 
    <input type="date" class="date-feild"> <button onclick="todoList.splice(${taskValue},1); todoListField.innerHTML = ''; addTask(); "   class="btn">Delete Task</button>
    </p>`  

    taskInList += html;
    task.value = ''

todoListField.innerHTML = taskInList;
  }
   
}

function updateList() {
  if (task.value) {
  todoListField.innerHTML = '';
  todoList.push(task.value);
}
}

function buttonEvent(event){
  if(event.key === 'Enter') {
    addTask()
  }
}