function calculate(userInput: string): number | undefined | string {
    let convertedString = userInput.toString();
    let splitString = convertedString.split("");
    for (let i = 0; i < splitString.length; i++) {
        if (splitString[i] === "=") {
            let firstHalf = splitString.slice(0, i);
            let secondHalf = splitString.slice(i + 1);
        }
        if (!splitString.includes("=")) {
            return "Invalid input"
        }
        if (splitString[i] === "+") {
            let firstHalf = splitString.slice(0, i);
            let secondHalf = splitString.slice(i + 1);
            let firstNumber = parseInt(firstHalf.join(""));
            let secondNumber = parseInt(secondHalf.join(""));
            return firstNumber + secondNumber;
        }
        if (splitString[i] === "-") {
            let firstHalf = splitString.slice(0, i);
            let secondHalf = splitString.slice(i + 1);
            let firstNumber = parseInt(firstHalf.join(""));
            let secondNumber = parseInt(secondHalf.join(""));
            return firstNumber - secondNumber;
        }
        if (splitString[i] === "*") {
            let firstHalf = splitString.slice(0, i);
            let secondHalf = splitString.slice(i + 1);
            let firstNumber = parseInt(firstHalf.join(""));
            let secondNumber = parseInt(secondHalf.join(""));
            return firstNumber * secondNumber;
        }
        if (splitString[i] === "/") {
            let firstHalf = splitString.slice(0, i);
            let secondHalf = splitString.slice(i + 1);
            let firstNumber = parseInt(firstHalf.join(""));
            let secondNumber = parseInt(secondHalf.join(""));
            return firstNumber / secondNumber;
        }
    }
    return "Invalid input";
}
console.log(calculate("12+3*2="));
console.log(calculate("12*3="));
console.log(calculate("12/3="));
console.log(calculate("12-3="));
console.log(calculate("123="));
console.log(calculate("a12="));
