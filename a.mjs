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

//#endregion