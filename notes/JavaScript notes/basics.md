# JavaScript Notes

## 1. Variables and Scope
### Variable Types:
- `var`:
  - Function-scoped or globally-scoped
  - Older way of declaring variables
- `let`:
  - Block-scoped
  - Recommended for most cases
  - Can be reassigned
- `const`:
  - Block-scoped
  - Cannot be reassigned
  - Use for values that shouldn't change

## 2. Console Methods
```javascript
console.log()    // Regular output
console.info()   // Information messages
console.warn()   // Warning messages
console.error()  // Error messages
console.table()  // Displays arrays/objects in table format
```

## 3. User Interaction
### Prompt (Input)
```javascript
let name = prompt("Enter your name:"); // Takes user input
```

### Alert (Output)
```javascript
alert("Hello, " + name); // Shows popup message
```

## 4. String Operations
### Template Literals
```javascript
let name = "John";
let greeting = `Hello, ${name}! Welcome to JavaScript.`;
// Output: Hello, John! Welcome to JavaScript.
```

### String Methods
1. **Split**
```javascript
let str = "Hello World!";
let words = str.split(" ");  // Splits at space
// Output: ["Hello", "World!"]
```

2. **Join**
```javascript
let words = ["Hello", "World!"];
let joined = words.join(" ");  // Joins with space
// Output: "Hello World!"
```

3. **Replace and ReplaceAll**
```javascript
let str = "Hello World! World!";
let newStr = str.replace("World", "JavaScript");
// Output: "Hello JavaScript! World!"

let newStrAll = str.replaceAll("World", "JavaScript");
// Output: "Hello JavaScript! JavaScript!"
```

4. **Includes**
```javascript
let str = "Hello World!";
let includesWorld = str.includes("World");
// Output: true
```
# JavaScript Data Types 📝

## Basic Data Types

- `Number` - Regular numbers and floating point values
- `String` - Text values
- `Boolean` - true/false values
- `Null` - jab hum kisi varaible ki value baad me jake set karenge to uske liye hum null use karte h
- `Undefined` - jab hum kisi variable ko declare karte h but uski value assign nahi karte to wo undefined hota h
- `Symbol` - Unique identifiers
- `Array` - Collection of values
- `Object` - Key-value pairs
- `NaN` - Not a Number (jab hum kisi variable ko number me convert karne ki koshish karte h lekin wo convert nahi hota to wo NaN hota h)

## Undefined Example

```javascript
let a; // Declare kiya but value nahi di
console.log(a); // undefined
```

## NaN Example

```javascript
let a = "hello";
let b = Number(a);
console.log(b); // NaN (kyunki "hello" number nahi ban sakta)
console.log(12 * a); // NaN
```

## Two Types of Data Types 🔄

### 1. Reference Types

Ye wo hote hai jinke aage-piche brackets hote hai `[]` ya `{}`

- Objects `{}`
- Arrays `[]`
- Functions `()`

**Kaise kaam karte hai?**
Memory mein address store karte hai actual value ka. Jab change karte hai toh original value change hoti hai.

```javascript
let obj = { name: "John", age: 30 };
let obj2 = obj;
obj2.age = 31; // obj2 ke through age change kiya
console.log(obj.age); // 31 (original bhi change ho gaya)
```

### 2. Primitive Types

Direct value store karte hai, copy banate time new value banti hai

```javascript
let str1 = "Hello";
let str2 = str1;
str2 = "World"; // str2 ko new value di
console.log(str1); // "Hello" (original wahi rahega)
```
# JavaScript Operators 🚀

Here, hum alag-alag tarah ke operators ke baare mein dekhenge jo JavaScript mein use hote hain.

---

## ➕ Arithmetic Operators

- `+` (Addition)
- `-` (Subtraction)
- `*` (Multiplication)
- `/` (Division)
- `%` (Modulus - Remainder)
- `**` (Exponentiation)
- `++` (Increment)
- `--` (Decrement)

---

## ⚖️ Comparison Operators

Yeh operators do values ko compare karte hain aur `true` ya `false` return karte hain.

- `==` (Equal to) // **Ye use nahi karna chahiye** ❌
- `!=` (Not equal to)
- `===` (Strict equal to) // **Ye use karna chahiye** ✅
- `!==` (Strict not equal to)
- `>` (Greater than)
- `>=` (Greater than or equal to)
- `<` (Less than)
- `<=` (Less than or equal to)

---

## 🧠 Logical Operators

Yeh operators logical operations perform karte hain.

- `&&` (Logical AND)
- `||` (Logical OR)
- `!` (Logical NOT)

---

## ❓ Ternary Operator

`condition ? expr1 : expr2`

Yeh ek shorthand if-else statement ki tarah hai. Agar `condition` `true` hai, toh `expr1` execute hota hai, varna `expr2`.

