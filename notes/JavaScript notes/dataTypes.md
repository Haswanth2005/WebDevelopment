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
