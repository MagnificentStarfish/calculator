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


function calculate(userInput: string): number | undefined | string {
    let userCalculatorInput = userInput.slice(0, userInput.indexOf("="));
    let newString = userCalculatorInput.toString();
    let splitString = newString.split(/(?<=\d)(?=[+\-*/])|(?<=[+\-*/])\-?(?=\d)/g);
    console.log(splitString);
    let tempString = '';

    for (let i=0; i<splitString.length; i++) {
        if (splitString[i] !== '*' && splitString[i] !== '/') {
            tempString += splitString[i];
        }

        if (splitString[i] === '*') {
            let operationResult = parseInt(splitString[i-1]) * parseInt(splitString[i+1]);
            // tempString.slice(i-1, 3, operationResult.toString());
            tempString += operationResult.toString();
            i -= 2;
        }
        if (splitString[i] === '/') {
            let operationResult = parseInt(splitString[i-1]) / parseInt(splitString[i+1]);
            // tempString.slice(i-1, 3, operationResult.toString());
            tempString += operationResult.toString();
            i -= 2;
        }
    }
    console.log('tempString :', tempString);
    let result = 0;
    console.log(splitString);
    for (let i=0; i<tempString.length; i++) {
        if (splitString[i] === '+') {
            result += parseInt(tempString[i+1]);
        }
        if (splitString[i] === '-') {
            result -= parseInt(tempString[i+1]);
        }
    }
    console.log(result);
    return result;
}

let userInput = "0+4=";
let result = calculate(userInput);
console.log(result); // Output: -4

let userInput2 = "2*3=";
let result2 = calculate(userInput2);
console.log(result2); // Output: 6



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
