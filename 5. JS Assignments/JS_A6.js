// Assignment - 6 Objects

//==================Beginner==========================
// 1. Creating Objects & Property Access. Create an object named `car` with properties `make` (`"Toyota"`), `model` (`"Corolla"`), and `year` (`2020`). - Access and log the `model` property using **dot notation**. - Access and log the `year` property using **bracket notation**.
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};
console.log(car.model);
console.log(car["year"]);

// 2. Adding & Updating Properties . Start with the following object: - Add a new property `subject` with the value `"Math"`. - Update the `grade` property to `11`. - What is the final state of `student`?
const student = { name: "Alex", grade: 10 };
student.subject = "Math";
student.grade = 11;
console.log(student);

// 3. Deleting Properties. Given the following object: - Permanently remove the `inStock` property from `product`. - Print `product` to confirm the property was deleted.
const product = { id: 101, name: "Laptop", price: 999, inStock: true };
delete product.inStock;
console.log(product);

// 4. Checking Property Existence. Given the following object: - Write a line of code using the `in` operator to check if `"email"` exists on `user`. - Check if `"name"` exists as an own property using `user.hasOwnProperty()`.
const user = { name: "Sam", age: 25 };
console.log("email" in user);
console.log(user.hasOwnProperty("name"));

// 5. Counting Own Properties . Given the following object: - Write code using `Object.keys()` to get an array of all key names in `book`. - Print the total number of properties in `book`.
const book = { title: "1984", author: "George Orwell", pages: 328 };
console.log(Object.keys(book));
console.log(Object.keys(book).length);

// 6. Nested Objects — Reading Deep Properties *(Nested Object Question 1)*. Given the following nested object structure: - Write JavaScript expressions to access and log Sarah's `email` and `city`.
const user2 = {
  id: 42,
  profile: {
    firstName: "Sarah",
    lastName: "Connor",
    contact: {
      email: "sarah@test.com",
      city: "Los Angeles",
    },
  },
};
console.log(user2.profile.contact.email);
console.log(user2.profile.contact.city);

// 7. Property Shorthand & Object Methods. Using variables `const name = "John"` and `const age = 30`, create a `person` object using **ES6 property shorthand**. Add a method `sayHello()` to `person` that logs `"Hello, my name is John!"`.
const name = "John";
const age = 30;
const person = { name, age };
console.log(person);

//=========================== Intermediate ==========================
// 8. Iterating Over Object Properties . Given the following object:- Use a `for...in` loop or `Object.entries()` to print each subject and score in the format: `"Math: 90"`.
const scores = { Math: 90, Science: 85, History: 88 };
for (subject in scores) {
  console.log(`${subject}: ${scores[subject]}`);
}

// 9. Transforming Object Values. Given the following object: - Write code using `Object.keys()` or `Object.entries()` to create a new object where all prices are doubled (e.g., `{ apple: 3, banana: 1.6, orange: 2.4 }`).
const prices = { apple: 1.5, banana: 0.8, orange: 1.2 };
const newPrices = Object.fromEntries(
  Object.entries(prices).map(([item, price]) => [item, price * 2]),
);
console.log(newPrices);

// 10. Shallow Copying Objects. Given `const original = { a: 1, b: 2 };`: - Create a shallow copy of `original` using `Object.assign()`. - Create another shallow copy using the **object spread operator** (`{ ...original }`). - Verify that mutating the copy does not affect `original`.
const original = { a: 1, b: 2 };
const copy = Object.assign({}, original);
const anotherCopy = { ...original };
anotherCopy.a = 99;
console.log(original);
console.log(copy);
console.log(anotherCopy);

// 11. Nested Objects — Immutable Updates *(Nested Object Question 2)*. Given the following nested object: - Create a new object `updatedProfile` where `settings.theme` is changed to `"light"`, **without mutating** `userProfile` and without losing `settings.notifications`.
const userProfile = {
  name: "David",
  settings: {
    theme: "dark",
    notifications: true,
  },
};
const updatedProfile = {
  ...userProfile,
  settings: { ...userProfile.settings, theme: "light" },
};
console.log(userProfile);
console.log(updatedProfile);

// 12. Object Destructuring. Given the following object: - Destructure `name` into a variable named `employeeName`. - Destructure `department` into a variable named `dept`. - Extract `salary` with a default value of `0`.
const employee = { id: 501, name: "Emily", department: "Engineering" };
const { name: employeeName, department: dept, salary = 0 } = employee;
console.log(employeeName);
console.log(dept);
console.log(salary);

// 13. Basic Constructor Function. - Write a constructor function `Rectangle(width, height)` that initializes `this.width` and `this.height`. - Add a method `getArea()` directly inside the constructor function that returns `width * height`. - Instantiate two rectangles with `new Rectangle(...)` and log their areas.
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.getArea = function () {
    return this.width * this.height;
  };
}
const rect1 = new Rectangle(5, 10);
const rect2 = new Rectangle(4, 6);
console.log(rect1.getArea());
console.log(rect2.getArea());

