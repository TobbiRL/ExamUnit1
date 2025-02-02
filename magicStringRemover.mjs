const CHAR = {
empty: "",
space: " ",
specialChar: "@£$%&#()/[]-+¤!{}",
}

const MESSAGE = {
multiplicationFunction: "Multiplication function",
multiplicationTestInteger: "Multiplying 2, 3 and 4 should return 24",
multiplicationTestNegative: "Multiplying -5 and 1 should return -5",
multiplicationTestDecimal: "Multiplying 2.5 and 4 multiplied should return 10",
multiplicationTestStringNumber: "Multiplying '1', 2 and 3 should return 6",
multiplicationTestNull: "Multiplying 1 and null should be NaN",
multiplicationTestUndefined: "Multiplying undefined and 3 should be NaN",
multiplicationTestNaN: "Multiplying NaN and 3 should be NaN",
multiplication0: "Multiplying  0 and 0 should return 0",
multiplicationInfinity: "Multiplying Infinity and 1 should return Infinity",
multiplicationNegativeInfinity: "Multiplying -Infinity and 1 should return -Infinity",

nameFormatter: "Name formatter",
removesWhitespace: "Removes leading or trailing whitespace",
capitalizeLetter: "Capitalizes first letter of name",
returnEmpty: "Returns empty if string is empty after trimming",
returnNull: "Returns Null if not a string",
nullIfSpecialChar: "Returns null if special char in string",

sumFunction: "Sum function",
nEquals0: "For n = 0, the function should return 0",
nEquals1: "For n = 1, the function should return 1",
nEquals2: "For n = 2, the function should return 1",
nEquals3: "For n = 3, the function should return 2",
nEquals4: "For n = 4, the function should return 3",
nEquals5: "For n = 5, the function should return 5",
nEquals6: "For n = 6, the function should return 8",
nEquals10: "For n = 10, the function should return 55",
nEquals20: "For n = 20, the function should return 6765",
negativeInput: "Negative input should return null",
nonInteger: "Non-integer input should return null",
stringInput: "String input should return null",
nullInput: "Null input should return null",

guesses: "Guesses",
guessTooLow: "If target is 10 and guess is 5, return 'Too low'",
guessTooHigh: "If target is 10 and guess is 15, return 'Too high'",
guessCorrect: "If target is 10 and guess is 10, return 'Correct!'",
tooLow: "Too low",
tooHigh: "Too high",
correct: "Correct!",
guessNotInteger: "Guess was not and integer",
targetNotInteger: "Target was not and integer",
guessNotNumber: "Guess was not a number",
targetNotNumber: "Target was not a number",
}

export {CHAR, MESSAGE}