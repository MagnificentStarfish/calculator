export function calculate(userInput: string): number  {
    console.time("Execution Time");
    let userCalculatorInput = userInput.slice(0, userInput.indexOf("="));

    let inputWithoutEqualSign = userCalculatorInput.toString();
    let calculationElements = inputWithoutEqualSign.split(/([+\-*/])/g).filter((item) => item.trim() !== '');

    console.log('calculationElements: ', calculationElements);

    for (let i=0; i < calculationElements.length - 1; i++) {
      if (calculationElements[i] === '-' && calculationElements[i+1] === '-') {
        calculationElements.splice(i, 2, '+');
      }
    }

    if (calculationElements[0] === '-' && !isNaN(Number(calculationElements[1]))) {
      calculationElements[0] = '-' + calculationElements[1];
      calculationElements.splice(1, 1);
    }


    for (let i = 0; i < calculationElements.length; i++) {
      if (calculationElements[i] === '-' && i > 0 && '+*/'.includes(calculationElements[i-1])) {
        calculationElements.splice(i, 2, '-' + calculationElements[i+1]);
      }
    }

    while (calculationElements.includes('*') || calculationElements.includes('/')) {
      let i = calculationElements.findIndex(item => item === '*' || item === '/');
      if (calculationElements[i] === '/' && calculationElements[i+1] === '0') {
        throw new Error('Division by zero');
      }
      if (calculationElements[i] === '*') {
        let operationResult = parseFloat(calculationElements[i-1]) * parseFloat(calculationElements[i+1]);
        calculationElements.splice(i-1, 3, operationResult.toString());
      }
      if (calculationElements[i] === '/') {
        let operationResult = parseFloat(calculationElements[i-1]) / parseFloat(calculationElements[i+1]);
        calculationElements.splice(i-1, 3, operationResult.toString());
      }
    }

    console.log('calculationElements after * and /: ', calculationElements);

    let i: any;
    while (calculationElements.includes('+') || (calculationElements.includes('-') && calculationElements.some((v, i) => v === '-' && i !== 0 && !'+*/'.includes(calculationElements[i-1])))) {
      i = calculationElements.findIndex(item => item === '+' || (item === '-' && i !== 0 && !'+*/'.includes(calculationElements[i-1])));
      if (calculationElements[i] === '+') {
        let operationResult = parseFloat(calculationElements[i-1]) + parseFloat(calculationElements[i+1]);
        calculationElements.splice(i-1, 3, operationResult.toString());
      }
      if (calculationElements[i] === '-') {
        let operationResult = parseFloat(calculationElements[i-1]) - parseFloat(calculationElements[i+1]);
        calculationElements.splice(i-1, 3, operationResult.toString());
      }
    }

    return Number(calculationElements[0]);

}