```javascript
let age = 18;
let canVote = age >= 18 ? "Yes, can vote" : "No, cannot vote";
console.log(canVote); // Output: "Yes, can vote"
```

---

## 🔍 Type Operators

Yeh operators variable ke type ya object ke instance ko check karte hain.

- `typeof variableName;` // variable ka type return karta hai
- `instanceof ObjectName;` // check karta hai ki ek object kisi specific class ka instance hai ya nahi

**Example:**

```javascript
class Car {
  constructor(make) {
    this.make = make;
  }
}

let myCar = new Car("Toyota");
let myString = "hello";

console.log(myCar instanceof Car); // Output: true (kyunki myCar, Car class se bana hai)
console.log(myString instanceof String); // Output: false (myString ek primitive string hai, object nahi)
console.log(myCar instanceof Object); // Output: true (sabhi objects ultimately Object class ke instance hote hain)
```

---

## ✨ Spread / Rest Operator (`...`)

Yeh modern JS mein bahut important hai!

- **Spread (`...`) --> arrays**

  - Spread operator arrays ko copy karne ya combine karne ke liye use hota hai.
    **Example:**

  ```javascript
  let arr1 = [1, 2, 3];
  let arr2 = [...arr1, 4, 5]; // arr2 = [1, 2, 3, 4, 5]
  console.log(arr2); // Output: [1, 2, 3, 4, 5]
  ```

- **Rest (`...`) --> function parameters**
  - Rest operator function parameters mein use hota hai jab aapko multiple arguments ko ek array mein collect karna ho.
  - // Baad mein jaake spread aur rest ke baare mein detail mein padhenge.

---

## `??` Nullish Coalescing Operator

Agar left operand `null` ya `undefined` hai, toh right operand return karta hai, otherwise left operand return karta hai.

**Example:**

```javascript
console.log(12 > 10 ?? "sorry"); // returns 12 (kyunki 12 > 10 true hai, jo null/undefined nahi hai)
console.log(null ?? "sorry"); // returns "sorry" (kyunki left operand null hai)
console.log(undefined ?? "hello"); // returns "hello" (kyunki left operand undefined hai)
```

---

## `?.` Optional Chaining Operator

Agar koi property ya method exist nahi karti, toh error throw karne ki bajaye `undefined` return karta hai.

**Example:**

```javascript
let user = {};
console.log(user?.address?.street); // returns undefined instead of throwing an error
// agar user.address ya user.address.street exist nahi karte
```

---

## ⬆️ Variable Hoisting in JS

Hoisting ka matlab hai ki variable ko banane se pehle bhi use kar sakte hain (sirf `var` ke case mein).

Hoisting mein aapka variable do hisso mein toot jaata hai:

1.  **Declaration:** Declaration top of the file chala jaata hai (ya uske scope ke top par).
2.  **Initialization:** Initialization apni original jagah par hi rehta hai.

Isse ab variable error nahi deta hai, balki `undefined` value ke saath access ho jaata hai.

**Example (`var` ke saath):**

```javascript
console.log(x); // Output: undefined (kyunki x declare ho chuka hai, par initialize nahi)
var x = 5;
// Internally, JS isko aise dekhta hai:
// var x; // declaration hoisted to the top
// console.log(x); // x is undefined here
// x = 5; // initialization stays in place
console.log(x); // Output: 5
```

**Note:** `let` aur `const` ke saath hoisting nahi hoti hai, ye "temporal dead zone" mein rehte hain jab tak unka initialization nahi hota. Unhe initialization se pehle access karne par `ReferenceError` aata hai.

---

# 🔄 Loops and Conditionals in JavaScript

## 🤔 Conditionals

JavaScript mein decisions lene ke liye conditional operators use hote hain.

- `if`
- `else if`
- `else`
- `switch case`

---

### ✅ Truthy and Falsy Values

Kuch values JavaScript mein by default `false` maani jaati hain.

**Falsy Values:** 👎

- `0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`
- `false`
- `document.all`

> Iske alawa sab kuch **truthy** hota hai. 👍

---

## 🔁 Loops

Loops programming ka ek bahut important concept hai. Isse hum code ko baar-baar chala sakte hain.

**Loops ke do main use case hain:**

1.  **Straightforward Loops:** Jisme na value badalti hai, na printing style.
2.  **Dynamic Loops:** Jisme value ya printing style badalta rehta hai.

---

### Types of Loops

- `for` loop
- `while` loop
- `do...while` loop
- `forEach` loop (arrays ke liye)
- `for...in` loop (objects ke liye)
- `for...of` loop (iterables jaise arrays, strings ke liye)
- **Recursion** (ye loop nahi hai, but iteration ke liye use hota hai)

---

### 🛑 Loop Control Statements

Loops ko control karne ke liye inka use hota hai.

