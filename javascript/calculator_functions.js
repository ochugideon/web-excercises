 let inputField = document.querySelector('.input-box');

 let isEmpty = true;

clearCalc()

function getButtonValue(value){
  if(isEmpty) {inputField.value += value;} else {inputField.value ='' ; inputField.value += value; isEmpty=true} 
  };

function calculate() {
  inputField.value = eval(inputField.value);
  isEmpty = false;
};

function clearCalc() {
  inputField.value = '';
};

function checker(){
  if(inputField.value){console.log('yes')} else{console.log('nah')}
}

