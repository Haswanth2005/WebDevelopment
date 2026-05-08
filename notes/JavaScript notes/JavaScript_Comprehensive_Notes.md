# 🚀 The Complete JavaScript Guide
> A beginner-to-advanced walkthrough of every major JavaScript concept — explained simply, with examples. Perfect for learning or quick reference!
---

## Table of Contents
1. [Foundations](#1-foundations)
2. [Control Flow & Logic](#2-control-flow--logic)
3. [Functions](#3-functions)
4. [Working with Data Structures](#4-working-with-data-structures)
5. [Objects & Prototypes](#5-objects--prototypes)
6. [Asynchronous JavaScript](#6-asynchronous-javascript)
7. [The Browser Environment (DOM & BOM)](#7-the-browser-environment-dom--bom)
8. [Modern JavaScript (ES6+)](#8-modern-javascript-es6)
9. [Advanced Concepts & Patterns](#9-advanced-concepts--patterns)
10. [Error Handling & Debugging](#10-error-handling--debugging)
11. [Security](#11-security)
12. [Web APIs & Platform Integration](#12-web-apis--platform-integration)
13. [Performance Optimization](#13-performance-optimization)
14. [Testing](#14-testing)
15. [Tools & Ecosystem](#15-tools--ecosystem)
16. [TypeScript](#16-typescript)
17. [Architectural & Real-World Skills](#17-architectural--real-world-skills)

---

## 1. Foundations

### What is JavaScript?
JavaScript is a programming language that makes websites interactive. It runs in browsers (like Chrome) and also on servers via **Node.js**.

- Created in 1995 by Brendan Eich in just 10 days
- The standard is called **ECMAScript** (ES)
- **Engines** that run JS: V8 (Chrome/Node), SpiderMonkey (Firefox)

```js
// Your first JavaScript line
console.log("Hello, World!");
```

---

### Setting Up the Environment

**Option 1 – Browser Console**
Open any browser → Right-click → Inspect → Console tab → type JS directly.

**Option 2 – Node.js**
```bash
node myfile.js
```

**Option 3 – Code Editor**
Use VS Code with the Live Server extension for instant feedback.

---

### Syntax Basics

```js
// This is a single-line comment

/*
  This is a
  multi-line comment
*/

let name = "Alice";   // a statement ends with ;
let AGE = 25;         // JavaScript is case-sensitive: `age` ≠ `AGE`
```

---

### Variables

| Keyword | Re-assignable | Block-scoped | Use When |
|---------|--------------|--------------|----------|
| `var`   | ✅ Yes        | ❌ No (function-scoped) | Avoid in modern JS |
| `let`   | ✅ Yes        | ✅ Yes       | Value will change |
| `const` | ❌ No         | ✅ Yes       | Value won't change |

```js
var oldWay = "not recommended";

let score = 10;
score = 20; // ✅ allowed

const PI = 3.14;
// PI = 3; ❌ Error! Cannot reassign a const
```

---

### Data Types

**Primitives** – simple, immutable values:

```js
let num    = 42;             // number
let str    = "hello";        // string
let bool   = true;           // boolean
let undef;                   // undefined (declared but not assigned)
let empty  = null;           // null (intentionally empty)
let id     = Symbol("id");   // symbol (unique identifier)
let big    = 9007199254740991n; // bigint (huge numbers)
```

**Objects** – collections of key-value pairs:

```js
let person = { name: "Alice", age: 25 }; // object
let colors = ["red", "green", "blue"];   // array (also an object)
```

---

### Type Coercion & Truthy/Falsy

JavaScript automatically converts types sometimes — this is **coercion**.

```js
console.log("5" + 3);   // "53"  → number 3 becomes string
console.log("5" - 3);   // 2     → string "5" becomes number
console.log(true + 1);  // 2     → true becomes 1
```

**Falsy values** (treated as `false` in conditions):
```js
false, 0, "", null, undefined, NaN
```

**Everything else is truthy**, including `"0"`, `[]`, `{}`.

```js
if ("hello") console.log("truthy!");   // prints
if (0)       console.log("truthy!");   // doesn't print
```

---

### Operators

```js
// Arithmetic
5 + 2   // 7
5 - 2   // 3
5 * 2   // 10
5 / 2   // 2.5
5 % 2   // 1 (remainder)
5 ** 2  // 25 (exponent)

// Comparison
5 == "5"   // true  (loose: converts types)
5 === "5"  // false (strict: no conversion) ← prefer this!
5 !== 3    // true

// Logical
true && false  // false (AND)
true || false  // true  (OR)
!true          // false (NOT)

// Ternary (one-line if/else)
let age = 20;
let status = age >= 18 ? "adult" : "minor";  // "adult"

// typeof
typeof "hello"     // "string"
typeof 42          // "number"
typeof undefined   // "undefined"
typeof null        // "object" ← famous JS quirk!
```

---

### Strings

```js
let name = "Alice";
let greeting = `Hello, ${name}!`;   // template literal
console.log(greeting);               // "Hello, Alice!"

// Escape sequences
let quote = "She said \"hi\"";       // She said "hi"
let newLine = "Line 1\nLine 2";

// Common methods
"hello".length          // 5
"hello".toUpperCase()   // "HELLO"
"  hi  ".trim()         // "hi"
"hello".includes("ell") // true
"hello".replace("l", "r") // "herlo"
"a,b,c".split(",")      // ["a", "b", "c"]
"hello".slice(1, 3)     // "el"
```

---

### Numbers & Math

```js
let x = 5.7;
Math.round(x)   // 6
Math.floor(x)   // 5
Math.ceil(x)    // 6
Math.abs(-10)   // 10
Math.max(3,7,1) // 7
Math.min(3,7,1) // 1
Math.random()   // 0.0 to 0.999...
Math.sqrt(16)   // 4
Math.pow(2, 8)  // 256

// Special values
let bad = "hello" * 2;   // NaN (Not a Number)
let inf = 1 / 0;         // Infinity

isNaN(bad)     // true
isFinite(inf)  // false

parseInt("42px")   // 42
parseFloat("3.14") // 3.14
```

---

### Basic Input/Output

```js
console.log("Debugging info");     // most common
console.warn("Warning!");
console.error("Something broke!");
console.table([{a:1}, {a:2}]);    // pretty table

// Browser-only (avoid in real apps):
alert("Hello!");                   // popup message
let name = prompt("Your name?");   // get user input
let ok = confirm("Are you sure?"); // true/false dialog
```

---

## 2. Control Flow & Logic

### Conditionals

```js
let score = 75;

if (score >= 90) {
  console.log("A grade");
} else if (score >= 75) {
  console.log("B grade");   // ← this runs
} else {
  console.log("Try again");
}
```

**Switch** – great when comparing one value to many options:

```js
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("TGIF!");
    break;
  default:
    console.log("Midweek");
}
```

---

### Loops

```js
// for loop – when you know how many times
for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}

// while – when you don't know upfront
let count = 0;
while (count < 3) {
  console.log(count); // 0, 1, 2
  count++;
}

// do...while – runs AT LEAST once
do {
  console.log("runs once even if false");
} while (false);

// for...of – iterate over arrays/strings
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log(fruit);
}

// for...in – iterate over object keys
let person = { name: "Alice", age: 25 };
for (let key in person) {
  console.log(key, person[key]); // name Alice, age 25
}
```

**break & continue:**

```js
for (let i = 0; i < 5; i++) {
  if (i === 3) break;      // stop the loop at 3
  if (i === 1) continue;   // skip iteration 1
  console.log(i);           // prints 0, 2
}
```

---

### Error Handling

```js
try {
  let result = JSON.parse("bad json {{{");  // throws error
  console.log(result);
} catch (error) {
  console.log("Caught:", error.message);    // handles it
} finally {
  console.log("This always runs");          // cleanup
}

// throw your own errors
function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero!");
  return a / b;
}

try {
  divide(10, 0);
} catch (e) {
  console.log(e.message); // "Cannot divide by zero!"
}
```

---

## 3. Functions

### Defining & Invoking Functions

```js
// Function Declaration – hoisted (available before definition)
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice")); // "Hello, Alice!"

// Function Expression – NOT hoisted
const greet2 = function(name) {
  return `Hi, ${name}!`;
};

// Arrow Function (ES6) – shorter syntax
const greet3 = (name) => `Hey, ${name}!`;
```

---

### Parameters & Arguments

```js
// Default parameters
function power(base, exp = 2) {
  return base ** exp;
}
power(3);     // 9  (exp defaults to 2)
power(3, 3);  // 27

// Rest parameters – gather remaining args into an array
function sum(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}
sum(1, 2, 3, 4); // 10
```

---

### Scope

```js
let global = "I'm everywhere";

function outer() {
  let outerVar = "outer only";

  function inner() {
    let innerVar = "inner only";
    console.log(global);   // ✅ accessible
    console.log(outerVar); // ✅ accessible (closure!)
  }

  // console.log(innerVar); ❌ not accessible here
}
```

---

### Hoisting

```js
// Function declarations are hoisted
sayHi(); // ✅ Works even before definition
function sayHi() { console.log("Hi!"); }

// Function expressions are NOT hoisted
// sayBye(); ❌ Error!
const sayBye = () => console.log("Bye!");
```

---

### Arrow Functions & `this`

Arrow functions don't have their own `this` — they inherit it from surrounding scope.

```js
const obj = {
  name: "Alice",

  regular: function() {
    console.log(this.name); // "Alice" ✅
  },

  arrow: () => {
    console.log(this.name); // undefined ❌ (arrow has no own `this`)
  }
};
```

---

### IIFE (Immediately Invoked Function Expression)

Runs immediately, doesn't pollute the global scope.

```js
(function() {
  let secret = "hidden";
  console.log("Runs immediately!");
})();

// secret is not accessible here
```

---

### Recursion

A function that calls itself.

```js
function factorial(n) {
  if (n <= 1) return 1;       // base case
  return n * factorial(n - 1); // recursive call
}

factorial(5); // 5 * 4 * 3 * 2 * 1 = 120
```

---

## 4. Working with Data Structures

### Arrays

```js
let arr = ["a", "b", "c"];

arr.length      // 3
arr[0]          // "a"
arr[arr.length-1] // "c" (last item)

arr.push("d")       // add to end     → ["a","b","c","d"]
arr.pop()           // remove from end → returns "d"
arr.unshift("z")    // add to start    → ["z","a","b","c"]
arr.shift()         // remove from start → returns "z"
arr.splice(1, 1)    // remove 1 item at index 1
arr.slice(0, 2)     // new array ["a","b"] (non-destructive)
arr.indexOf("b")    // 1
arr.includes("c")   // true
```

---

### Array Iteration Methods

```js
let nums = [1, 2, 3, 4, 5];

// forEach – runs a function on each item, returns nothing
nums.forEach(n => console.log(n));

// map – transforms each item, returns NEW array
let doubled = nums.map(n => n * 2); // [2,4,6,8,10]

// filter – keeps items that pass a test, returns NEW array
let evens = nums.filter(n => n % 2 === 0); // [2,4]

// reduce – boil array down to a single value
let total = nums.reduce((acc, n) => acc + n, 0); // 15

// find – returns FIRST matching item
let found = nums.find(n => n > 3); // 4

// some – returns true if ANY match
nums.some(n => n > 4); // true

// every – returns true if ALL match
nums.every(n => n > 0); // true
```

---

### Objects

```js
let user = {
  name: "Alice",
  age: 25,
  greet() {
    return `Hi, I'm ${this.name}`;
  }
};

user.name         // "Alice"
user["age"]       // 25  (bracket notation - useful for dynamic keys)
user.greet()      // "Hi, I'm Alice"

// Useful static methods
Object.keys(user)    // ["name", "age", "greet"]
Object.values(user)  // ["Alice", 25, function]
Object.entries(user) // [["name","Alice"], ["age",25], ...]
```

---

### Destructuring

```js
// Array destructuring
let [a, b, c] = [1, 2, 3];
console.log(a); // 1

// Skip items
let [first, , third] = [1, 2, 3];

// Object destructuring
let { name, age } = { name: "Alice", age: 25 };
console.log(name); // "Alice"

// Rename while destructuring
let { name: fullName } = { name: "Alice" };
console.log(fullName); // "Alice"

// Default values
let { city = "Unknown" } = { name: "Alice" };
console.log(city); // "Unknown"
```

---

### Spread & Rest Operators

```js
// Spread – expand an array/object
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; // [1,2,3,4,5]

let obj1 = { a: 1 };
let obj2 = { ...obj1, b: 2 }; // { a:1, b:2 }

// Clone without reference
let original = [1, 2, 3];
let copy = [...original]; // ✅ true copy, not same reference

// Rest – collect remaining into array (in function params)
function log(first, ...rest) {
  console.log(first); // 1
  console.log(rest);  // [2,3,4]
}
log(1, 2, 3, 4);
```

---

### Maps & Sets

```js
// Set – unique values only
let set = new Set([1, 2, 2, 3, 3]);
console.log(set); // Set {1, 2, 3}

set.add(4);
set.has(2);    // true
set.delete(2);
set.size;      // 3

// Map – key-value pairs with ANY type as key
let map = new Map();
map.set("name", "Alice");
map.set(42, "the answer");

map.get("name");    // "Alice"
map.has(42);        // true
map.size;           // 2

for (let [key, val] of map) {
  console.log(key, val);
}
```

---

## 5. Objects & Prototypes

### Constructor Functions

Before ES6 classes, we used constructor functions to create objects:

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  return `Hi, I'm ${this.name}`;
};

let alice = new Person("Alice", 25);
alice.greet(); // "Hi, I'm Alice"
```

---

### Prototypal Inheritance

Every JS object has a hidden `[[Prototype]]` link — this is how inheritance works.

```js
let animal = {
  breathe() { return "breathing..."; }
};

let dog = Object.create(animal); // dog inherits from animal
dog.bark = function() { return "Woof!"; };

dog.breathe(); // ✅ found on prototype chain
dog.bark();    // ✅ own method
```

---

### Classes (ES6+)

Cleaner syntax for the same prototype-based inheritance:

```js
class Animal {
  #sound; // private field (can't access outside)

  constructor(name, sound) {
    this.name = name;
    this.#sound = sound;
  }

  speak() {
    return `${this.name} says ${this.#sound}`;
  }

  static create(name, sound) { // static = called on class, not instance
    return new Animal(name, sound);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name, "Woof"); // call parent constructor
  }

  fetch() { return `${this.name} fetches the ball!`; }
}

let rex = new Dog("Rex");
rex.speak();  // "Rex says Woof"
rex.fetch();  // "Rex fetches the ball!"
rex instanceof Dog;    // true
rex instanceof Animal; // true
```

---

### call, apply, bind

These let you control what `this` refers to:

```js
function introduce(greeting) {
  return `${greeting}, I'm ${this.name}`;
}

let alice = { name: "Alice" };
let bob   = { name: "Bob" };

introduce.call(alice, "Hi");      // "Hi, I'm Alice"
introduce.apply(bob, ["Hello"]);  // "Hello, I'm Bob" (args as array)

let boundFn = introduce.bind(alice); // returns a new function
boundFn("Hey"); // "Hey, I'm Alice"
```

---

### Getters & Setters

```js
class Temperature {
  constructor(celsius) {
    this._celsius = celsius;
  }

  get fahrenheit() {
    return this._celsius * 9/5 + 32;
  }

  set fahrenheit(value) {
    this._celsius = (value - 32) * 5/9;
  }
}

let temp = new Temperature(0);
console.log(temp.fahrenheit); // 32
temp.fahrenheit = 212;
console.log(temp._celsius);   // 100
```

---

## 6. Asynchronous JavaScript

### The Problem: Blocking Code

JS is single-threaded. Without async, one slow task blocks everything.

```js
// Synchronous (blocks)
console.log("Start");
// imagine this takes 3 seconds...
console.log("End"); // can't run until above finishes
```

---

### Callbacks

The oldest async pattern — pass a function to be called later:

```js
setTimeout(function() {
  console.log("Runs after 1 second");
}, 1000);

console.log("Runs immediately"); // this prints FIRST
```

**Callback hell** – deeply nested callbacks, hard to read:

```js
getUser(id, function(user) {
  getOrders(user, function(orders) {
    getDetails(orders[0], function(details) {
      // deeply nested = hard to maintain 😱
    });
  });
});
```

---

### Promises

A Promise represents a value that will be available in the future.

```js
const fetchData = new Promise((resolve, reject) => {
  let success = true;
  if (success) resolve("Got data!");
  else reject("Failed!");
});

fetchData
  .then(data => console.log(data))     // "Got data!"
  .catch(err => console.log(err))      // if rejected
  .finally(() => console.log("Done")); // always runs
```

**Chaining:**

```js
fetch("/api/user")
  .then(res => res.json())
  .then(user => fetch(`/api/orders/${user.id}`))
  .then(res => res.json())
  .then(orders => console.log(orders))
  .catch(err => console.error(err));
```

**Promise helpers:**

```js
// Run multiple promises in parallel
Promise.all([p1, p2, p3])          // resolves when ALL resolve
  .then(([r1, r2, r3]) => console.log(r1, r2, r3));

Promise.race([p1, p2])             // first one wins
Promise.allSettled([p1, p2])       // waits for all, even if some fail
Promise.any([p1, p2])              // first SUCCESS wins
```

---

### Async/Await

Makes async code look synchronous — much easier to read!

```js
async function loadUser(id) {
  try {
    const res  = await fetch(`/api/users/${id}`);
    const user = await res.json();
    console.log(user.name);
  } catch (error) {
    console.error("Failed:", error.message);
  }
}

loadUser(1);
```

---

### The Event Loop

JS uses an event loop to handle async operations without blocking.

```
Call Stack → runs your code
Web APIs  → handles timers, fetch, DOM events
Task Queue → macrotasks: setTimeout, setInterval
Microtask Queue → Promises, queueMicrotask (HIGHER priority)
```

```js
console.log("1");          // call stack

setTimeout(() => {
  console.log("2");        // task queue (runs last)
}, 0);

Promise.resolve().then(() => {
  console.log("3");        // microtask queue (runs before task queue)
});

console.log("4");          // call stack

// Output order: 1, 4, 3, 2
```

---

### Fetch API

```js
// GET request
async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
}

// POST request
async function createUser(user) {
  const res = await fetch("/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  });
  return res.json();
}

// Abort a request (e.g., user navigates away)
const controller = new AbortController();
fetch("/api/data", { signal: controller.signal });
controller.abort(); // cancel the request
```

---

## 7. The Browser Environment (DOM & BOM)

### The DOM

The DOM is the browser's representation of your HTML as a tree of objects.

```html
<div id="app">
  <p class="text">Hello</p>
</div>
```

```js
// Select elements
const app  = document.getElementById("app");
const para = document.querySelector(".text");       // first match
const all  = document.querySelectorAll(".text");    // all matches (NodeList)

// Read/modify content
para.textContent = "World";           // safe (no HTML parsing)
para.innerHTML   = "<b>World</b>";    // parses HTML (be careful with user input!)

// Attributes & classes
para.setAttribute("data-id", "42");
para.getAttribute("data-id");          // "42"

para.classList.add("active");
para.classList.remove("text");
para.classList.toggle("highlight");
para.classList.contains("active");    // true
```

---

### Traversing the DOM

```js
const parent   = para.parentElement;
const children = app.children;           // HTMLCollection
const next     = para.nextElementSibling;
const prev     = para.previousElementSibling;
```

---

### Creating & Removing Elements

```js
// Create
const newDiv = document.createElement("div");
newDiv.textContent = "I'm new!";
newDiv.classList.add("card");

// Add to page
document.body.appendChild(newDiv);
app.insertBefore(newDiv, para);

// Remove
para.remove();
app.removeChild(newDiv);
```

---

### Events

```js
const btn = document.querySelector("button");

// Add listener
btn.addEventListener("click", function(event) {
  console.log("Clicked!", event.target);
});

// Event object
document.addEventListener("keydown", (e) => {
  console.log(e.key);  // which key was pressed
});

// Event delegation – handle events on a parent for dynamic children
document.querySelector("ul").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("Clicked:", e.target.textContent);
  }
});
```

**Bubbling vs Capturing:**

```js
// Bubbling (default): event fires on target, then bubbles UP to ancestors
// Capturing: fires on ancestors first, then DOWN to target

el.addEventListener("click", handler, true);  // capture phase
el.addEventListener("click", handler, false); // bubble phase (default)

// Stop bubbling
el.addEventListener("click", (e) => {
  e.stopPropagation();   // don't bubble up
  e.preventDefault();   // prevent default (e.g., stop form submit)
});
```

---

### localStorage & sessionStorage

```js
// localStorage – persists even after closing browser
localStorage.setItem("user", JSON.stringify({ name: "Alice" }));
const user = JSON.parse(localStorage.getItem("user"));
localStorage.removeItem("user");
localStorage.clear();

// sessionStorage – cleared when tab closes
sessionStorage.setItem("token", "abc123");
```

---

## 8. Modern JavaScript (ES6+)

### Optional Chaining (?.)

Safely access deeply nested properties without crashing:

```js
const user = { address: { city: "NY" } };

// Old way:
const city = user && user.address && user.address.city;

// New way:
const city = user?.address?.city;         // "NY"
const zip  = user?.address?.zip;          // undefined (no error!)
const result = user?.getProfile?.();      // call method only if exists
```

---

### Nullish Coalescing (??)

Returns the right side only when left is `null` or `undefined` (not just falsy):

```js
let name = null;
let displayName = name ?? "Guest"; // "Guest"

let count = 0;
let shown = count ?? 10; // 0  ← different from || which would give 10!
let shown2 = count || 10; // 10 ← || treats 0 as falsy
```

---

### Logical Assignment Operators

```js
let a = null;
a ??= "default";  // assigns only if a is null/undefined → "default"

let b = "";
b ||= "fallback"; // assigns only if b is falsy → "fallback"

let c = "hello";
c &&= c.toUpperCase(); // assigns only if c is truthy → "HELLO"
```

---

### Modules (import/export)

```js
// math.js – named exports
export const PI = 3.14;
export function add(a, b) { return a + b; }

// greet.js – default export
export default function greet(name) {
  return `Hello, ${name}!`;
}

// main.js – importing
import greet from "./greet.js";            // default import
import { PI, add } from "./math.js";      // named imports
import * as MathUtils from "./math.js";   // import all as object

// Dynamic import (lazy loading)
async function loadChart() {
  const { Chart } = await import("./chart.js");
  new Chart();
}
```

---

### Other Useful Modern Features

```js
// Array.at() – negative indexing
let arr = [1, 2, 3, 4, 5];
arr.at(-1);  // 5 (last element)
arr.at(-2);  // 4

// Object.hasOwn() – safer than hasOwnProperty
Object.hasOwn({ name: "Alice" }, "name"); // true

// Top-level await (in modules)
const data = await fetch("/api/data").then(r => r.json());

// String.matchAll()
const text = "cat bat sat";
const matches = [...text.matchAll(/[a-z]at/g)];
// returns all matches with index info
```

---

## 9. Advanced Concepts & Patterns

### Closures

A closure is when a function "remembers" variables from its outer scope, even after the outer function has returned.

```js
function makeCounter() {
  let count = 0;     // private variable

  return {
    increment() { count++; },
    decrement() { count--; },
    getCount()  { return count; }
  };
}

const counter = makeCounter();
counter.increment();
counter.increment();
counter.getCount(); // 2 — `count` is remembered!
```

---

### Currying

Transform a function that takes multiple args into a chain of single-arg functions:

```js
// Normal function
const add = (a, b) => a + b;

// Curried version
const curriedAdd = a => b => a + b;

const add5 = curriedAdd(5);  // partially apply
add5(3);  // 8
add5(10); // 15

// Useful real example
const multiply = (factor) => (number) => number * factor;
const double = multiply(2);
const triple = multiply(3);

[1, 2, 3].map(double); // [2, 4, 6]
[1, 2, 3].map(triple); // [3, 6, 9]
```

---

### Higher-Order Functions (HOF)

A function that takes or returns another function:

```js
// Takes a function as argument
function repeat(fn, times) {
  for (let i = 0; i < times; i++) fn(i);
}
repeat(console.log, 3); // 0, 1, 2

// Returns a function
function makeMultiplier(x) {
  return (y) => x * y;
}
const double = makeMultiplier(2);
double(5); // 10
```

---

### Memoization

Cache function results to avoid redundant computation:

```js
function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log("From cache!");
      return cache[key];
    }
    cache[key] = fn(...args);
    return cache[key];
  };
}

const slowSquare = (n) => {
  // pretend this is slow...
  return n * n;
};

const fastSquare = memoize(slowSquare);
fastSquare(10); // calculates: 100
fastSquare(10); // from cache: 100
```

---

### Design Patterns

**Module Pattern** – encapsulate private state:
```js
const bankAccount = (() => {
  let balance = 0; // private

  return {
    deposit(amount) { balance += amount; },
    withdraw(amount) { balance -= amount; },
    getBalance() { return balance; }
  };
})();

bankAccount.deposit(100);
bankAccount.getBalance(); // 100
// balance is NOT accessible from outside
```

**Observer/Pub-Sub Pattern** – subscribe to events:
```js
class EventEmitter {
  constructor() { this.events = {}; }

  on(event, listener) {
    (this.events[event] ||= []).push(listener);
  }

  emit(event, data) {
    (this.events[event] || []).forEach(fn => fn(data));
  }
}

const emitter = new EventEmitter();
emitter.on("login", user => console.log(`${user} logged in`));
emitter.emit("login", "Alice"); // "Alice logged in"
```

**Factory Pattern** – create objects without `new`:
```js
function createUser(name, role) {
  return {
    name,
    role,
    greet() { return `Hi, I'm ${name} (${role})`; }
  };
}

const admin = createUser("Alice", "admin");
const guest = createUser("Bob", "guest");
```

---

### Functional Programming

```js
// Pure functions – no side effects, same input = same output
const add = (a, b) => a + b; // ✅ pure
let total = 0;
const addToTotal = (n) => { total += n; }; // ❌ impure (modifies external state)

// Immutability – don't mutate, create new
const original = [1, 2, 3];
const updated = [...original, 4]; // ✅ new array
// original.push(4); ❌ mutates original

// Function composition
const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);
const double = x => x * 2;
const addOne = x => x + 1;
const doubleThenAdd = compose(addOne, double);
doubleThenAdd(5); // (5*2)+1 = 11
```

---

### Iterators & Generators

```js
// Generator function – produces values lazily
function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;  // pause here, return value, resume on next call
  }
}

const nums = range(1, 5);
nums.next(); // { value: 1, done: false }
nums.next(); // { value: 2, done: false }

for (let n of range(1, 3)) {
  console.log(n); // 1, 2, 3
}

// Async generator
async function* fetchPages(url) {
  let page = 1;
  while (true) {
    const res = await fetch(`${url}?page=${page++}`);
    if (!res.ok) break;
    yield await res.json();
  }
}
```

---

## 10. Error Handling & Debugging

### Custom Error Types

```js
class ValidationError extends Error {
  constructor(message, field) {
    super(message);          // call parent Error
    this.name = "ValidationError";
    this.field = field;
  }
}

class NetworkError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = "NetworkError";
    this.statusCode = statusCode;
  }
}

try {
  throw new ValidationError("Required", "email");
} catch (e) {
  if (e instanceof ValidationError) {
    console.log(`Field "${e.field}" error: ${e.message}`);
  }
}
```

---

### Global Error Handling

```js
// Catch unhandled errors anywhere in the page
window.onerror = function(message, source, line, col, error) {
  console.error("Uncaught:", message, "at line", line);
  return true; // suppress default browser error
};

// Catch unhandled promise rejections
window.addEventListener("unhandledrejection", (event) => {
  console.error("Unhandled promise rejection:", event.reason);
  event.preventDefault();
});
```

---

### Debugging Tips

```js
// console tricks
console.log("Simple log");
console.warn("Warning!");
console.error("Error!");
console.table([{a:1, b:2}, {a:3, b:4}]);  // pretty table
console.group("Group");
  console.log("inside group");
console.groupEnd();
console.time("loop");
for(let i=0;i<1000000;i++){}
console.timeEnd("loop"); // "loop: 2.3ms"

// Debugger – pause execution at a line
function buggyFn() {
  let x = 5;
  debugger; // opens DevTools at this line
  return x * 2;
}
```

**Chrome DevTools tips:**
- **Sources tab** → click line numbers to set breakpoints
- **Watch** → monitor variables as you step through
- **Call Stack** → see how you got here
- **Performance tab** → record and profile bottlenecks

---

## 11. Security

### XSS (Cross-Site Scripting)

Attackers inject malicious scripts into your page.

```js
// ❌ DANGEROUS – injects raw HTML (attackers can run JS)
div.innerHTML = userInput;

// ✅ SAFE – treats input as text only
div.textContent = userInput;

// If you must use HTML, escape it first:
function escapeHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
```

---

### Content Security Policy (CSP)

A HTTP header that tells browsers which scripts are allowed:

```html
<!-- In your HTML head or as HTTP header -->
<meta http-equiv="Content-Security-Policy"
      content="default-src 'self'; script-src 'self' https://cdn.example.com">
```

---

### CORS

Browsers block requests to different origins by default. The server must allow it:

```js
// Server must send these headers:
// Access-Control-Allow-Origin: https://yoursite.com
// Access-Control-Allow-Methods: GET, POST

// Client fetch with credentials
fetch("https://api.example.com/data", {
  credentials: "include" // send cookies cross-origin
});
```

---

### Client-Side Storage Security

```js
// ❌ Never store sensitive data in localStorage
localStorage.setItem("password", "secret123"); // hackable via XSS!

// ✅ Use HttpOnly cookies for auth tokens (can't be read by JS)
// Set by server: Set-Cookie: token=abc; HttpOnly; Secure; SameSite=Strict
```

---

## 12. Web APIs & Platform Integration

### Web Workers

Run heavy tasks off the main thread (no UI freezing):

```js
// worker.js
self.onmessage = function(e) {
  const result = heavyComputation(e.data);
  self.postMessage(result);
};

// main.js
const worker = new Worker("worker.js");
worker.postMessage(largeDataSet);
worker.onmessage = (e) => console.log("Result:", e.data);
```

---

### Service Workers & PWAs

Cache resources for offline use:

```js
// service-worker.js
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("v1").then(cache =>
      cache.addAll(["/", "/index.html", "/style.css"])
    )
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});

