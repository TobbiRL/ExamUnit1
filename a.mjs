import test from "./test.mjs";
import { MESSAGE } from "./magicStringRemover.mjs";
/*
    Challenge: Implement the `multiply` function.

    The function `multiply` takes an indefinit number of parameters (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
    It should return the product of the numbers, with the following constraints:

    1. If one or more of the parameters are not valid numbers, the function should return NaN (Not a Number).
    2. If either parameter is a string that can be converted to a number (e.g., "3"), it should be parsed into a number before multiplying.
    3. If either parameter is Infinity or -Infinity, return Infinity or -Infinity based on the rules of multiplication.
    4. Handle edge cases like multiplying by 0 and NaN appropriately.

    Your task:
    1. Write the tests (within the tests region) that correspond to the described behavior.
    2. Complete the logic of the `multiply` function to pass all the tests.

*/

//#region function -----------------------------------------------------------------
// Write your function her.
function multiply(...numbers) {
    let total = 1;
    for (const num of numbers) {
        let parsedNum = num;
        if (typeof num == "string") {
            parsedNum = Number(num);
        } 
        else if (isNaN(parsedNum) || typeof parsedNum !== "number") {
            return NaN
        }

        total *= parsedNum;
    }
    return total;
  }

//#endregion





//#region Tests --------------------------------------------------------------------
// Write your tests her.
const tests = test(MESSAGE.multiplicationFunction);
// Valid inputs
tests.isEqual(multiply(2, 3, 4), 24, MESSAGE.multiplicationTestInteger);
tests.isEqual(multiply(-5, 1), -5, MESSAGE.multiplicationTestNegative);
tests.isEqual(multiply(2.5, 4), 10, MESSAGE.multiplicationTestDecimal);
tests.isEqual(multiply("1", 2, 3), 6, MESSAGE.multiplicationTestStringNumber);

// Invalid inputs
tests.isNotANumber(multiply(1, null), MESSAGE.multiplicationTestNull);
tests.isNotANumber(multiply(undefined, 3), MESSAGE.multiplicationTestUndefined);
tests.isNotANumber(multiply(NaN, 3), MESSAGE.multiplicationTestNaN);

// Edge cases
tests.isEqual(multiply(0, 0), 0, MESSAGE.multiplication0);
tests.isEqual(multiply(Infinity, 1), Infinity, MESSAGE.multiplicationInfinity);
tests.isEqual(multiply(-Infinity, 1), -Infinity, MESSAGE.multiplicationNegativeInfinity);

//#endregion