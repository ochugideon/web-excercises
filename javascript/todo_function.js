let addButton = document.querySelector('.add-btn');

let todoListField = document.querySelector('.todo-list');

const dateField = document.querySelector('.date-field')

let task = document.querySelector('.input-field');

const listItem = document.querySelector('js-listItem');

const todoList = [JSON.parse(localStorage.getItem('listItems'))];


updateList()

function  updateList() {
  
  
  let htmlList = '';
  
  console.log(todoList)

  todoList.forEach(function(listObject,index){

    const name = listObject.name;
    const date = listObject.date;

    html = `<div>${name}</div> <div>${date}</div> <button onclick="id='del'; deleteTask(); todoList.splice(${index},1);">Delete</button>`;
    htmlList += html
  })

  todoListField.innerHTML = htmlList;

  task.value = ''
  dateField.value = ''

  localStorage.setItem('listItems', JSON.stringify(htmlList))
  console.log(localStorage.getItem('listItems'))
}

function addTask() {
  if (task.value) {
    todoList.push({name: task.value, date:dateField.value}); 
    task.value = '';
    dateField.value = '';
    setTimeout(
    function()
      {
        addButton.innerText = 'Add'
        updateList()},1000
       );addButton.innerText = 'Loading...'
    } else{alert('No task was entered!')}
}


function buttonEvent(event){
  if(event.key === 'Enter') {
    addTask()
  }
}
// this function is to save the list items in local storage
function saveTask(){
  localStorage.setItem('listItems', JSON.stringify())
}

function deleteTask(){
  let deleteBtn = document.querySelector('#del'); setTimeout(function(){deleteBtn.innerText = 'Delete'; updateList()}, 1000); deleteBtn.innerText = 'Loading...';
}