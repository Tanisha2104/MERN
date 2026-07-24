//If-Else Assignment and Ternary Operator
console.log("If-Else Questions:")
//1. Write a program that determines whether a given number is positive or negative.
var num1 = -40;
console.log("1. The number is: ");
if (num1 < 0) {
    console.log("   Negative");
}
else {
    console.log("    Positive");
}

//2. Write a program that checks if a number is even or odd.
var num2 = 43;
console.log("2. The number is: ");
if (num2 % 2 == 0) {
    console.log("   Even");
} else {
    console.log("   Odd");
}

//3. Write a program to determine the greater of two numbers.
var a = 22;
var b = 44;
if (a > b) {
    console.log(`3. ${a} is bigger than ${b} (a)`);
} else {
    console.log(`3. ${b} is bigger than ${a} (b)`);
}

//4. Write a program that transforms a numerical grade to a letter grade (e.g., grade 10 should display “A”).
let grade = 8;
if (grade === 10) {
    console.log("4. A");
} 
else if (grade === 9) {
    console.log("4. B");
} 
else if (grade === 8) {
    console.log("4. C");
} 
else if (grade === 7) {
    console.log("4. D");
} 
else if (grade === 6) {
    console.log("4. E");
} 
else if (grade >= 0 && grade <= 5) {
    console.log("4. F");
} 
else {
    console.log("4. Invalid Grade");
}

/*5. Write a program that calculates the ticket price based on age with the following conditions:
 - Age below 12 → ticket price = 5
 - Age below 18 → ticket price = 10
 - Age below 60 → ticket price = 20
 - Age over 60 → ticket price = 15
*/
var age = 25;
if (age <= 12) {
    console.log("5. Ticket price = 5");
}
else if (age > 12 && age <= 18) {
    console.log("5. Ticket price = 10");
}
else if (age > 18 && age <= 60) {
    console.log("5. Ticket price = 20");
}
else if (age > 60) {
    console.log("5. Ticket price = 15");
}
else {
    console.log("5. Invalid Age!!");
}

//6. Write a program that determines if a year is a leap year.
let year = 2028;
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log("6. It is a leap year")
} else {
    console.log("6. This is not a leap year")
}

/*7. Write a program that calculates a discount based on the purchase amount.
- Prices ≥ 100 → discount = 20
- Prices ≥ 50 → discount = 10
- Otherwise → discount = 0 */
let price = 33;
if (price >= 100) {
    console.log(`7. You get a discount of 20 on your purchase of ${price}`)
}
else if ((price >= 50) && (price < 100)) {
    console.log(`7. You get a discount of 10 on your purchase of ${price}`)
}
else {
    console.log(`7. You get a discount of 0 on your purchase of ${price}. No discount`)
}

//8. Write a program that greets the user based on the time of day. Display “Good morning”, “Good afternoon”, or “Good evening” depending on when the code runs.
let hour = new Date().getHours();
if (hour > 4 && hour <= 12) {
    console.log("8. Good Morning");
}
else if (hour > 12 && hour <= 17) {
    console.log("8. Good Afternoon");
}
else {
    console.log("8. Good Evening");
}

/* 9. Write a program that calculates the Body Mass Index (BMI) and categorizes it.
- Formula: BMI = weight / (height * height) */
let weight = 70;
let height = 1.67;
let BMI = weight / (height * height);
if (BMI < 18.5) {
    console.log("9. You are Underweight.")
}
else if (BMI > 18.5 && BMI <= 24.9) {
    console.log("9. You are Normal weight.")
}
else if (BMI > 25.0 && BMI <= 29.9) {
    console.log("9. You are Overweight.")
}
else {
    console.log("9. You are Obese.")
}

//10. Write a simple number guessing game. Provide a secret number and a guess. Based on those numbers, give players clues if their guess is higher, lower, or correct.
let guess = 50;
let input = Number(prompt("Enter a number :"));
if (guess == input) {
    console.log("10. You Got the right number")
}
else if (input > guess) {
    console.log("10. Guess again any lower number.")
}
else if (input < guess) {
    console.log("10. Guess again any higher number.")
}
else {
    console.log("10. Invalid syntax!!")
}

//11. How can you check if a variable’s value makes someone an adult or a minor with If Else?
age = 20;
if (age >= 18) {
    console.log("11. Adult");
} else {
    console.log("11. Minor");
}

//Ternary Operators
console.log("Ternary Questions:")
//1. Pass or Fail
let marks = 65;
let result = marks >= 40 ? "Pass" : "Fail";
console.log(`T1. ${result}`);

//2. Even or Odd
let number1 = 7;
let type = number1 % 2 == 0 ? "Even" : "Odd";
console.log(`T2. ${type}`);

//3. License Eligibility
let message = age > 18 ? "Eligible to drive" : "Not eligible to drive";
console.log(`T3. ${message}`);

//4. Discount checker
let totalAmount = 1200;
let discount = totalAmount > 1000 ? 200 : 0;
console.log(`T4. ${discount}`);

//5. Day Time Greeting
let greeting = hour < 12 ? "Good Morning" : "Good Day";
console.log(`T5. ${greeting}`);

//6. Game Score high alert
let score = 95;
let isHighScore = score > 90 ? true : false;
console.log(`T6. ${isHighScore}`);

//7. Weather Advice
let isRaining = true;
let action = isRaining ? "Take an umbrella" : "Enjoy the sun";
console.log(`T7. ${action}`);

//8. Speed limit Warning
let speed = 85;
let status1 = speed > 80 ? "Over-speeding" : "Normal speed";
console.log(`T8. ${status1}`);

//9. Login check
let isLoggedIn = false;
let buttonText = isLoggedIn ? "LogOut" : "LogIn";
console.log(`T9. ${buttonText}`);

//10. Greater Number finder(2 numbers)
let max = a > b ? a : b;
console.log(`T10. ${max}`);