// Register in main.js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js");
}
```

---

### WebSockets

Real-time two-way communication:

```js
const ws = new WebSocket("wss://echo.websocket.org");

ws.onopen    = () => ws.send("Hello server!");
ws.onmessage = (e) => console.log("Received:", e.data);
ws.onerror   = (e) => console.error("Error:", e);
ws.onclose   = () => console.log("Disconnected");
```

---

### IndexedDB

Structured client-side database:

```js
const request = indexedDB.open("MyDB", 1);

request.onupgradeneeded = (e) => {
  const db = e.target.result;
  db.createObjectStore("users", { keyPath: "id" });
};

request.onsuccess = (e) => {
  const db = e.target.result;
  const tx = db.transaction("users", "readwrite");
  tx.objectStore("users").add({ id: 1, name: "Alice" });
};
```

---

## 13. Performance Optimization

### Debouncing & Throttling

```js
// Debounce – wait until user STOPS typing before firing
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

const search = debounce((query) => fetchResults(query), 300);
input.addEventListener("input", (e) => search(e.target.value));


// Throttle – fire at most once per interval
function throttle(fn, limit) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn(...args);
    }
  };
}

window.addEventListener("scroll", throttle(updateHeader, 100));
```

---

### Lazy Loading with IntersectionObserver

Only load images/content when they enter the viewport:

```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;   // load the real image
      observer.unobserve(img);     // stop watching once loaded
    }
  });
});

