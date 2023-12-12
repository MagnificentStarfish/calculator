import { calculate } from './calculate'; // Adjust the import path if necessary
console.log(calculate('2+2=')); // Should print 4
console.log(calculate('3*7=')); // Should print 21
console.log(calculate('10/2=')); // Should print 5
try {
    console.log(calculate('3/0=')); // Should throw an error
}
catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
}