- `break`: Loop ko turant rok deta hai.
- `continue`: Current iteration ko skip karke next iteration pe chala jaata hai.

# 📚 Functions in JavaScript

Functions → aapka code jo thurant nahi chalega jab tak aap usse call na karein. Aap uss code ko kitni bi bar chala sakthe ho.

---

## 🎯 Understanding Functions

### Key Concepts

- **Parameters** - function ke liye inputs
- **Arguments** - actual values pass karte waqt
- **Rest Parameters** - baaki arguments ko collect karna
- **Hoisting** - function declaration ko top par lana
- **Variable Hoisting** - variable declaration ko top par lana
- **Function Hoisting** - function ke poore body ko hoist karna

---

## 🔄 Rest Parameters

`...a` will collect all the remaining arguments into an array

```javascript
function test(a, b, ...c) {
  console.log(a); // 2
  console.log(c); // [4, 5, 6]
}
console.log(test(2, 3, 4, 5, 6));
```

---

## 📋 Parameters in JavaScript

### 1️⃣ Required Parameters

Basic function parameters that must be provided

### 2️⃣ Default Parameters

Parameters jo default value ke saath define hote hain

### 3️⃣ Destructured Parameters

```javascript
function test({ a, b, c }) {
  console.log(a); // 2
  console.log(b); // 3
  console.log(c); // 4
}
console.log(test({ a: 2, b: 3, c: 4 }));
```

### 4️⃣ Rest Parameters

Already covered above

---

## 💾 Arguments in JavaScript

### Types of Arguments

- **Positional** - position ke hisaab se pass karte hain
- **Default** - default values with arguments
- **Spread** - spread operator se array ko expand karna

### Spread Arguments Example

```javascript
function test(a, b, c) {
  console.log(a); // 2
  console.log(b); // 3
  console.log(c); // 4
}
let arr = [2, 3, 4];
console.log(test(...arr)); // spread operator
```

---

## 📍 Arguments Object

```javascript
function sum() {
  console.log(arguments); // arguments object
  console.log(arguments[0]); // first argument -> 2
}
console.log(sum(2, 3, 4, 5, 6));
```

---

## 🏗️ Function Types & Concepts

### Classic Function

Pehla tarika jo functions likhe jaate hain

### Nested Function (Function within Function)

Function ke andar dusra function

### Scope Chain in JavaScript

Jaha bhi variable defined hoga waha se wo accessible hoga. Agar variable function ke andar defined hai to wo function ke bahar accessible nahi hoga.

---

## ⚡ Immediately Invoked Function Expression (IIFE)

```javascript
(function () {
  console.log("IIFE executed");
  var a = 10;
})();

// console.log(a);  // Error: a is not defined
// kyunki a IIFE ke andar accessible nahi hai
```

---

## 🎨 More on Functions in JavaScript

### 1️⃣ Arrow Function (Fat Arrow Function)

```javascript
() => {
  console.log("arrow function");
};
```

### 2️⃣ Anonymous Function

Function without a name

```javascript
let anonFunc = function () {
  console.log("anonymous function");
};
anonFunc();
```

### 3️⃣ Higher Order Function

ek function jo ki:

1. Return karde dusre function ko
2. Ya fir dusre function ko as a parameter le

```javascript
function higherOrderFunc(func) {
  func();
}
function callbackFunc() {
  console.log("callback function executed");
}
higherOrderFunc(callbackFunc);
```

### 4️⃣ Callback Function

Function jo dusre function ko pass hota hai as a parameter

### 5️⃣ First Class Function

Jaha jaha variable use hota hai waha waha function bhi use ho sakta hai

```javascript
let firstClassFunc = function () {
  console.log("first class function");
};
firstClassFunc(); // function as a value
```

**Uses:**

- Function as parameter
- Function as return value

### 6️⃣ Pure Function

- **Same Input = Same Output**
- Isme koi side effect nahi hota

### 7️⃣ Impure Function

- **Same Input = Different Output**
- Isme side effect ho sakta hai

---

## 🔍 Scope in JavaScript

### Types of Scope

- **Block Scope** - `{ }` ke andar accessible
- **Function Scope** - function ke andar accessible
- **Global Scope** - poori jaga accessible

---

## 🔗 Closures in JavaScript

Ek function hai jo return karta hai function, but returning function parrent function ka koi variable use karta hai.

```javascript
function outerFunction() {
  let outerVariable = "I am from outer function";
  function innerFunction() {
    console.log(outerVariable); // outer function variable access
  }
  return innerFunction;
}
let closureFunction = outerFunction();
closureFunction(); // I am from outer function
```

---

## 📐 Scoping Rules in JavaScript

Scoping rules follow the scope chain jo upar explain kiye gaye hain. Inner scope outer scope ke variables ko access kar sakta hai, lekin vice versa possible nahi hai.
