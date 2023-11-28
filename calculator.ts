// ts-node calculator.ts
export function calculate(userInput: string): number | undefined  {
  console.time("Execution Time");
    let userCalculatorInput = userInput.slice(0, userInput.indexOf("="));
    let newString = userCalculatorInput.toString();
    let splitString = newString.split(/([+\-*/])/g).filter((item) => item.trim() !== '');
    console.log('splitString: ',splitString);
    let tempString = '';

    while (splitString.includes('*') || splitString.includes('/')) {
      let i = splitString.findIndex(item => item === '*' || item === '/');
      if (splitString[i] === '*') {
        let operationResult = parseInt(splitString[i-1]) * parseInt(splitString[i+1]);
        splitString.splice(i-1, 3, operationResult.toString());
      }
      if (splitString[i] === '/') {
        let operationResult = parseInt(splitString[i-1]) / parseInt(splitString[i+1]);
        splitString.splice(i-1, 3, operationResult.toString());
      }
    }
    console.log('splitString after * and /: ',splitString);
    tempString = splitString.join('');

    console.log('tempstring: ', tempString);
let tempArray = tempString.split(/(\+|-)/);
let result = parseInt(tempArray[0]);
let i = 1;
while (i < tempArray.length) {
  let current = tempArray[i];
  if (current === '+') {
    result += parseInt(tempArray[i + 1]);
    i += 2;
  }
  else if (current === '-') {
    result -= parseInt(tempArray[i+1]);
    i += 2;
  }
  else {
    i++;
  }
}
console.log('Result: ', result);
console.timeEnd("Execution Time");
return result;
}

let userInput = "2*3*2*5=";
let result = calculate(userInput);
console.log(result);
