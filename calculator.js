function adjustFontSize(display, maxDigits) {
    var textContent = display.textContent || '';
    var length = textContent.length;
    if (length > maxDigits) {
        var fontSize = Math.floor((maxDigits / length) * 100);
        display.style.fontSize = "".concat(fontSize, "%");
    }
    else {
        display.style.fontSize = '100%';
    }
}
function formatNumber(num, maxDigits) {
    if (Math.abs(num) > Number.MAX_SAFE_INTEGER) {
        return num.toExponential(maxDigits);
    }
    var numStr = num.toString();
    if (numStr.length > maxDigits) {
        if (Number.isInteger(num)) {
            numStr = num.toExponential(0);
        }
        else {
            var decimalPlaces = maxDigits - numStr.indexOf('.') - 1;
            var factor = Math.pow(10, decimalPlaces);
            num = Math.floor(num * factor) / factor;
            numStr = num.toString();
            if (numStr.length > maxDigits) {
                numStr = num.toExponential(decimalPlaces);
            }
        }
    }
    return numStr;
}
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
    console.timeEnd('Execution Time');
    return Number(calculationElements[0]);
}
var buttons = document.querySelectorAll('.calculator-key');
var input = '';
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        var display = document.querySelector('.auto-scaling-text');
        if (display) {
            display.classList.remove('error-text');
        }
        console.log('Button clicked: ', button.textContent);
        var value = button.textContent;
        if (value === '=') {
            input += value;
            setTimeout(function () {
                var display = document.querySelector('.auto-scaling-text');
                var result;
                var formattedResult;
                try {
                    result = calculate(input);
                    formattedResult = formatNumber(result, 8);
                }
                catch (error) {
                    if (display) {
                        display.textContent = 'Unable to divide by 0';
                        display.classList.add('error-text');
                    }
                    return;
                }
                if (display) {
                    display.textContent = formattedResult;
                    adjustFontSize(display, 8);
                }
                input = '';
            }, 0);
        }
        else if (value === 'C') {
            input = '';
            var display_1 = document.querySelector('.auto-scaling-text');
            if (display_1) {
                display_1.textContent = '0';
            }
        }
        else {
            input += value;
            console.log('Current input string: ', input);
            if (display) {
                display.textContent = input;
            }
        }
    });
});