document.querySelectorAll("img[data-src]").forEach(img => {
  observer.observe(img);
});
```

---

### requestAnimationFrame

Smooth animations, synced with browser repaint:

```js
function animate() {
  // update your animation here
  box.style.left = (parseInt(box.style.left) + 1) + "px";

  requestAnimationFrame(animate); // schedule next frame (~60fps)
}

requestAnimationFrame(animate);
```

---

### requestIdleCallback

Run non-critical tasks when browser is idle:

```js
requestIdleCallback((deadline) => {
  while (deadline.timeRemaining() > 0 && tasks.length > 0) {
    doTask(tasks.pop());
  }
});
```

---

## 14. Testing

### Types of Tests

| Type | Tests What | Example |
|------|-----------|---------|
| **Unit** | Single function | `add(2,3) === 5` |
| **Integration** | Functions working together | User login flow |
| **End-to-End (E2E)** | Full user journey in browser | Sign up → checkout |

---

### Jest (most popular)

```js
// math.js
export function add(a, b) { return a + b; }

// math.test.js
import { add } from "./math.js";

describe("add function", () => {
  test("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("handles negative numbers", () => {
    expect(add(-1, 1)).toBe(0);
  });
});
```

```bash
npx jest math.test.js
```

---

### Testing Async Code

```js
// Test a promise
test("fetches user data", async () => {
  const user = await fetchUser(1);
  expect(user.name).toBe("Alice");
});
```

---

### Mocking

Replace real implementations with fakes:

```js
// Mock a module
jest.mock("./api", () => ({
  fetchUser: jest.fn().mockResolvedValue({ name: "Alice" })
}));

