import test from "./test.mjs";
import { MESSAGE, CHAR } from "./magicStringRemover.mjs";
/*
    Challenge: Implement the `formatName` function.

    The function `formatName` takes a single parameter `name` (a string) and formats it based on the following rules:

    1. If `name` is not a string, return null.
    2. Remove any leading or trailing whitespace from the string.
    3. Capitalize the first letter of each word in the name (e.g., "john doe" becomes "John Doe").
    4. If the string is empty (after trimming), return an empty string.
    5. If the string contains special characters (e.g., "@", "#", etc.), return null.

    Your task:
    1. Write the tests (within the tests region) that correspond to the described behavior.
    2. Complete the logic of the `formatName` function to pass all the tests.

*/

//#region function -----------------------------------------------------------------
// Write your function her.

function formatName(name) {
    
    if (typeof name !== "string") {
        return null
    }
        
    const trimName = name.trim();

    if (trimName == CHAR.empty) {
         return CHAR.empty;
    }   
    
    const names = trimName.split(CHAR.space)
    let formattedName = CHAR.empty;
        
    for (let i = 0; i < names.length; i++) {
        if (names[i].length > 0) {
            formattedName += names[i].charAt(0).toUpperCase() + names[i].slice(1).toLowerCase() + CHAR.space;
        }
       
    }

    const specialChar = CHAR.specialChar;

    for (let char of specialChar) {
        if(name.includes(char)) {
            return null
        }
    }
    return formattedName.trim();
}
    


//#endregion





//#region Tests --------------------------------------------------------------------
// Write your tests her.
const tests = test(MESSAGE.nameFormatter);

//Basic cases
tests.isEqual(formatName(" Carl "), "Carl", MESSAGE.removesWhitespace);
tests.isEqual(formatName("john doe"), "John Doe", MESSAGE.capitalizeLetter);
tests.isEqual(formatName(""), "", MESSAGE.returnEmpty);

// Invalid cases
tests.isEqual(formatName(1), null, MESSAGE.returnNull);
tests.isEqual(formatName("#John@Doe"), null, MESSAGE.nullIfSpecialChar);

//#endregion