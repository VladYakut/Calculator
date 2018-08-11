class Calculator {
	constructor() {
		this.operator = '';
		this.isDisplayEmpty = true;
		this.display = document.getElementById('display');
		// this.subDisplay = document.getElementById('subDisplay');
		this.cachedValue = 0;
		this.display.value = 0;
		this.operations = {
			'+': (a,b) => a+b,
			'-': (a,b) => a-b,
			'*': (a,b) => a*b,
			'/': (a,b) => a/b,
			'**y': (a,b) => Math.pow(a,b),
			'sqrt': (a,b) => Math.sqrt(b)
		}
	}
	addNumber(x) {
		if (this.display.value != '0') {
		this.display.value += x;
		// this.subDisplay.value += x;
		this.isDisplayEmpty = false;
		}
		else if (x != 0) {
			this.display.value = x;
		}
	}
	chooseOperation(x) {
		if (!this.isDisplayEmpty) {
		this.cachedValue = this.display.value;
		this.operator = x;
		this.display.value = '0';
		// this.subDisplay.value += x;
		this.isDisplayEmpty = true;
		}
	}
	equals(x) {
		if (this.operator) {
			let answer = this.operations[this.operator](+this.cachedValue,+x);
			this.display.value = answer;
			this.cachedValue = this.display.value;
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
clearDisplayButton.addEventListener("click", () => calc.clearDisplay())