test("shows user name", async () => {
  const { fetchUser } = require("./api");
  const user = await fetchUser(1);
  expect(fetchUser).toHaveBeenCalledWith(1);
  expect(user.name).toBe("Alice");
});
```

---

### Playwright (E2E Testing)

```js
import { test, expect } from "@playwright/test";

test("user can log in", async ({ page }) => {
  await page.goto("https://myapp.com/login");
  await page.fill("#email", "alice@example.com");
  await page.fill("#password", "password");
  await page.click("button[type=submit]");
  await expect(page).toHaveURL("/dashboard");
});
```

---

## 15. Tools & Ecosystem

### Package Managers

```bash
# npm (comes with Node.js)
npm install lodash          # install package
npm install -D jest         # dev dependency
npm run test                # run script from package.json
npm init -y                 # create package.json

# yarn
yarn add react
yarn add -D typescript

# pnpm (fastest, disk-efficient)
pnpm install
pnpm add express
```

---

### Bundlers

**Vite** (modern, lightning fast):
```bash
npm create vite@latest my-app
cd my-app && npm install && npm run dev
```

**Webpack** (older, very configurable):
```js
// webpack.config.js
module.exports = {
  entry: "./src/index.js",
  output: { filename: "bundle.js", path: __dirname + "/dist" },
  module: {
    rules: [{ test: /\.js$/, use: "babel-loader" }]
  }
};
```

---

### Babel

Transpile modern JS to work in older browsers:

```bash
npm install -D @babel/core @babel/preset-env babel-loader
```

```json
// .babelrc
{
  "presets": ["@babel/preset-env"]
}
```

---

### ESLint & Prettier

```bash
npm install -D eslint prettier eslint-config-prettier

