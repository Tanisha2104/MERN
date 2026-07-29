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

// **Q4. Write a JavaScript program that takes a string as input and returns the longest word in the string. If there are multiple longest words, return the first one.**

// **Q5. Write a JavaScript program that takes a string as input and returns the number of words in the string.**

// **Q6. Write a JavaScript program that takes a string as input and returns the string with the first letter of each word capitalized.**

// Q7. **Write a JavaScript program that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.**

// Q8. **Write a JavaScript program that takes two strings as input and returns the number of times the second string occurs as a substring in the first string.**

// **Q9. Write a function that compresses a string by replacing repeated characters with the number of repetitions. For example, “aaabbbccc” should become “a3b3c3”**

// **Q10. Write a JavaScript program that counts the occurrences of each letter in a given string.**