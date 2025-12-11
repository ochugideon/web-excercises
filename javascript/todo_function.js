
let todoListField = document.querySelector('.todo-list');

const dateField = document.querySelector('.date-field')

let task = document.querySelector('.input-field');

const listItem = document.querySelector('js-listItem');

const todoList = [];

updateList()



function  updateList() {
  todoListField.innerHTML = '';

  let htmlList = '';

  todoList.forEach(function(listObject,index){

    const name = listObject.name;
    const date = listObject.date;

    html = `<div>${name}</div> <div>${date}</div> <button onclick="
    todoList.splice(${index},1); updateList()">Delete</button>`;
    htmlList += html
  })
  todoListField.innerHTML = htmlList;

  task.value = ''
  dateField.value = ''
}

  
  // for (let taskValue = 0; taskValue < todoList.length; taskValue++ ) {
    
  // //console.log(htmlList)
  
  // }


function addTask() {
  if (task.value) {
    todoList.push({name: task.value, date:dateField.value});
    updateList()
    }
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
