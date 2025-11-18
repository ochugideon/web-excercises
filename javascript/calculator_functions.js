 let inputField = document.querySelector('.input-box');

function getButtonValue(value=null){
      inputField.value += value; 
    };

function calculate() {
  inputField.value = eval(inputField.value)
};

function clearCalc() {
  inputField.value = ''
};

