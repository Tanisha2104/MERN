// ASSIGNMENT - 4 Functions

//1. Write a function square(number) that calculates and returns the square of a number (the number multiplied by itself).
function square(number) {
    return number * number;
}
console.log(`Sqaure is ${square(5)}`);

/*2. Write two standard functions:
i. celsiusToFahrenheit(celsius) that takes a temperature in Celsius and returns it in Fahrenheit.
ii. fahrenheitToCelsius(fahrenheit) that takes a temperature in Fahrenheit and returns it in Celsius.*/
let celsiusToFahrenheit = function (celsius) {
    let far = (celsius * 1.8) + 32;
    return far;
}
let fahrenheitToCelsius = function (fahrenheit) {
    let cels = (fahrenheit - 32) / 1.8;
    return cels;
}
console.log(celsiusToFahrenheit(32));
console.log(fahrenheitToCelsius(99));

//3. Write a function calculateTotal(price, quantity, taxRate) that takes the item price, quantity bought, and local tax percentage (e.g., 5 for 5%). The function should calculate and return the final total price after tax.Example: calculateTotal(10, 2, 5) should return 21.
let calculateTotal = (price, quantity, taxRate) => {
    let firstPrice = (price * quantity);
    let total = firstPrice + ((taxRate / 100) * firstPrice);
    return total;
}
console.log(`Total Price is Rs ${calculateTotal(10, 2, 5)}`);

//4. Write a function `getGrade(score)` that takes a numerical test score (0 to 100) and returns the corresponding letter grade using `if/else` conditions:
// - 90 to 100 $\rightarrow$ `"A"`
// - 80 to 89 $\rightarrow$ `"B"`
// - 70 to 79 $\rightarrow$ `"C"`
// - 60 to 69 $\rightarrow$ `"D"`
// - Below 60 $\rightarrow$ `"F"`
function getGrade(score) {
    if (score > 90) {
        return "A grade";
    } else if (score >= 80 && score < 89) {
        return "B grade";
    }
    else if (score >= 70 && score < 79) {
        return "C grade";
    }
    else if (score >= 60 && score < 69) {
        return "D grade";
    }
    else {
        return "F grade";
    }
}
console.log(`According to score , the student gets ${getGrade(66)}`);

//5. Write a function calculateAgeInDays(ageInYears) that takes a person's age in years and returns their approximate age in days (assume 365 days per year, ignoring leap years).// Example: calculateAgeInDays(20) should return 7300.
let calculateAgeInDays = function (ageInYears) {
    let ageInDays = ageInYears * 365;
    return ageInDays;
}
console.log(`Age in days is ${calculateAgeInDays(21)}`);

//6. Write a function `isPasswordValid(password)` that checks if a user's password meets basic security criteria. It should return `true` if all conditions are met, otherwise `false`:
// - Password must be **at least 8 characters** long.
// - Password must **not** contain any blank spaces (`" "`).
let isPasswordValid = (password) => {
    if (password.length < 8) {
        return false;
    }
    if (password.includes(" ")) {
        return false;
    }
    return true;
}
console.log(isPasswordValid("tweety123456"));
//Assignment 4 Completed