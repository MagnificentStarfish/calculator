// function calculate(userInput: string): number | undefined | string {
//     let convertedString = userInput.toString();
//     let splitString = convertedString.split("");
//     for (let i = 0; i < splitString.length; i++) {
//         if (splitString[i] === "=") {
//             let firstHalf = splitString.slice(0, i);
//             let secondHalf = splitString.slice(i + 1);
//             let newNumbers: number[] = [];
//             if (splitString[i] === '+' || '-' || '*' || '/') {
//                 newNumbers.push(splitString[i]);
//             }
//             else {
//                 let convertedNumber = parseInt(splitString[i]);
//                 newNumbers.push(convertedNumber);
//             }
//             console.log(newNumbers);


function calculate(userInput: string): number | undefined  {
  console.time("Execution Time");
  console.time("Execution Time");
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

    // for (let i=0; i<splitString.length; i++) {
    //     if (splitString[i] !== '*' && splitString[i] !== '/') {
    //         tempString += splitString[i];
    //     }

    //     if (splitString[i] === '*') {
    //         tempString = tempString.slice(0, -1);
    //         let operationResult = parseInt(splitString[i-1]) * parseInt(splitString[i+1]);
    //         // tempString.slice(i-1, 3, operationResult.toString());
    //         tempString += operationResult.toString();
    //         i += 2;
    //     }
    //     if (splitString[i] === '/') {
    //         tempString = tempString.slice(0, -1);
    //         let operationResult = parseInt(splitString[i-1]) / parseInt(splitString[i+1]);
    //         // tempString.slice(i-1, 3, operationResult.toString());
    //         tempString += operationResult.toString();
    //         i += 2;
    //     }
    // }
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
console.timeEnd("Execution Time");
console.timeEnd("Execution Time");
return result;
}

//test line for code

let userInput = "2*3*2*5=";
let result = calculate(userInput);
console.log(result);

// let userInput2 = "2*3*4=";
// let result2 = calculate(userInput2);
// console.log(result2);



// function calculate(userInput: string): number | undefined | string {
//     let convertedString = userInput.toString();
//     let splitString = convertedString.split("");
//     let newNumbers: number[] = [];
//     let newOperators: string[] = [];
//     for (let i = 0; i < splitString.length; i++) {
//         if (splitString[i] === '+' || splitString[i] === '-' || splitString[i] === '*' || splitString[i] === '/') {
//             newOperators.push(splitString[i]);
//         }
//         else {
//             let convertedNumber = parseInt(splitString[i]);
//             newNumbers.push(convertedNumber);
//         }
//     }
//     let result = newNumbers[0];
//     for (let i = 0; i < newOperators.length; i++) {
//         let operator = newOperators[i];
//         let number = newNumbers[i + 1];
//         if (operator === '+') {
//             result += number;
//         }
//         else if (operator === '-') {
//             result -= number;
//         }
//         else if (operator === '*') {
//             result *= number;
//         }
//         else if (operator === '/') {
//             result /= number;
//         }
//     }
//     return result;
// }


        // }
        // if (!splitString.includes("=")) {
        //     return "Invalid input"
        // }
        // if (splitString[i] === "+") {
        //     let firstHalf = splitString.slice(0, i);
        //     let secondHalf = splitString.slice(i + 1);
        //     let firstNumber = parseInt(firstHalf.join(""));
        //     let secondNumber = parseInt(secondHalf.join(""));
        //     return firstNumber + secondNumber;
        // }
        // if (splitString[i] === "-") {
        //     let firstHalf = splitString.slice(0, i);
        //     let secondHalf = splitString.slice(i + 1);
        //     let firstNumber = parseInt(firstHalf.join(""));
        //     let secondNumber = parseInt(secondHalf.join(""));
        //     return firstNumber - secondNumber;
        // }
        // if (splitString[i] === "*") {
        //     let firstHalf = splitString.slice(0, i);
        //     let secondHalf = splitString.slice(i + 1);
        //     let firstNumber = parseInt(firstHalf.join(""));
        //     let secondNumber = parseInt(secondHalf.join(""));
        //     return firstNumber * secondNumber;
        // }
//         if (splitString[i] === "/") {
//             let firstHalf = splitString.slice(0, i);
//             let secondHalf = splitString.slice(i + 1);
//             let firstNumber = parseInt(firstHalf.join(""));
//             let secondNumber = parseInt(secondHalf.join(""));
//             return firstNumber / secondNumber;
//         }
//     }
//     return "Invalid input";

// console.log(calculate("12+3*2="));
// console.log(calculate("12*3="));
// console.log(calculate("12/3="));
// console.log(calculate("12-3="));
// console.log(calculate("123="));
// console.log(calculate("a12="));
