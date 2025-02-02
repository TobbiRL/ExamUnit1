import { MESSAGE } from "./magicStringRemover.mjs";
import test from "./test.mjs";

/*
    Challenge: Implement the `sequence` function.

    Your task:
    1. Write a function `sequence` that passes the tests below.
    2. The function should handle various edge cases, including invalid inputs.

    Good luck!
*/

function sequence(n) {
    if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) {
        return null;
    }

    let base = [0, 1];
    
    if (n >= base.length) {
        let m = base.length;
        while (m <= n) {
        let fib = base[m - 1] + base[m - 2];
        base[m] = fib;
        m++;
        }
    }
      
    return base[n];
}


//#region Tests --------------------------------------------------------------------
const tests = test(MESSAGE.sumFunction);

// Basic cases
tests.isEqual(sequence(0), 0, MESSAGE.nEquals0);
tests.isEqual(sequence(1), 1, MESSAGE.nEquals1);
tests.isEqual(sequence(2), 1, MESSAGE.nEquals2);
tests.isEqual(sequence(3), 2, MESSAGE.nEquals3);
tests.isEqual(sequence(4), 3, MESSAGE.nEquals4);
tests.isEqual(sequence(5), 5, MESSAGE.nEquals5);
tests.isEqual(sequence(6), 8, MESSAGE.nEquals6);
tests.isEqual(sequence(10), 55, MESSAGE.nEquals10);

// Large input
tests.isEqual(sequence(20), 6765, MESSAGE.nEquals20);

// Edge cases
tests.isEqual(sequence(-1), null, MESSAGE.negativeInput);
tests.isEqual(sequence(1.5), null, MESSAGE.nonInteger);
tests.isEqual(sequence("5"), null, MESSAGE.stringInput);
tests.isEqual(sequence(null), null, MESSAGE.nullInput);

//#endregion