class Calculator {
	constructor() {
		this.operator = '';
		this.isOperationChoosen = false;
		this.isAnswerDisplayed = false;
		this.display = document.getElementById('display');
		this.cachedValue = 0;
		this.display.value = 0;
		this.operations = {
			'+': (a,b) => a+b,
			'-': (a,b) => a-b,
			'*': (a,b) => a*b,
			'/': (a,b) => a/b,
		}
	}
	addNumber(x) {
		if (this.isOperationChoosen) {
			this.display.value = x;
			this.isOperationChoosen = false;
		}
		else {
			if (this.display.value != '0') {
				this.display.value += x;
			}
			else {
					this.display.value = x;
			}
		}
	}
	chooseOperation(x) {
		if (!this.isDisplayEmpty) {
		this.cachedValue = this.display.value;
		this.operator = x;
		this.isOperationChoosen = true;
		}
	}
	equals(x) {
		if (this.operator) {
			let answer = this.operations[this.operator](+this.cachedValue,+x);
			this.display.value = answer;
			this.cachedValue = this.display.value;
			this.isAnswerDisplayed = true;
			this.isOperationChoosen = false;
		}
	}
	clearAll() {
		this.display.value = '0';
		this.cachedValue = 0;
		this.operator = '';
	}
	clearDisplay() {
		this.display.value = '0';
	}
	addDot() {
		this.display.value += '.';
	}
};
let calc =  new Calculator;
let numberButtons = document.getElementsByClassName('numberButton');
for (let j = 0; j < numberButtons.length; j++) {
	numberButtons[j].addEventListener("click", () => calc.addNumber(numberButtons[j].value));
};

let operationButtons = document.getElementsByClassName('operationButton');
for (let j = 0; j < operationButtons.length; j++) {
	operationButtons[j].addEventListener("click", () => calc.chooseOperation(operationButtons[j].value));
}
let equalsButton = document.getElementById("eqvls");
equalsButton.addEventListener("click", () => calc.equals(calc.display.value));

let clearAllButton = document.getElementById("clearAll");
clearAllButton.addEventListener("click", () => calc.clearAll());

let clearDisplayButton = document.getElementById("clearDisplay");
clearDisplayButton.addEventListener("click", () => calc.clearDisplay());

let dotButton = document.getElementById("dotBtn");
dotButton.addEventListener("click", () => calc.addDot());