// 14. Instance & Prototype Inspection. Given: - How do you check if `dog` was created from `Animal` using `instanceof`? - How do you retrieve `dog`'s prototype using `Object.getPrototypeOf()`?
function Animal(type) {
  this.type = type;
}
const dog = new Animal("Dog");
console.log(Object.getPrototypeOf(dog));
console.log(dog instanceof Animal);

//============================== Advanced ==================================
// 15. Prototype Method Sharing. Refactor Question 13's `Rectangle` constructor function so that `getArea()` and `getPerimeter()` methods are attached to `Rectangle.prototype` instead of inside the constructor body. - Why is attaching methods to `.prototype` better for memory efficiency than defining them inside the constructor body?
function Rectangle2(width, height) {
  this.width = width;
  this.height = height;
}
Rectangle2.prototype.getArea = function () {
  return this.width * this.height;
};
Rectangle2.prototype.getPerimeter = function () {
  return 2 * (this.width + this.height);
};
const rect_1 = new Rectangle2(5, 10);
const rect_2 = new Rectangle2(4, 6);
console.log(rect_1.getArea()); // 50
console.log(rect_1.getPerimeter()); // 30
console.log(rect_2.getArea()); // 24
console.log(rect_2.getPerimeter()); // 20

/* 16. Object Immutability (`Object.freeze` vs `Object.seal`). Given `const config = { host: "localhost", port: 8080 };`:- What happens under `Object.freeze(config)` vs `Object.seal(config)` when you attempt to:
1. Modify `config.port = 3000`
2. Add `config.debug = true`
3. Delete `config.host` */
const config = { host: "localhost", port: 8080 };
Object.freeze(config);
console.log(config);
Object.seal(config); //addition and deletion not done
console.log(config);
config.port = 3000;
console.log(config);
config.debug = true;
console.log(config);
delete config.host;
console.log(config);
// Action                             Object.seal().   Object.freeze()
// Add new properties                    ❌ No             ❌ No
// Delete existing properties            ❌ No             ❌ No
// Modify existing property values        Yes              ❌ No
// Change property descriptors           ❌ No             ❌ No

// 17. Encapsulation with Factory Functions. Write a factory function `createBankAccount(initialBalance)` that returns an object containing `deposit(amount)`, `withdraw(amount)`, and `getBalance()` methods. - Ensure `balance` cannot be accessed or modified directly from outside the object (using local closure variables instead of `this`).
function createBankAccount(initialBalance) {
  let balance = initialBalance; // private variable
  return {
    deposit: function (amount) {
      balance = balance + amount;
      console.log("Deposited:", amount, "| Balance:", balance);
    },
    withdraw: function (amount) {
      if (amount > balance) {
        console.log("Not enough money!");
      } else {
        balance = balance - amount;
        console.log("Withdrew:", amount, "| Balance:", balance);
      }
    },
    getBalance: function () {
      return balance;
    },
  };
}
const myAccount = createBankAccount(100);
myAccount.deposit(50); // Deposited: 50 | Balance: 150
myAccount.withdraw(30); // Withdrew: 30 | Balance: 120
console.log(myAccount.getBalance());
console.log(myAccount.balance); // undefined (can't touch it directly!)

// 18. Safe Nested Property Accessor. Write a function `getNestedValue(obj, path)` where `path` is a dot-separated string (e.g., `"user.profile.email"`). - The function should safely traverse `obj` and return the nested value if it exists, or `undefined` if any key in the path is missing.
const data = {
  user: {
    profile: {
      email: "test@example.com",
    },
  },
};
console.log(data.user.profile.email);

// 19. Inverting Keys and Values. Write a function `invertObject(obj)` that takes a flat object (e.g., `{ a: "x", b: "y" }`) and returns a new object where keys become values and values become keys (`{ x: "a", y: "b" }`).
function invertObject(obj) {
  const result = {};
  for (let key in obj) {
    const value = obj[key];
    result[value] = key; // swap: value becomes the new key, key becomes the new value
  }
  return result;
}
const original1 = { a: "x", b: "y", c: "z" };
console.log(invertObject(original1)); // { x: "a", y: "b", z: "c" }

// 20. Custom Object Difference Detector. Write a function `getObjectDiff(obj1, obj2)` that compares two flat objects and returns a new object containing only properties from `obj2` whose values differ from `obj1` or do not exist in `obj1`. - **Example:** `getObjectDiff({ a: 1, b: 2 }, { a: 1, b: 99, c: 3 })` $\rightarrow$ `{ b: 99, c: 3 }`
function getObjectDiff(obj1, obj2) {
  return Object.entries(obj2).reduce((diff, [key, value]) => {
    if (obj1[key] !== value) diff[key] = value;
    return diff;
  }, {});
}
console.log(getObjectDiff({ a: 1, b: 2 }, { a: 1, b: 99, c: 3 }));
console.log(getObjectDiff({ x: 1, y: 2 }, { x: 1, y: 2 }));
console.log(getObjectDiff({}, { a: 1 }));

//Javascript Assignment - 6 Completed !