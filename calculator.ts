// function adjustFontSize(display: HTMLElement, maxDigits: number) {
//   const textContent = display.textContent || '';
//   const length = textContent.length;
//   if (length > maxDigits) {
//     const fontSize = Math.floor((maxDigits / length) * 100);
//     display.style.fontSize = `${fontSize}%`;
// } else {
//   display.style.fontSize = '100%';
// }
// }

function adjustFontSize(display: HTMLElement) {
  console.log('adjustFontSize called');
  let fontSize = parseInt(window.getComputedStyle(display, null).getPropertyValue('font-size'), 10);
  console.log('Initial font size:', fontSize);

  console.log('display.scrollWidth:', display.scrollWidth);
  console.log('display.offsetWidth:', display.offsetWidth);

  const requiredFontSize = fontSize * (display.offsetWidth - 10) / display.scrollWidth;

  display.style.fontSize = `${Math.max(requiredFontSize, 10)}px`;
  console.log('Updated font size:', display.style.fontSize);
}



function formatNumber(num: number, maxDigits: number): string {
  if (Math.abs(num) > Number.MAX_SAFE_INTEGER) {
    return num.toExponential(maxDigits);
  }
  let numStr = num.toString();
  if (numStr.length > maxDigits - 1) {
    if (Number.isInteger(num)) {
      numStr = num.toExponential(0);

    } else {
        const decimalPlaces = maxDigits - (numStr.indexOf('.') + 1);
        num = Number(num.toFixed(decimalPlaces));
        numStr = num.toString();
        if (numStr.length > maxDigits) {
          numStr = num.toExponential(decimalPlaces);
        }
      }
    // } else {
    //   const decimalPlaces = maxDigits - numStr.indexOf('.') - 1;
    //   const factor = Math.pow(10, decimalPlaces);
    //   num = Math.floor(num * factor) / factor;
    //   numStr = num.toString();
    //   if (numStr.length > maxDigits - 1) {
    //     numStr = num.toExponential(decimalPlaces);
    //   }
    // }
  }
  return numStr;
}


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
  console.timeEnd('Execution Time');
  return Number(calculationElements[0]);
}

const buttons = document.querySelectorAll('.calculator-key') as NodeListOf<HTMLButtonElement>;

let input = '';

buttons.forEach((button: HTMLButtonElement) => {
  button.addEventListener('click', () => {
    const display = document.querySelector('.auto-scaling-text');
    if (display) {
      display.classList.remove('error-text');
    }
    console.log('Button clicked: ', button.textContent);
    const value = button.textContent;

    if (value === '=') {
      input += value;
      setTimeout(() => {
        const display = document.querySelector('.auto-scaling-text') as HTMLElement;
        let result: number;
        let formattedResult: string;
        try {
          result = calculate(input);
          formattedResult = formatNumber(result, 8)
        } catch (error) {
          if (display) {
            display.textContent = 'Unable to divide by 0';
            display.classList.add('error-text');
          }
          return;
        }

        if (display) {
          formattedResult = formattedResult.replace(/-/g, '\u2011');
          display.textContent = formattedResult;
          adjustFontSize(display);
        }
        input = '';
      }, 0);
    } else if (value === 'C') {

      input = '';
      const display = document.querySelector('.auto-scaling-text');
      if (display) {
        display.textContent = '0';
      }
    } else {

      input += value;
      console.log('Current input string: ', input);

      if (display) {
        let displayText = input.replace(/-/g, '\u2011');
        display.textContent = displayText;
      }
    }
  });
});
