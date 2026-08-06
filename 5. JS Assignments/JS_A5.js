//Assignment - 5 Arrays

//============Beginner=============
//1. Creating Arrays & Accessing Items. Create an array named `fruits` with the values `"apple"`, `"banana"`, and `"orange"`. Print the second element to the console.
const fruits = ["apple", "banana", "orange"];
console.log(`Second element in fruits is ${fruits[1]}`);

//2.Array Length. Given `const colors = ["red", "blue", "green", "yellow"];`, write code to print the total number of items in the array.
const colors = ["Red", "Blue", "Green", "Yellow"];
for (let i = 0; i < colors.length; i++) {
  console.log(`${i + 1} Element is ${colors[i]}`);
}

/* 3. Push & Pop. Start with `const numbers = [1, 2, 3];`.
- Add `4` to the end of the array.
- Remove the last element from the array.
- What is the final state of `numbers`? */
const numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers);
numbers.pop();
console.log(numbers);

// 4.Shift & Unshift. Start with `const animals = ["cat", "dog"];`. - Add `"elephant"` to the **beginning** of the array. - Remove the first element from the array.
const animals = ["cat", "dog"];
animals.unshift("elephant");
console.log(animals);
animals.shift();
console.log(animals);

// 5. Finding Index. Given `const scores = [85, 92, 78, 90];`, how do you find the index of the score `78`? What does `indexOf` return if an item is not found? -1
const scores = [85, 92, 78, 90];
console.log(scores.indexOf(78));
console.log(scores.indexOf(50));

// 6. Check Inclusion. Write a line of JavaScript to check if `"laptop"` exists in the array `const items = ["phone", "tablet", "laptop", "watch"];`. (Return `true` or `false`).
const items = ["phone", "tablet", "laptop", "watch"];
console.log(items.includes("laptop"));

// 7. Array to String. Convert `const words = ["JavaScript", "is", "awesome"];` into a single string separated by spaces (`"JavaScript is awesome"`).
const words = ["JavaScript", "is", "awesome"];
console.log(words.join(" "));

//=============Intermediate=============
// 1. Iterating with `forEach`. Given `const prices = [10, 20, 30];`, use `.forEach()` to log each price increased by $5 (e.g., log `15`, `25`, `35`).
const prices = [10, 20, 30];
prices.forEach((price) => {
  console.log(price + 5);
});

// 2. Transforming with `map`. Given `const nums = [1, 2, 3, 4, 5];`, use `.map()` to create a new array where each number is squared.
const nums = [1, 2, 3, 4, 5];
const squareNums = nums.map((num) => num * num);
console.log(squareNums);

// 3. Filtering with `filter`. Given `const ages = [12, 18, 25, 8, 30, 15];`, use `.filter()` to get a new array containing only ages that are 18 or older.
const ages = [12, 18, 25, 8, 30, 15];
const newAges = ages.filter((age) => age >= 18);
console.log(newAges);

// 4. Finding an Element with `find`. Given `const users = [{id: 1, name: "Alice"}, {id: 2, name: "Bob"}];`, use `.find()` to retrieve the user object where `id === 2`.
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
console.log(users.find((user) => user.id === 2));

// 5. Slicing vs Splicing . How do you extract the middle two elements from `["a", "b", "c", "d"]` using `.slice()` without modifying the original array? How do you remove `"c"` using `.splice()`?
let letters = ["a", "b", "c", "d"];
console.log(letters.slice(1, 3));
console.log(letters.splice(2, 1));

//6. Sorting Numbers. Sort the array `const points = [40, 100, 1, 5, 25, 10];` in **ascending** order.(Hint: `points.sort()` alone won't work correctly!)
const points = [40, 100, 1, 5, 25, 10];
console.log(points.sort((a, b) => a - b));

//7. Merging Arrays. Combine two arrays `const a = [1, 2];` and `const b = [3, 4];` into a single array using both `.concat()` and the **spread operator** (`...`).
const a = [1, 2];
const b = [3, 4];
const c = a.concat(...b);
console.log(c);

//==============Advanced====================
// 1. Reducing Data with `reduce`. Given `const expenses = [50, 100, 25, 75];`, use `.reduce()` to calculate the sum of all expenses.
const expenses = [50, 100, 25, 75];
console.log(expenses.reduce((a, b) => a + b));

// 2. Flattening Arrays. Flatten a nested array `const nested = [1, [2, [3, 4]], 5];` into a single flat array `[1, 2, 3, 4, 5]` using `.flat()`.
const nested = [1, [2, [3, 4]], 5];
console.log(nested.flat(2));

// 3. Checking Conditions (`every` and `some`). Given `const numbers = [2, 4, 6, 8, 9];`: - Check if **all** numbers are even using `.every()`. - Check if **at least one** number is odd using `.some()`.
const numbers2 = [2, 4, 6, 8, 9];
console.log(numbers2.every((a) => a % 2 == 0));
console.log(numbers2.some((a) => a % 2 != 0));

// 4. Removing Duplicates. Write a function that takes `const duplicateArr = [1, 2, 2, 3, 4, 4, 5];` and returns a new array with all duplicates removed.
const duplicateArr = [1, 2, 2, 3, 4, 4, 5];
console.log(...new Set(duplicateArr));

// 5. Grouping / Transforming Data. Given an array of objects: Count how many items belong to each `type` using `.reduce()`.
const inventory = [
  { name: "apple", type: "fruit" },
  { name: "carrot", type: "vegetable" },
  { name: "banana", type: "fruit" },
];
const typeCounts = inventory.reduce((counts, item) => {
  if (counts[item.type]) {
    counts[item.type] = counts[item.type] + 1;
  } else {
    counts[item.type] = 1;
  }
  return counts;
}, {});
console.log(typeCounts);

//6. Custom Array Search Algorithm. Write a JavaScript function `twoSum(nums, target)` that accepts an array of numbers and a target sum, returning the indices of the two numbers that add up to the target. Example:`twoSum([2, 7, 11, 15], 9)` should return `[0, 1]`.
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
  return false;
}
console.log(twoSum([2, 7, 11, 15], 9));

//Array Assignment - 5 Completed!