// ASSIGNMENT - 2 Patterns Using Loops

let n = 5;

//1.Square hollow Rectangle
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
        if (i == 1 || j == 1 || i == n || j == n) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}
console.log();

//2.Square fill Pattern
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
        row += "* ";
    }
    console.log(row);
}
console.log();

//3.Number Triangular
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    for (let j = 1; j <= i; j++) {
        row += i + " ";
    }
    console.log(row);
}
console.log();

//4.Number Incresing Pyramid
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }
    console.log(row);
}
console.log();

//5.Number Increasing Reverse Pyramid
for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }
    console.log(row);
}
console.log();

//6.Number Changing Pyramid
let k = 1;
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += k + " ";
        k++;
    }
    console.log(row);
}
console.log();

//7.Zero - One Triangle
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        if ((i + j) % 2 == 0) {
            row += "1 ";
        } else {
            row += "0 ";
        }
    }
    console.log(row);
}
console.log();

//8.Palindrome Triangular
for (let i = 1; i <= n; i++) {
    let row = "";
    // 1. Print leading spaces for alignment
    for (let j = 1; j <= n - i; j++) {
        row += "  ";
    }
    // 2. Count down from row number to 1
    for (let j = i; j >= 1; j--) {
        row += j + " ";
    }
    // 3. Count up from 2 to the row number
    for (let j = 2; j <= i; j++) {
        row += j + " ";
    }
    console.log(row);
}
console.log();

//9.Rhombus Pattern
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i - 1; j++) {
        row += " ";
    }
    for (let j = 1; j <= n; j++) {
        row += "* ";
    }
    console.log(row);
}
console.log();

//10.Diamond Pattern
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
        row += "  ";
    }
    for (let j = 1; j <= i; j++) {
        row += "*   ";
    }
    console.log(row);
}
for (let i = 1; i <= n - 1; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "  ";
    }
    for (let j = n - i; j > 0; j--) {
        row += "*   ";
    }
    console.log(row);
}
console.log();

//11.Butterfly Pattern
//Upper Half
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    for (let j = 1; j <= 2 * (n - i); j++) {
        row += "  ";
    }
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}
//Lower Half
for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    for (let j = 1; j <= 2 * (n - i); j++) {
        row += "  ";
    }
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}
console.log();



//12.Right Half Pyramid
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}
console.log();

//13.Reverse Right Half Pyramid
for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}
console.log();

//14.Left Half Pyramid
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
        row += "  ";
    }
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}
console.log();

//15.Reverse Left Half Pyramid
for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
        row += "  ";
    }
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}
console.log();

//16.K-Pattern
//Upper
for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}
//Lower
for (let i = 2; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}
console.log();

//17.Triangle Star Pattern
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}
console.log();

//18.Reverse Number Triangle Pattern
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j < i; j++) {
        row += " ";
    }
    for (let j = i; j <= n; j++) {
        row += j + " ";
    }
    console.log(row);
}
console.log();

//19.Mirror Image Triangle Pattern
//Upper
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j < i; j++) {
        row += " ";
    }
    for (let j = i; j <= n; j++) {
        row += j + " ";
    }
    console.log(row);
}
//Lower
for (let i = 1; i <= n - 1; i++) {
    let row = "";
    for (let j = 1; j < n - i; j++) {
        row += " ";
    }
    for (let j = n - i; j <= n; j++) {
        row += j + " ";
    }
    console.log(row);
}
console.log();

//20.Hollow Triangle Pattern
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    for (let j = 1; j <= i; j++) {
        if (j == 1 || i == j || i == n) {
            row += "* ";
        }
        else {
            row += "  "
        }
    }
    console.log(row);
}
console.log();

//21.Hollow Reverse Triangle Pattern
for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    for (let j = 1; j <= i; j++) {
        if (j == 1 || i == j || i == n) {
            row += "* ";
        }
        else {
            row += "  "
        }
    }
    console.log(row);
}
console.log();

//22.Hollow Diamond Pyramid
//Upper
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    for (let j = 1; j <= i; j++) {
        if (j == 1 || i == j) {
            row += "* ";
        }
        else {
            row += "  ";
        }
    }
    console.log(row);
}
//Lower
for (let i = n - 1; i > 0; i--) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    for (let j = 1; j <= i; j++) {
        if (j == 1 || i == j) {
            row += "* ";
        }
        else {
            row += "  ";
        }
    }
    console.log(row);
}
console.log();

//23.Hollow HourGlass Pattern
for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    for (let j = 1; j <= i; j++) {
        if (j == 1 || i == j || i == n) {
            row += "* ";
        }
        else {
            row += "  "
        }
    }
    console.log(row);
}
for (let i = 2; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    for (let j = 1; j <= i; j++) {
        if (j == 1 || i == j || i == n) {
            row += "* ";
        }
        else {
            row += "  "
        }
    }
    console.log(row);
}
console.log();

//24.Pascal's Triangle
for (let i = 1; i <= n; i++) {
    let row = "";
    // 1. Print leading spaces for center alignment
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    // 2. Calculate and print Pascal's numbers
    let val = 1;
    for (let j = 1; j <= i; j++) {
        row += val + " ";
        val = val * (i - j) / j;
    }
    console.log(row);
}
console.log();

//25.Right Pascal's Triangle
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}
for (let i = n - 1; i > 0; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}


//Assignment 2 Completed