# Auto-fix issues
npx eslint --fix src/
npx prettier --write src/
```

```json
// .eslintrc.json
{
  "extends": ["eslint:recommended"],
  "rules": {
    "no-unused-vars": "warn",
    "no-console": "off"
  }
}
```

---

### Module Systems

```js
// CommonJS (Node.js)
const path = require("path");
module.exports = { myFunction };

// ES Modules (modern browsers + modern Node)
import path from "path";
export { myFunction };
```

---

### Node.js Basics

```js
// File system
const fs = require("fs");
fs.readFile("./data.txt", "utf8", (err, data) => console.log(data));
const content = fs.readFileSync("./data.txt", "utf8"); // sync version

// Simple HTTP server
const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World!\n");
});
server.listen(3000, () => console.log("Server running on port 3000"));

// Environment variables
require("dotenv").config();
const dbPassword = process.env.DB_PASSWORD;
```

---

## 16. TypeScript

TypeScript adds static types to JavaScript, catching errors before runtime.

### Types & Interfaces

```ts
// Basic types
let name: string = "Alice";
let age: number = 25;
let active: boolean = true;
let scores: number[] = [90, 85, 92];
let anything: any = "whatever"; // opt-out of type checking

// Interface – describe the shape of an object
interface User {
  id: number;
  name: string;
  email?: string; // optional
}

