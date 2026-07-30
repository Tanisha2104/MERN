//Input 
// let age = prompt("Enter your age : ")
// console.log(age)

// "use strict"

//1.Ways to print in javascript
// console.log("Hello World");
// alert("meme");
// document.write("This is document write and this is not used in javascript now for better use");

//2.Javascript console API
console.log("Hello World", 4 + 6, "another log");
console.warn("This is a warning.");
console.error("This is an error");

//3.JavaScript Variables
//Containers to store data values 
var x = 45;
var y = 33;

/*
multi 
line 
Comment
*/

//4.Data Types in Javascript
//Primitive - number, string, boolean, null , undefined, symbol
//Non-Primitive / Reference - array , object, function

//Numbers
var numm = 45.45;
//String
var str1 = "This is a string";
//Objects
var marks = {
    ravi: 34,
    shubham: 78,
    harry: 45
}
//boolean
var a = true;
var b = false;
// var und = undefined; a variable without a value is always undefined;
var null1 = null;//null and undefined are different
console.log(numm, str1, marks, a, b, null1);
//Array
var arr = [1, 2, "name", 4, 5];
console.log(arr);

//5.Operators in Javascript - Arithmetic, Assignment, Comparision, Logical
console.log("The value of x + y is ", a + b);
console.log("The value of x - y is ", a - b);
console.log("The value of x * y is ", a * b);
console.log("The value of x / y is ", a / b);

var c = y;//operand
c += 2;//c = c + 2
console.log(c);
c -= 5;
c *= 10;
c /= 4;
console.log(c);

console.log(x == y);
console.log(x >= y);
console.log(x <= y);
console.log(x > y);
console.log(x < y);

console.log(true && true);//Logical AND
console.log(true && false);
console.log(false && false);
console.log(true || true);//Logical OR
console.log(true || false);
console.log(false || false);
console.log(!false);//Logical NOT
console.log(!true);

//6.Functions in JavaScript - Declaration , Definition and calling
function avg(x, y) {
    return (x + y) / 2;
}
function sqr(x) {
    return x * x;
}
x = 20;
console.log(sqr(x));
console.log(avg(45, 65));

//7.Conditionals in JavaScript - if-else  
var age = 4;
if (age > 8) {
    console.log("You are not a kid.")
}//else if(){}
else {
    console.log("You are a Kid.")
}

//8.Loops in JavaScript
for (var i = 0; i < 5; i++) {
    console.log(i);
}
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr1);
for (var i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

let j = 0;//let has block - level scope
// const ac = 0;//not changed afterwards
while (j < arr1.length) {
    console.log(arr1[j]);
    j++;
}
j = 0;
do {
    console.log(arr1[j]);
    j++;
} while (j < arr1.length);//runs atleast once

//9.Break and Continue Statements
for (var i = 0; i <= arr1.length; i++) {
    if (i == 2) {
        continue;
    }
    if (i == 7) {
        break;
    }
    console.log(arr1[i]);
}

//10. Array Methods
let myArr = ["fan", "Camera", 34, null, true];
console.log(`Array Methods => length = ${myArr.length}`);
myArr.pop();//removes one element from the end
console.log(myArr);
myArr.push("Tanisha");//adds one element in the end
console.log(myArr);
myArr.shift();//removes element from start
console.log(myArr);
myArr.unshift("Tweety");//ads element in start
console.log(myArr);
console.log(myArr.unshift("Tweety"));//gives length of new array
console.log(myArr.toString());// gives array as a string
console.log(myArr.sort());// sorts element of array according to dictionary

let arr2 = [1, 23, 4455, 687, 78, 213, 111];
console.log(arr2.sort());
console.log(arr2.splice(4, 6));//removes the elements from a range 

//11. String Methods in JavaScript
let newString = "JavaScript is a programming language is";
console.log(newString.length);
console.log(newString.indexOf("is"));
console.log(newString.lastIndexOf("is"));
console.log(newString.slice(37, 39));
console.log(newString.replace("JavaScript", "Java"));
console.log(newString.replaceAll("is", "are"));

//12. Dates in JavaScript
myDate = new Date();
console.log(myDate);
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());

//1
var number = 4567
let firstDigit = number.toString()[0]
console.log(firstDigit)

//2
str1 = "TANISHA"
console.log(str1.split('').reverse().join(''))
console.log(str1.toLowerCase());

console.log(`${5} + ${5} = ${5 + 5} `)//String Template Literals

//Hoisting is a default behaviour of JavaScript.
//Ecma script 5 => var
//Ecma script 6 => let,const
//temporal dead zone
// let k;
// let d = "gsd"
// if (true) {
//     var x = 1;
//     let y = 2;
//     console.log(d);
//     console.log(y);
// }
// console.log(d)
// console.log(x);
// console.log(y);scope

//Write a prgoram to check anagram in String
function anagramCheck(s1, s2) {
    if (s1.length != s2.length) {
        return false;
    }
    else if (s1.split('').sort().join('') === s2.split('').sort().join('')) {
        return true
    }
}
let string1 = "listen";
let string2 = "silent";
console.log(anagramCheck(string1, string2));

//Ways of function - normal , function expression, arrow function
tan();//This will work anywhere in the whole code . it allocates memory for its function.//Fully hoisted
function tan() {
    console.log("Normal Function");
}
// abc(); This will not work as it cannot work before initialization.throws reference error//not hoisted
const abc = function () {
    console.log("Function Expression");
}
// xyz(); This will not work as it cannot work before initialization
const xyz = () => {
    console.log("Arrow function")
}

//Program to get vowel in a String
function vowelCount(str1) {
    let count = 0;
    let str2 = str1.toLowerCase().split("");
    for (let i = 0; i < str2.length; i++) {
        const element = str2[i];
        if (element == "a" || element == "e" || element == "i" || element == "o" || element == "u") {
            count += 1;
        }
    }
    console.log(count);
}
vowelCount("abdbchdhfcbdhbcjhecgejhcajkgduiriioijehiozoaiioixoa");

//Callback & a impure function
function greeting(hello, india) {
    let processed = hello.toUpperCase();
    console.log(processed);
    india();
}
function callb() {
    console.log("hello i am a callback");
}
greeting("hello", callb)

//pure function 
function pure(a, b) {
    return a + b;
}
pure();

//High-Order function
function highfun() {
    return function inisdeHigh() {
        console.log("I am returned funciton in a function. high order function")
    }
}
highfun()();

//IIFI (Immedialtely invoked function expression)
(function () {
    console.log("IIFI");
})();

//Arrays
let arr9 = new Array(3);
arr9[0] = "egrgr";
arr9[1] = 343;
console.log(arr9)

function sumNum(...num) {
    return num.reduce((a, b) => a + b, 0)
}
console.log(sumNum(2, 3, 45, 6, 4, 3, 21, 32));

const arr3 = Array.from([2, 3, 4, 5], x => x * x);
console.log(arr3);

const numberValue = [34, 5, 3, 5, 24]
numberValue.sort((a, b) => a - b);//ascending
console.log(numberValue);
numberValue.sort((a, b) => b - a);//descending
console.log(numberValue);