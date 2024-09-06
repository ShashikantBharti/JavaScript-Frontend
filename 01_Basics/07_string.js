const name = 'Shashikant';
const repoCount = 34;

// console.log(name[0]);

// console.log(
//   'Hello, My name is: ' + name + ' and My RepoCount is: ' + repoCount
// );

// console.log(`Hello, My name is: ${name} and My RepoCount is: ${repoCount}`);

// const myFavoriteGame = new String('God Of War ');
// console.log(myFavoriteGame);
// console.log(myFavoriteGame[0]);

// console.log(myFavoriteGame.length);
// console.log(myFavoriteGame.toUpperCase());
// console.log(myFavoriteGame.charAt(2));
// console.log(myFavoriteGame.indexOf('o'));

// Top String Methods:
const str = 'Shashikant Bharti is a programmer.';
// 1. length: returns length of the string
console.log(str.length);

// 2. chatAt(index): return the character at the spcific index
console.log(str.charAt(2));

// 3. charCodeAt(index): returns the Unicode (ASCII) value of the character at the specific index
console.log(str.charCodeAt(3));

// 4. concat(): joins two or more strings. Does not modify original string.
console.log(str.concat(' He works in Lucknow. '));

// 5. includes(substring): return true/false if string contains a specific substring.
console.log(str.includes('programmer'));

// 6. indexOf(substring): return index of the first occurrence of the substring or -1 if not found
console.log(str.indexOf('Bharti'));
console.log(str.indexOf('Delhi'));

// 7. lastIndexOf(substring): returns the index of the last occurrnece of the substring or -1 if it is not found.
console.log(str.lastIndexOf('a'));

// 8. slice(start, end): extract a substring and return as a new string, the end index is not includeded.
console.log(str.slice(0, 6));
console.log(str.slice(20, -6));

// 9. substring(start, end): similar to slice but does not support negative indices.
console.log(str.substring(0, 10));

// 10. toLowerCase(): convert the entire string to lowercase.
console.log(str.toLowerCase());

// 11. toupperCase(): convert the entire string to upper case.
console.log(str.toUpperCase());

// 12. trim(): removes whitespace from both ends.
const str1 = '   this is string   ';
console.log(str1);
console.log(str1.trim());

// 13. replace(searchValue, newValue): replaces a specified value in the string with new value. It does not modify original string and returns new string.
console.log(str.replace('programmer', 'developer'));
console.log(str);

// 14. split(seperator): it splits string into an array of substring based on given seperator.
console.log(str.split(' '));
console.log(str);

// 15. repeat(count): returns new string that repeats the original string a specified number times.
console.log('Hi '.repeat(4));

// 16. startsWith(substring): check if string starts with the specified substring, returning true and false.
console.log(str.startsWith('Shashikant'));

// 17. endsWith(substring): check if string ends with the specified substring, returning true and false.
console.log(str.endsWith('programmer.'));

// 18. padStart(targetLength, padString):  Padding is added to the start and pads current string with another string until the resulting string reaches the given length.
let amount = '5';
console.log(amount.padStart(3, '0'));

// 19. padEnd(targetLength, padString): similar to padStart but add padding to the end.
console.log(amount.padEnd(3, '0'));

// 20. match(): searches a string for a match against regular expression and returns the result as an array or null if no match found.

console.log(str.match(/sh/g));