function greetUser(user: User): string {
  return `Hello, ${user.name}`;
}

// Type alias
type Point = { x: number; y: number };
type Status = "active" | "inactive" | "pending"; // union type
```

---

### Generics

Write reusable code that works with any type:

```ts
function identity<T>(value: T): T {
  return value;
}

identity<string>("hello"); // type is string
identity<number>(42);      // type is number

// Generic array helper
function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

first([1, 2, 3]);           // returns number
first(["a", "b"]);          // returns string
```

---

### Utility Types

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser  = Partial<User>;           // all fields optional
type RequiredUser = Required<Partial<User>>; // all fields required
type ReadonlyUser = Readonly<User>;          // can't mutate
type UserName     = Pick<User, "name">;      // only name field
type NoId         = Omit<User, "id">;        // everything except id
```

---

## 17. Architectural & Real-World Skills

### MVC Pattern

```
Model      → data & business logic (state)
View       → UI / what the user sees
Controller → connects model & view, handles events
```

In React terms: Components = View, State/Reducers = Model, Event handlers = Controller.

---

### State Management

```js
// Zustand (simple state for React)
import { create } from "zustand";

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  reset: () => set({ count: 0 }),
}));

// In a component:
const { count, increment } = useStore();
```

---

### REST API Design (Client Side)

