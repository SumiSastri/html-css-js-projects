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
	// back-space slice one from array

	clearOne() {
		this.currentOperand = this.currentOperand.toString().slice(0, -1);
	}

	// clears all operations and numbers in the output section
	clearAll() {
		this.currentOperand = '';
		this.previousOperand = '';
		this.operator = undefined;
	}
	// switch to select operator and calculation
	// make sure only numbers chosen with NaN condition
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
	// handle decimal, format numbers
	getDisplayNumber(number) {
		const stringNumber = number.toString();
		const integerNumbers = parseFloat(stringNumber.split('.')[0]);
		const decimals = stringNumber.split('.')[1];
		let integerDisplay;
		if (isNaN(integerNumbers)) {
			integerDisplay = '';
		} else {
			integerDisplay = integerNumbers.toLocaleString('en', {
				maximumFractionDigits: 0
			});
		}
		if (decimals != null) {
			return `${integerDisplay}. ${decimals}`;
		} else {
			return integerDisplay;
		}
	}
	// history and current displaying
	updateOutputs() {
		this.printCurrent.innerText = this.currentOperand;
		this.printHistory.innerText = this.previousOperand;
		if (this.operator != null) {
			this.printHistory.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operator}`;
		} else {
			this.printHistory.innerText = '';
		}
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

clearAllButton.addEventListener('click', (button) => {
	calculator.clearAll();
	calculator.updateOutputs();
});

clearOneButton.addEventListener('click', (button) => {
	calculator.clearOne();
	calculator.updateOutputs();
});
