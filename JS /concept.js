var x = 45;
function abc(x) {
    return x * x;
}
x = 20;
console.log(abc(x));

//primitive - number, string, boolean, null , undefined
//non-primitive - array , object, function

var d = 4
var f = 4

if (d == f) {
    console.log("true")
} else {
    console.log("false")
}

var a = 2
var b = 5
console.log(a + b)

//input 
// let age = prompt("Enter your age : ")
// console.log(age)

//2
var number = 4567
let firstDigit = number.toString()[0]
console.log(firstDigit)

//String

let str1 = "TANISHA"
// str1.split('').reverse().join('');

console.log(str1.split(''))
console.log(str1.split('').reverse())
console.log(str1.split('').join(''))
console.log(str1.split('').reverse().join(''))