```js
// Good API client pattern
class ApiClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    const res = await fetch(`${this.baseURL}${path}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }

  async post(path, body) {
    const res = await fetch(`${this.baseURL}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }
}

const api = new ApiClient("https://api.example.com");
const users = await api.get("/users");
```

---

### SSR vs CSR vs SSG

| Approach | Renders On | Best For |
|----------|-----------|---------|
| **CSR** (Client-Side) | Browser | Dashboards, apps |
| **SSR** (Server-Side) | Server per request | SEO-heavy, dynamic content |
| **SSG** (Static Generation) | Build time | Blogs, docs, marketing |

```js
// Next.js example
// SSG
export async function getStaticProps() {
  const posts = await fetchPosts();
  return { props: { posts } };
}

// SSR
export async function getServerSideProps(context) {
  const user = await fetchUser(context.req.cookies.token);
  return { props: { user } };
}
```

---

### Monorepo with Turborepo

```
my-monorepo/
  apps/
    web/           ← Next.js app
    docs/          ← documentation site
  packages/
    ui/            ← shared components
    utils/         ← shared utilities
    config/        ← shared ESLint, TS configs
  turbo.json       ← pipeline config
  package.json     ← workspace root
```

```json
// turbo.json
{
  "pipeline": {
    "build": { "dependsOn": ["^build"], "outputs": ["dist/**"] },
    "test":  { "dependsOn": ["build"] },
    "dev":   { "cache": false, "persistent": true }
  }
}
```

---

## 🎯 Quick Reference Cheat Sheet

### Common Array Methods
```js
arr.map(fn)      // transform → new array
arr.filter(fn)   // keep where fn returns true → new array
arr.reduce(fn,i) // accumulate → single value
arr.find(fn)     // first match → element
arr.some(fn)     // any match → boolean
arr.every(fn)    // all match → boolean
arr.flat(depth)  // flatten nested arrays
arr.flatMap(fn)  // map + flatten
arr.sort(fn)     // sort in place
arr.reverse()    // reverse in place
```

### Common String Methods
```js
str.toUpperCase()    str.toLowerCase()
str.trim()           str.trimStart()   str.trimEnd()
str.includes(sub)    str.startsWith(s) str.endsWith(s)
str.indexOf(sub)     str.lastIndexOf(sub)
str.slice(start,end) str.substring(start,end)
str.split(sep)       str.replace(old,new)
str.repeat(n)        str.padStart(n,ch) str.padEnd(n,ch)
```

### Promise Quick Patterns
```js
// Run N async tasks in parallel
const results = await Promise.all(items.map(item => processItem(item)));

// Run in sequence
for (const item of items) {
  await processItem(item); // waits for each
}

// Timeout a fetch
const withTimeout = (promise, ms) =>
  Promise.race([promise, new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Timeout")), ms))]);
```

---

*Happy coding! 🎉 JavaScript is vast — take it step by step, build projects, and the concepts will click naturally.*