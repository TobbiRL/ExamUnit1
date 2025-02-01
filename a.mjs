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
        if (isNaN(num) || typeof num !== "number") {
            return NaN
        } else
      total *= num;
    }
    return total;
  }
  
  console.log(multiply(1, 2, "a"));
  
  console.log(multiply(1, 2, 3, 4));

//#endregion





//#region Tests --------------------------------------------------------------------
// Write your tests her.
const tests = test("Sum function");
// Valid inputs
tests.isEqual(multiply(2, 3, 4), 24, "2 and 3 and 4 multiplied should be 24");
tests.isEqual(multiply(-5, 1), -5, "-5 and 1 multiplied should be -5");
tests.isEqual(multiply(2.5, 4), 10, "2.5 and 4 multiplied should be 10");

// Invalid inputs
tests.isNotANumber(multiply("1", 2), '"1" and 2 multiplied should return NaN');
tests.isNotANumber(multiply(1, null), "1 and null multiplied should be NaN");
tests.isNotANumber(multiply(undefined, 3), "undefined and 3 multiplied should be NaN");
tests.isNotANumber(multiply(NaN, 3), "NaN and 3 multiplied should be NaN");

// Edge cases
tests.isEqual(multiply(0, 0), 0, "Sum of 0 and 0 should be 0");
tests.isEqual(multiply(Infinity, 1), Infinity, "Sum of Infinity and 1 should be Infinity");
tests.isEqual(multiply(-Infinity, 1), -Infinity, "Sum of -Infinity and 1 should be -Infinity");

//#endregion