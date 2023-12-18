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

// Get all the buttons
const buttons = document.querySelectorAll('.calculator-key') as NodeListOf<HTMLButtonElement>;

// Initialize the input string
let input = '';

// Add event listeners to the buttons
buttons.forEach((button: HTMLButtonElement) => {
  button.addEventListener('click', () => {
    console.log('Button clicked: ', button.textContent);
    const value = button.textContent;

    if (value === '=') {
      // If the equals sign is clicked, calculate the input and display the result
      input += value;
      setTimeout(() => {
        let result: number;
        try {
          result = calculate(input);
        } catch (error) {
          const display = document.querySelector('.auto-scaling-text');
          if (display) {
            display.textContent = 'Unable to divide by 0';
          }
          return;
        }
        const display = document.querySelector('.auto-scaling-text');
        if (display) {
          display.textContent = result.toString();
        }
        input = '';
      }, 0);
    } else if (value === 'C') {
      // If the clear sign is clicked, clear the input and the display
      input = '';
      const display = document.querySelector('.auto-scaling-text');
      if (display) {
        display.textContent = '0';
      }
    } else {
      // If a number or operator is clicked, append its value to the input string
      input += value;
      console.log('Current input string: ', input);
    }
  });
});

console.log(calculate('2+2'));  // Should print 4
console.log(calculate('3*7'));  // Should print 21
console.log(calculate('10/2'));  // Should print 5
console.log(calculate('3/0'));  // Should throw an error

//   // while (calculationElements.includes('+') || (calculationElements.includes('-') && calculationElements.some((v, i) => v === '-' && i !== 0 && !'+*/'.includes(calculationElements[i-1])))) {
//   //   let i = calculationElements.findIndex(item => item === '+' || (item === '-' && i !== 0 && !'+*/'.includes(calculationElements[i-1])));
//   // }
//   // // while (calculationElements.includes('+') || calculationElements.includes('-')) {
//   // //   let i = calculationElements.findIndex(item => item === '+' || item === '-');
//   //   if (calculationElements[i] === '+') {
//   //     let operationResult = parseFloat(calculationElements[i-1]) + parseFloat(calculationElements[i+1]);
//   //     calculationElements.splice(i-1, 3, operationResult.toString());
//   //   }
//   //   if (calculationElements[i] === '-') {
//   //     let operationResult = parseFloat(calculationElements[i-1]) - parseFloat(calculationElements[i+1]);
//   //     calculationElements.splice(i-1, 3, operationResult.toString());
//   //   }
//   // }

//   let result = parseFloat(calculationElements[0]);

//   console.log('Result: ', result);
//   console.timeEnd("Execution Time");

//   console.log(result);
//   return result;
// }

// // let testInput = "5*3+2-4/2=";
// // console.log(calculate(testInput)); // Expected output: 15

// // // ts-node calculator.ts
// // export function calculate(userInput: string): number | undefined  {
// //   console.time("Execution Time");
// //     let userCalculatorInput = userInput.slice(0, userInput.indexOf("="));
// //     let newString = userCalculatorInput.toString();
// //     let splitString = newString.split(/([+\-*/])/g).filter((item) => item.trim() !== '');
// //     console.log('splitString: ',splitString);
// //     let tempString = '';

// //     for (let i=0; i < splitString.length - 1; i++) {
// //       if (splitString[i] === '-' && splitString[i+1] === '-') {
// //         splitString.splice(i, 2, '+');
// //       }
// //     }

// //   for (let i = 0; i < splitString.length; i++) {
// //     if (splitString[i] === '-' && i > 0 && '+*/'.includes(splitString[i-1])) {
// //     splitString.splice(i, 2, '-' + splitString[i+1]);
// //     }
// //   }
// //     while (splitString.includes('*') || splitString.includes('/')) {
// //       let i = splitString.findIndex(item => item === '*' || item === '/');
// //       if (splitString[i] === '/' && splitString[i+1] === '0') {
// //         throw new Error('Division by zero');
// //       }
// //       if (splitString[i] === '*') {
// //         let operationResult = parseFloat(splitString[i-1]) * parseFloat(splitString[i+1]);
// //         splitString.splice(i-1, 3, operationResult.toString());
// //       }
// //       if (splitString[i] === '/') {
// //         let operationResult = parseFloat(splitString[i-1]) / parseFloat(splitString[i+1]);
// //         splitString.splice(i-1, 3, operationResult.toString());
// //       }
// //     }
// //     console.log('splitString after * and /: ',splitString);
// //     tempString = splitString.join('');

// // while (splitString.includes('+') || splitString.includes('-')) {
// //   let i = splitString.findIndex(item => item === '+' || item === '-');
// //   if (splitString[i] === '+') {
// //     let operationResult = parseFloat(splitString[i-1]) + parseFloat(splitString[i+1]);
// //     splitString.splice(i-1, 3, operationResult.toString());
// //   }
// //   if (splitString[i] === '-') {
// //     let operationResult = parseFloat(splitString[i-1]) - parseFloat(splitString[i+1]);
// //     splitString.splice(i-1, 3, operationResult.toString());
// //   }
// // }

// // console.log('tempstring: ', tempString);
// // let tempArray = tempString.split(/(\+|-)/);
// // tempArray = tempArray.filter(item => item !== '');
// // let result: number | undefined;

// // if (tempArray[0] === '-') {
// //   result = -parseFloat(tempArray[1]);
// //   tempArray = tempArray.slice(2);
// // } else {
// //   result = parseFloat(tempArray[0]);
// // }
// // console.log('tempArray: ', tempArray);

// // let i = 1;
// // while (i < tempArray.length) {
// //   let current = tempArray[i];
// //   if (current === '+') {
// //     result += parseFloat(tempArray[i + 1]);
// //     i += 2;
// //   }
// //   else if (current === '-') {
// //     result -= parseFloat(tempArray[i+1]);
// //     i += 2;
// //   }
// //   else {
// //     i++;
// //   }
// // }
// // console.log('Result: ', result);
// // console.timeEnd("Execution Time");
// // return result;
// // }

// // let userInput = "4+-3=";
// // let result = calculate(userInput);
// // console.log(result);
