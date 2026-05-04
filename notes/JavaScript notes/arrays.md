##  Arrays in JavaScript
In JavaScript, an array is a special type of object used to store multiple values in a single variable.

###  Two Ways to Create Arrays

```js
// 1. Using Array Literal
let fruits = ["Apple", "Banana", "Mango"];

// 2. Using Array Constructor
let numbers = new Array(10, 20, 30, 40);

console.log(fruits);
console.log(numbers);
```

---

###  Accessing Elements

```js
console.log(fruits[0]); // Apple
console.log(numbers[2]); // 30
```

---

##  Common Array Methods

```js
let arr = [1, 2, 3, 4];

// push - adds element at end
arr.push(5);
console.log(arr); // [1, 2, 3, 4, 5]

// pop - removes last element
arr.pop();
console.log(arr); // [1, 2, 3, 4]

// shift - removes first element
arr.shift();
console.log(arr); // [2, 3, 4]

// unshift - adds element at start
arr.unshift(10);
console.log(arr); // [10, 2, 3, 4]

// indexOf - finds index of element
console.log(arr.indexOf(3)); // 2

// Array Destructuring
const [a, b, c] = arr;
console.log(a, b, c); // 10 2 3

// Spread Operator
let newArr = [...arr, 50];
console.log(newArr); // [10, 2, 3, 4, 50]

// reverse
arr.reverse();
console.log(arr); // [4, 3, 2, 10]

// sort
let nums = [40, 10, 30, 20];
nums.sort((a, b) => a - b);
console.log(nums); // [10, 20, 30, 40]

// join
console.log(fruits.join(", ")); // Apple, Banana, Mango

// toString
console.log(arr.toString()); // "4,3,2,10"
```

---

###  Iterating Over Arrays

```js
let students = ["Rahul", "Priya", "Rohit"];

// For Loop
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

// forEach Loop
students.forEach((name) => {
  console.log(name);
});
```

---

##  Objects in JavaScript
An Objects store data in the form of **key–value pairs**.

```js
let student = {
  name: "Anubhav",
  age: 24,
  course: "B.Tech"
};
```

---

###  Two Ways to Create Objects

```js
// 1. Object Literal
let user = { name: "Shery", age: 22 };

// 2. Object Constructor
let person = new Object();
person.name = "Rohan";
person.age = 25;
```

---

###  Accessing Object Properties

Two ways:

```js
let car = { brand: "BMW", color: "Black" };

// 1. Dot Notation
console.log(car.brand); // BMW

// 2. Bracket Notation
console.log(car["color"]); // Black
```

---

###  Deleting Property

```js
delete car.color;
console.log(car); // { brand: "BMW" }
```

---

###  Nested Objects

```js
let studentData = {
  name: "Anubhav",
  marks: {
    math: 95,
    science: 90
  }
};

console.log(studentData.marks.math); // 95
```

---

Displaying day 38 JavaScript_Notes_Functions_Arrays_Objects.md.


# JavaScript Core Concepts – Easy Notes (Complete English Version)

---

# Normal Function vs Arrow Function

## 1. **Normal Function**

* Old/traditional way of writing functions.
* Uses the `function` keyword.
* Can be used as methods inside objects.
* Can be used as constructors (with `new` keyword).
* Has its own `this`, `arguments`, and behavior.

###  **Example**

```js
function add(a, b) {
  return a + b;
}
console.log(add(5, 10)); // 15
```

### **As Object Method:**

```js
const obj = {
  name: "JavaScript",
  show: function () {
    console.log("Normal function inside object");
  }
};
obj.show();
```

---

## 2. **Arrow Function**

* New, shorter way of writing functions.
* Uses `=>` syntax.
* Cannot be used as a constructor (`new` keyword not allowed).
* Does **not** have its own `this` or `arguments`.
* Best for short tasks, callbacks, and array methods.

###  **Example**

```js
const add = (a, b) => a + b;
console.log(add(5, 10)); // 15
```

### **As Method:**

```js
const obj = {
  show: () => {
    console.log("Arrow function inside object");
  }
};
obj.show();
```


## **2. map() – Square Numbers**


`map()` runs a function on every element and returns a **new array**.

### **Example:**

```js
const arr = [1, 2, 3];
const squared = arr.map(num => num * num);
console.log(squared); // [1, 4, 9]
```

---

## **3. filter()**

### **filter():** keeps only the items that pass the condition.

```js
const nums = [1, 2, 3, 4];
const even = nums.filter(n => n % 2 === 0);
console.log(even); // [2, 4]
```

### **reduce():** combines all values into a single result (sum, product, etc.).

```js
const sum = nums.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 10
```

---

## **4. some() & every()**

### **some():** returns **true** if even one item matches the condition.

```js
[1, 3, 5].some(n => n % 2 === 0); // false
```

### **every():** returns **true** only if all items match the condition.

```js
[2, 4, 6].every(n => n % 2 === 0); // true
```

---

## **5. Object.freeze() & Object.seal()**

### **freeze():** completely locks the object cannot add, delete, or modify properties.

```js
const obj = Object.freeze({ a: 1 });
obj.a = 2; // no change
```

### **seal():** cannot add or delete properties, but existing values can be updated.

```js
const obj2 = Object.seal({ a: 1 });
obj2.a = 3; // update works
```

---

## **6. Nested Object Access**

### **Easy Explanation:**

A nested object means an object inside another object.

### **Example:**

```js
const user = {
  name: "Anubhav",
  address: {
    city: "Delhi",
    pin: 110001
  }
};

console.log(user.address.city);
```

### **Destructuring:**

```js
const { address: { city } } = user;
console.log(city);
```
Displaying day 41 More on arrays.md.