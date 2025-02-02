import test from "./test.mjs";

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
const tests = test("Multiplication function");
// Valid inputs
tests.isEqual(multiply(2, 3, 4), 24, "Multiplying 2, 3 and 4 should return 24");
tests.isEqual(multiply(-5, 1), -5, "Multiplying -5 and 1 should return -5");
tests.isEqual(multiply(2.5, 4), 10, "Multiplying 2.5 and 4 multiplied should return 10");
tests.isEqual(multiply("1", 2, 3), 6, "Multiplying '1', 2 and 3 should return 6");

// Invalid inputs
tests.isNotANumber(multiply(1, null), "Multiplying 1 and null should be NaN");
tests.isNotANumber(multiply(undefined, 3), "Multiplying undefined and 3 should be NaN");
tests.isNotANumber(multiply(NaN, 3), "Multiplying NaN and 3 should be NaN");

// Edge cases
tests.isEqual(multiply(0, 0), 0, "Multiplying  0 and 0 should return 0");
tests.isEqual(multiply(Infinity, 1), Infinity, "Multiplying Infinity and 1 should return Infinity");
tests.isEqual(multiply(-Infinity, 1), -Infinity, "Multiplying -Infinity and 1 should return -Infinity");

//#endregion