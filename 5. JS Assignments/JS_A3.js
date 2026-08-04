// ASSIGNMENT - 3 Strings

//1. Write a JavaScript program to determine given string is a palindrome or not
let str = "toohottohoot";
let revStr = str.split("").reverse().join("");
if (str == revStr) {
    console.log("It is a palindrome");
} else {
    console.log("It is not a palindrome");
}

//2. Write a JavaScript program to reverse a given string
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
console.log(reversed);

//3. Write a JavaScript program to check if two given strings are anagrams of each other
let s1 = "listen";
let s2 = "silent"
if (s1.length != s2.length) {
    console.log("It is not a anagram")
}
else if (s1.split('').sort().join('') === s2.split('').sort().join('')) {
    console.log("It is an anagram")
}

//4. Write a JavaScript program that takes a string as input and returns the longest word in the string. If there are multiple longest words, return the first one.
let input = "The quick brown fox jumps over the lazy dog";
let strInput = input.split(" ");
let longest = 0;
let word = null;
for (let i = 0; i < strInput.length; i++) {
    if (longest < strInput[i].length) {
        longest = strInput[i].length;
        word = strInput[i];
    }
}
console.log(word)

//5. Write a JavaScript program that takes a string as input and returns the number of words in the string.
let wordCount = input.trim().split(/\s+/).length;
console.log(wordCount);

//6. Write a JavaScript program that takes a string as input and returns the string with the first letter of each word capitalized.
let firstLetterCapital = input
    .trim()
    .split(/\s+/)
    .map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join(" ");
console.log(firstLetterCapital);

//7. Write a JavaScript program that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.
let count = 0;
let str2 = input.toLowerCase().split("");
for (let i = 0; i < str2.length; i++) {
    const element = str2[i];
    if (element == "a" || element == "e" || element == "i" || element == "o" || element == "u") {
        count += 1;
    }
}
console.log(count);

//8. Write a JavaScript program that takes two strings as input and returns the number of times the second string occurs as a substring in the first string.
let stringMain = "there is a funtion of a as a is of of of "
let subString = "of"
let subCount = stringMain.split(/\s+/)
    .filter(word => word === subString).length;;
console.log(subCount)

//9. Write a function that compresses a string by replacing repeated characters with the number of repetitions. For example, “aaabbbccc” should become “a3b3c3”
let input3 = "aaaabbbcc";
let compressed = "";
let count2 = 1;
for (let i = 0; i < input3.length; i++) {
    if (input3[i] === input3[i + 1]) {
        count2++;
    } else {
        compressed += input3[i] + count2;
        count2 = 1;
    }
}
console.log(compressed)

//10. Write a JavaScript program that counts the occurrences of each letter in a given string.
let inputString = "JavaScript Code!";
let letterCounts = {};
let cleanStr = inputString.toLowerCase().replace(/[^a-z]/g, "");
for (let char of cleanStr) {
    letterCounts[char] = (letterCounts[char] || 0) + 1;
}
console.log(letterCounts);

//11. Write a JavaScript program that takes a string and a character as input, and returns the position (index) of the first time that character appears. 
let positionChar = input.indexOf("a")
console.log(positionChar);

//12. Write a function checkEnding(str, target) that checks if a string ends with the given target substring (e.g., "JavaScript" ends with "script").
function checkEnding(str, target) {
    if (str.includes(target)) {
        console.log(true);
    }
    console.log(false);
}
checkEnding("Javascript", "script");

//13. Write a function replaceWord(originalString, targetWord, newWord) that replaces all occurrences of targetWord with newWord in the given string.
let replaceWord = function (originalString, targetWord, newWord) {
    let replaceWord = originalString.replaceAll(targetWord, newWord);
    return replaceWord;
}
console.log(replaceWord("Tanisha", "a", "e"));

//14. Write a JavaScript function that takes a string with leading and trailing spaces (e.g., "  hello world  ") and returns the string with all extra space from both ends removed.
let trimFunction = (str) => {
    let newWord = str.trim();
    return newWord;
}
console.log(trimFunction("    New String for trim      "))

//15. Write a function extractFirstN(str, n) that returns the first n characters of a given string. For example, extractFirstN("Developer", 4) should return "Deve".
function extractFirstN(str, n) {
    let extarctWord = str.slice(0, n);
    return extarctWord;
}
console.log(extractFirstN("Developer", 4));

//16. Write a function `maskString(str)` that takes a string of digits (like a credit card or phone number) and replaces all but the last 4 characters with `#`.*Example:* `"1234567890"` becomes `"######7890"`.
let maskString = function (str) {
    let lastFour = str.slice(-4);
    let masked = "#".repeat(str.length - 4);
    return masked + lastFour;
}
console.log(maskString("4567892345"));

//17. Write a function containsWord(sentence, word) that returns true if sentence contains word, and false otherwise (case-insensitive search).
function containsWord(sentence, word) {
    if (sentence.includes(word)) {
        return true;
    } else {
        return false;
    }
}
console.log(containsWord("my name is tanisha", "tanishka"));

//18. Write a JavaScript program that takes a string and a character, and returns a new string with all occurrences of that specific character removed.*Example:* `removeChar("banana", "a")` should return `"bnn"`.
function removeChar(str, char) {
    let newWord = str.replaceAll(char, "");
    return newWord;
}
console.log(removeChar("Tanisha", "a"));

//19. Write a function `repeatString(str, count)` that takes a string and a number `count`, returning the string repeated that many times.*Example:* `repeatString("Hi", 3)` should return `"HiHiHi"`.
let repeatString = (str, count) => {
    return str.repeat(count);
}
console.log(repeatString("hi", 3));

//20. Write a JavaScript program that converts all uppercase letters in a string to lowercase, and all lowercase letters to uppercase.*Example:* `"Hello World"` becomes `"hELLO wORLD"`.
let swapCase = (str) => {
    return str
        .split("")
        .map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())
        .join("");
};
console.log(swapCase("Hello World"));

//Assignment 3 Completed