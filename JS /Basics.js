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
var numm= 45.45;
//String
var str1 = "This is a string";
//Objects
var marks={
    ravi:34,
    shubham:78,
    harry:45
}
//boolean
var a = true;
var b = false;
// var und = undefined; a variable without a value is always undefined;
var null1 = null;//null and undefined are different
console.log(numm, str1, marks,a,b,null1);
//Array
var arr = [1,2,"name",4,5];
console.log(arr);

//5.Operators in Javascript

function abc(x) {
    return x * x;
}
x = 20;
console.log(abc(x));


//Input 
// let age = prompt("Enter your age : ")
// console.log(age)

//1
var number = 4567
let firstDigit = number.toString()[0]
console.log(firstDigit)

//2
// let str1 = "TANISHA"
// str1.split('').reverse().join('');
console.log(str1.split(''))
console.log(str1.split('').reverse())
console.log(str1.split('').join(''))
console.log(str1.split('').reverse().join(''))