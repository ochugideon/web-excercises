
let todoListField = document.querySelector('.todo-list');

const dateField = document.querySelector('.date-field')

let task = document.querySelector('.input-field');

const listItem = document.querySelector('js-listItem');

const todoList = [{name: 'wash', date: '12/04/2025'}];

updateList()
function  updateList() {
  todoListField.innerHTML = '';
  let htmlList = '';
  for (let taskValue = 0; taskValue < todoList.length; taskValue++ ) {
    const listObject = todoList[taskValue]

    const name = listObject.name;
    const date = listObject.date;

    html = `<div>${name}</div> <div>${date}</div> <button onclick="
    todoList.splice(${taskValue},1); updateList()">Delete</button>`;
    htmlList += html
  }
  todoListField.innerHTML = htmlList;
  task.value = ''
  dateField.value = ''
  console.log(htmlList)
  
  }


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