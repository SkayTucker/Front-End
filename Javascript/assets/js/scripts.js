var currentNumberWrapper = document.getElementById("currentNumber");
var creditosWrapper = document.getElementById("creditos");
var currentNumber = 0;



function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {

    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    
}



function zerar() {
    
    currentNumber = 0;
    currentNumberWrapper.innerHTML = currentNumber;
    
}

function mais10() {
    
    currentNumber = currentNumber + 10;
    currentNumberWrapper.innerHTML = currentNumber;
    
}

function javinha() {
    
    creditos = "javascript é legal"
    creditosWrapper.innerHTML = creditos;
    
}