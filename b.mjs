import test from "./test.mjs";

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

function formatName(...name) {
    if (typeof name !== "String") {
        return null
    }
        
    const trimName = name.trim();
            
    if (trimName == "") {
         return "";
    }   

    const names = trimName.split(" ")
    let formattedName = "";
        
    for (let i = 0; i < names.length; i++) {
        if (names[i].length > 0) {
            formattedName = words[i].charAt(0).toUpperCase()
        }
    }
}
    


//#endregion





//#region Tests --------------------------------------------------------------------
// Write your tests her.
const tests = test("Name formatter");
tests.isEqual(formatName(1), null, "Returns Null if not a string");
tests.isEqual(formatName(" Carl "), "Carl", "Removes leading or trailing whitespace");
tests.isEqual(formatName("john doe"), "John Doe", "Capitalizes first letter of name");
tests.isEqual(formatName(""), "", "Returns empty if string is empty after trimming");

//#endregion