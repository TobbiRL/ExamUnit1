import test from "./test.mjs";
import { MESSAGE } from "./magicStringRemover.mjs";

/*
    Challenge: Implement the `guessNumber` function.

    The function `guessNumber` takes two parameters:
    1. `target` (an integer) - the number to guess.
    2. `guess` (an integer) - the player's guess.

    The function should:
    - Return "Too low" if the guess is less than the target.
    - Return "Too high" if the guess is greater than the target.
    - Return "Correct!" if the guess matches the target.
    - Return null if either input is not a valid integer.

    Your task:
    1. Complete the tests below to verify the functionality.
    2. Implement the `guessNumber` function so it passes all the tests.

    
*/

//#region function -----------------------------------------------------------------
// Write your function her.

function guessNumber(target, guess) {
    if (!Number.isInteger(target) || !Number.isInteger(guess)) {
        return null
    }
    if (target > guess) {
        return MESSAGE.tooLow;
    }
    else if (target < guess) {
        return MESSAGE.tooHigh;
    }
    else if (target == guess) {
        return MESSAGE.correct;
    }
}


//#endregion

//#region Tests --------------------------------------------------------------------
const tests = test(MESSAGE.guesses);

// Basic cases
tests.isEqual(guessNumber(10, 5), MESSAGE.tooLow, MESSAGE.guessTooLow);
tests.isEqual(guessNumber(10, 15), MESSAGE.tooHigh, MESSAGE.guessTooHigh);
tests.isEqual(guessNumber(10, 10), MESSAGE.correct, MESSAGE.guessCorrect);

// Invalid inputs
tests.isEqual(guessNumber(10, 5.5), null, MESSAGE.guessNotInteger);
tests.isEqual(guessNumber(10.1, 5), null, MESSAGE.targetNotInteger);

// Edge cases
tests.isEqual(guessNumber(10, "5"), null, MESSAGE.guessNotNumber);
tests.isEqual(guessNumber("10", 5), null, MESSAGE.targetNotNumber);
//#endregion
