export function calculate(userInput) {
    console.time("Execution Time");
    var userCalculatorInput = userInput.slice(0, userInput.indexOf("="));
    var inputWithoutEqualSign = userCalculatorInput.toString();
    var calculationElements = inputWithoutEqualSign.split(/([+\-*/])/g).filter(function (item) { return item.trim() !== ''; });
    console.log('calculationElements: ', calculationElements);
    for (var i_1 = 0; i_1 < calculationElements.length - 1; i_1++) {
        if (calculationElements[i_1] === '-' && calculationElements[i_1 + 1] === '-') {
            calculationElements.splice(i_1, 2, '+');
        }
    }
    if (calculationElements[0] === '-' && !isNaN(Number(calculationElements[1]))) {
        calculationElements[0] = '-' + calculationElements[1];
        calculationElements.splice(1, 1);
    }
    for (var i_2 = 0; i_2 < calculationElements.length; i_2++) {
        if (calculationElements[i_2] === '-' && i_2 > 0 && '+*/'.includes(calculationElements[i_2 - 1])) {
            calculationElements.splice(i_2, 2, '-' + calculationElements[i_2 + 1]);
        }
    }
    while (calculationElements.includes('*') || calculationElements.includes('/')) {
        var i_3 = calculationElements.findIndex(function (item) { return item === '*' || item === '/'; });
        if (calculationElements[i_3] === '/' && calculationElements[i_3 + 1] === '0') {
            throw new Error('Division by zero');
        }
        if (calculationElements[i_3] === '*') {
            var operationResult = parseFloat(calculationElements[i_3 - 1]) * parseFloat(calculationElements[i_3 + 1]);
            calculationElements.splice(i_3 - 1, 3, operationResult.toString());
        }
        if (calculationElements[i_3] === '/') {
            var operationResult = parseFloat(calculationElements[i_3 - 1]) / parseFloat(calculationElements[i_3 + 1]);
            calculationElements.splice(i_3 - 1, 3, operationResult.toString());
        }
    }
    console.log('calculationElements after * and /: ', calculationElements);
    var i;
    while (calculationElements.includes('+') || (calculationElements.includes('-') && calculationElements.some(function (v, i) { return v === '-' && i !== 0 && !'+*/'.includes(calculationElements[i - 1]); }))) {
        i = calculationElements.findIndex(function (item) { return item === '+' || (item === '-' && i !== 0 && !'+*/'.includes(calculationElements[i - 1])); });
        if (calculationElements[i] === '+') {
            var operationResult = parseFloat(calculationElements[i - 1]) + parseFloat(calculationElements[i + 1]);
            calculationElements.splice(i - 1, 3, operationResult.toString());
        }
        if (calculationElements[i] === '-') {
            var operationResult = parseFloat(calculationElements[i - 1]) - parseFloat(calculationElements[i + 1]);
            calculationElements.splice(i - 1, 3, operationResult.toString());
        }
    }
    return Number(calculationElements[0]);
}
