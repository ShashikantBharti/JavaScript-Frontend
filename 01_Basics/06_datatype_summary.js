// Primitive Data Types or value type
// 1. String
// 2. Number
// 3. Boolean
// 4. null
// 5. undefined
// 6. BigInt
// 7. Symbol

const name = 'Shashikant'; // String

const score = 100; // Number
const scoreValue = 101.5; // Number

const isLoggedIn = true; // boolean

const temp = null; // null

let user; // undefined

const id = Symbol('123'); // Symbol
const anotherId = Symbol('123');
console.log(id === anotherId);

const bigNumber = 48948756243875697n; // BigInt
console.log(typeof bigNumber);
// Non-Primitive Data Types or Reference Type
// 1. Array
// 2. Objects
// 3. Functions

const heros = ['shaktiman', 'naagraj', 'doga', 'krish']; // Array
const userData = {
  name: 'Shashikant',
  age: 28,
  city: 'Lucknow',
}; // Object

const myFunc = function () {
  // Function
  console.log(1111);
};

console.log(typeof myFunc);

// =========================== //
// Type of Memory
// 1. Stack (Primitive Data Types)
// 2. Heap (Non-Primitive Data Types)

let username = 'shashikantBharti';

let anotherUser = username;
anotherUser = 'This is JS Course';

console.log(username);
console.log(anotherUser);

let userOne = {
  email: 'user@mail.com',
  name: 'Shashikant',
};

let userTwo = userOne;

console.log(userOne.email);
console.log(userTwo.email);

userTwo.email = 'Shashikant@gmail.com';
console.log(userOne.email);
