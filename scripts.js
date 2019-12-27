//Script for functions and styling of calculator elements

//Initial state
let firstNum = "";
let secondNum = "";
let operand = "";
document.getElementById("textDisplay").innerHTML = "0";

//Displaying numbers on calculator
const one = document.querySelector("div.item1").addEventListener('click', function() {append(1)});
const two = document.querySelector("div.item2").addEventListener('click', function() {append(2)});
const three = document.querySelector("div.item3").addEventListener('click', function() {append(3)});
const four = document.querySelector("div.item4").addEventListener('click', function() {append(4)});
const five = document.querySelector("div.item5").addEventListener('click', function() {append(5)});
const six = document.querySelector("div.item6").addEventListener('click', function() {append(6)});
const seven = document.querySelector("div.item7").addEventListener('click', function() {append(7)});
const eight = document.querySelector("div.item8").addEventListener('click', function() {append(8)});
const nine = document.querySelector("div.item9").addEventListener('click', function() {append(9)});
const zero = document.querySelector("div.item0").addEventListener('click', function() {append(0)});

//Operands
const plus = document.querySelector("div.itemplus").addEventListener('click', function() {setOperand("+")});
const minus= document.querySelector("div.itemminus").addEventListener('click', function() {setOperand("-")});
const mult = document.querySelector("div.itemmultiply").addEventListener('click', function() {setOperand("*")});
const divi= document.querySelector("div.itemdivide").addEventListener('click', function() {setOperand("/")});

//Other functions
const equals= document.querySelector("div.itementer").addEventListener('click', function() {setOperand("=")});
const clr = document.querySelector("div.itemclr").addEventListener('click', function() {clear()});
const display = document.querySelector("textDisplay");


//Functions to perform calculator logic
function append(a){
    if (operand === "="){
        firstNum = a;
        operand = "";
    } else if (operand === "back"){

    }
    if (operand === ""){
    firstNum = firstNum + a;
    document.getElementById("textDisplay").innerHTML = firstNum;
    } else {
        secondNum = secondNum + a;
        document.getElementById("textDisplay").innerHTML = secondNum;
    }
    
    console.log(firstNum);
}

function setOperand(a) {
    if (a === "=") {
        firstNum = operate(firstNum, secondNum, operand);
        document.getElementById("textDisplay").innerHTML = firstNum;
    } else if (secondNum != ""){
        firstNum = operate(firstNum, secondNum, operand);
        document.getElementById("textDisplay").innerHTML = firstNum;
        operand = "";
        secondNum = "";
    }
    operand = a;
}

function clear(){
    firstNum = "";
    secondNum = "";
    operand = "";
    document.getElementById("textDisplay").innerHTML = "0";
}

//Calculator Math Functions
function add(a, b) {
    return parseInt(a) + parseInt(b);
}

function subtract(a, b){
    return parseInt(a) - parseInt(b);
}

function multiply(a, b) {
    return parseInt(a)*parseInt(b);
}

function divide(a, b){
    if (b == 0) {
        return "DIV BY 0 ERR";
    }
    return parseInt(a) / parseInt(b);
}

function operate(a, b, operand){
    if (operand === "+"){
        return add(a, b);
    }
    if (operand === "-"){
        return subtract(a, b);
    }
    if (operand === "*"){
        return multiply(a, b);
    }
    if (operand === "/"){
        return divide(a, b);
    }

}


//TODO:
//Set max length on numbers
//Handle error when user presses enter before setting firstnum,secondnum
//Add support for decimal points