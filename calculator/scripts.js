//constructor with functions in them
class Calculator {
	constructor(printHistory, printCurrent) {
		this.printHistory = printHistory;
		this.printCurrent = printCurrent;
		this.clearAll();
	}

	selectNumber(number) {
		if (number === '.' && this.printCurrent.includes(' . ')) return;
		this.currentOperand = number;
		// this.printCurrent.toString() + number.toString();
	}
	selectOperator(operator) {
		this.operator = operator;
		this.previousOperator = this.currentOperator;
		this.currentOperator = '';
	}

	clearOne() {}

	// clears all operations and numbers in the output section
	clearAll() {
		this.currentOperand = '';
		this.previousOperand = '';
		this.operation = undefined;
	}

	makeCalculation() {}

	updateOutputs() {
		this.printCurrent.innerText = this.currentOperand;
	}
}

// cache in memory - working up to here
const numberButtons = document.querySelectorAll('[ data-number ]');
// console.log(numberButtons);
const operatorButtons = document.querySelectorAll('[ data-operator ]');
// console.log(operatorButtons);
const equalsButton = document.querySelector('[ data-equals ]');
// console.log(equalsButton);
const clearOneButton = document.querySelector('[ data-clear-one ]');
// console.log(clearOneButton);
const clearAllButton = document.querySelector('[ data-clear-all ]');
// console.log(clearAllButton);
const printHistory = document.querySelector('[ data-print-history ]');
// console.log(printHistory);
const printCurrent = document.querySelector('[ data-print-current ]');
// console.log(printCurrent);

const calculator = new Calculator(printHistory, printCurrent);
// console.log(calculator);

numberButtons.forEach((button) => {
	button.addEventListener('click', () => {
		calculator.selectNumber(button.innerText);
		// console.log(calculator.selectNumber);
		calculator.updateOutputs();
		// console.log(calculator.updateOutputs);
	});
});

operatorButtons.forEach((button) => {
	button.addEventListener('click', () => {
		calculator.selectOperator(button.innerText);
		calculator.updateOutputs();
	});
});
