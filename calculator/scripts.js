//constructor with functions in them
class Calculator {
	constructor(printHistory, printCurrent) {
		this.printHistory = printHistory;
		this.printCurrent = printCurrent;
		this.clearAll();
	}

	//select number, only one decimal and make number a string
	selectNumber(number) {
		if (number === '.' && this.currentOperand.includes('.')) return;
		this.currentOperand = this.currentOperand.toString() + number.toString();
	}

	// select the operator to perform calculation
	selectOperator(operator) {
		if (this.currentOperatnd === '') return;
		if (this.previousOperand !== '') {
			this.makeCalculation();
		}
		this.operator = operator;
		this.previousOperand = this.currentOperand;
		this.currentOperand = '';
	}

	clearOne() {}

	// clears all operations and numbers in the output section
	clearAll() {
		this.currentOperand = '';
		this.previousOperand = '';
		this.operator = undefined;
	}

	makeCalculation() {
		let calculation;
		const previous = parseFloat(this.previousOperand);
		const current = parseFloat(this.currentOperand);
		if (isNaN(previous) || isNaN(current)) return;
		switch (this.operator) {
			case '+':
				calculation = previous + current;
				break;
			case '-':
				calculation = previous - current;
				break;
			case '*':
				calculation = previous * current;
				break;
			case '/':
				calculation = previous / current;
				break;
			default:
				return;
		}
		this.currentOperand = calculation;
		this.operator = undefined;
		this.previousOperand = '';
	}

	// history and current displaying
	updateOutputs() {
		this.printCurrent.innerText = this.currentOperand;
		this.printHistory.innerText = this.previousOperand;
	}
}

const numberButtons = document.querySelectorAll('[ data-number ]');
const operatorButtons = document.querySelectorAll('[ data-operator ]');
const equalsButton = document.querySelector('[ data-equals ]');
const clearOneButton = document.querySelector('[ data-clear-one ]');
const clearAllButton = document.querySelector('[ data-clear-all ]');
const printHistory = document.querySelector('[ data-print-history ]');
const printCurrent = document.querySelector('[ data-print-current ]');

const calculator = new Calculator(printHistory, printCurrent);

numberButtons.forEach((button) => {
	button.addEventListener('click', () => {
		calculator.selectNumber(button.innerText);
		calculator.updateOutputs();
	});
});

operatorButtons.forEach((button) => {
	button.addEventListener('click', () => {
		calculator.selectOperator(button.innerText);
		calculator.updateOutputs();
	});
});

equalsButton.addEventListener('click', (button) => {
	calculator.makeCalculation();
	calculator.updateOutputs();
});
