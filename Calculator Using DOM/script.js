const numbers = document.getElementsByClassName("number");
const display = document.getElementById("display");
const operators = document.getElementsByClassName("operator");
const clear = document.getElementById("clear");
const del = document.getElementById("delete");
const result = document.getElementById("equal");

//numbers display
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function () {
        let clickedValue = numbers[i].innerText;
        if (clickedValue === ".") {
            let parts = display.value.split(/[+\-x/%^]/);
            let currentNumber = parts[parts.length - 1];
            if (currentNumber.includes(".")) {
                //do nothing
            } else {
                display.value += clickedValue;
            }
        } else {
            display.value += clickedValue;
        }
    });
}

let operatorSymbols = ["+", "-", "x", "/", "^", "%"];
//operators display
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function () {
        let lastChar = display.value.slice(-1);
        if (display.value != "" && !operatorSymbols.includes(lastChar)) {
            display.value += operators[i].innerText;
        }
    });
}

//AC button
clear.addEventListener("click", function () {
    display.value = "";
});

//DEL button
del.addEventListener("click", function () {
    display.value = display.value.slice(0, -1);
});

//result
result.addEventListener("click", function () {
    let expression = display.value;
    expression = expression.replaceAll("x", "*");
    expression = expression.replaceAll("^", "**");
    try {
        display.value = eval(expression);
    } catch (error) {
        display.value = "...";
        console.error(error);
    }
})

//JavaScript completed