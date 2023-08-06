/* eslint-disable eqeqeq */
/* eslint-disable no-self-compare */
/* eslint-disable prefer-const */
// OPERATORS

// Arithmetic Operators

let x = 10;
let y = 3;

console.log(x + y); // 13
console.log(x - y); // 7
console.log(x * y); // 30
console.log(x / y); // 3.3333333333333335
console.log(x % y); // 1
console.log(x ** y); // 1000

// addition
// subtraction
// multiplication
// division
// remainder
// exponentiation

// Increment (++)
console.log(++x); // 11
console.log(x); // 11

// Decrement (--)
console.log(--x); // 10 (reduces x by 1)
console.log(x); // 10

// Assignment Operators

let a = 10;
// a++; -> a = a + 1;

a += 5;
// a = a + 5;

a *= 3;
// a = a * 3;
console.log(a); // 45

// Comparison Operators
let b = 1;

console.log(b > 0); // true
console.log(b >= 1); // true
console.log(b < 1); // false
console.log(b <= 1); // true

// Equality Operators

// Strict Equality (Type + Value) - best practice
console.log(1 === 1); // true
console.log("1" === 1); // false

// Loose Equality (Value) - will only check if value is equal.
console.log(1 == 1); // true
console.log("1" == 1); // true

// Boolean Operator
console.log(true == 1); // true

// Ternary Operator

let points = 110;
let type = points > 100 ? "gold" : "silver";
console.log(type);
// If points are greater than 100, type is gold, else type is silver.

// - ? = if
// - : = else

// Logical Operators

// 3 types of logical operators in JavaScript.
// Logical AND (&&)
// Logical OR (||)
// Logical NOT (!)

let hasSon = true;
let hasDaughter = false;
let isDad = hasSon || hasDaughter;
console.log(isDad); // true

let highIncome = false;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
let applicationRefused = !eligibleForLoan;
console.log("Application Refused:", applicationRefused); // false
console.log("Eligible:", eligibleForLoan); // true

let flowerA = "red";
let flowerB = "blue";

let flowerC = flowerA;
flowerA = flowerB;
flowerB = flowerC;

console.log(flowerA); // red
console.log(flowerB); // blue
