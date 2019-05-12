// add event listener to create arrays of numbers and operators
const numbers = document.querySelectorAll('.number');
// console.log(numbers); array of 10 numbers
// select numbers - ensure it is a number not an operator, allow decimal
function selectNumbers(a, b) {}

const decimalButton = document.getElementById('decimal');
// console.log(decimalButton);
decimalButton.onclick = function() {};
function handleDecimal() {}

// select operator
const operators = document.querySelectorAll('.operator');
// console.log(operators); array of 4 operators
function selectOperator(operator) {}
// print numbers and operators selected in history
function printNumbers() {}
function printOperators() {}

const clearOne = document.getElementById('C');
// console.log(clearOne); click action registered
clearOne.onclick = function() {};
// clear one number in history
function clearOneHistory() {}

const clearAll = document.getElementById('CE');
// console.log(clearAll); click action registered
clearAll.onclick = function() {};
// clear all in history and start again
function clearAllHistory() {}

// add event listeners to unique buttons - equals, decimal, clear
const equalsButton = document.getElementById('=');
// console.log(equalsButton); click action registered
equalsButton.onclick = function() {};
// select equals and perform calculation
function performCalculation() {}
// show result
function printAnswer() {}
// clear all answers and start again
function clearAllAnswers() {}
