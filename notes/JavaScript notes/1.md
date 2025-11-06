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
