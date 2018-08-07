class Calculator {
	constructor() {
		this.operator = '';
		this.isDisplayEmpty = true;
		this.display = document.getElementById('display');
		this.subDisplay = document.getElementById('subDisplay');
		this.cachedValue = 0;
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
		this.display.value += x;
		this.subDisplay.value += x;
		this.isDisplayEmpty = false;
	}
	chooseOperation(x) {
		if (!this.isDisplayEmpty) {
		this.cachedValue = this.display.value;
		this.operator = x;
		this.display.value = '';
		this.subDisplay.value += x;
		this.isDisplayEmpty = true;
		}
	}
	equals() {
		let answer = this.operations[this.operator](+this.cachedValue,+this.display.value);
		this.cachedValue += this.display.value;
		this.display.value = answer;

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
equalsButton.addEventListener("click", () => calc.equals());