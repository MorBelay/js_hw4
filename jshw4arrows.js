//Task 1
// example: addExclamation("Hi") => "Hi!"
// const addExclamation = str => { /* ... */ };

// const addExclamation = str => str + "!";
// console.log(addExclamation("Hi")); // "Hi!"



//Task 2
// example: reverseWords("I love JS") => "JS love I"
// const reverseWords = sentence => { /* ... */ };

// const reverseWords = sentence => sentence.split(" ").reverse().join(" ");
// console.log(reverseWords("I love JS")); // "JS love I"



//Task 3
// example: squareAll([1, 2, 3]) => [1, 4, 9]
// const squareAll = arr => { /* ... */ };

// const squareAll = arr => arr.map(num => num * num);
// console.log(squareAll([1, 2, 3])); // [1, 4, 9]



//Task 4
// example: filterNames(["Dan", "Jonathan", "Eli"], 3) => ["Jonathan", "Eli"]
// const filterNames = (names, minLength) => { /* ... */ };

// const filterNames = (names, minLength) => names.filter(name => name.length > minLength);
// console.log(filterNames(["Dan", "Jonathan", "Eli"], 3)); // ["Jonathan", "Eli"]




//Task 5
// example: allPositive([1, 5, 8]) => true
// example: allPositive([3, -2, 0]) => false
// const allPositive = numbers => { /* ... */ };

const allPositive = numbers => numbers.every(num => num > 0);
console.log(allPositive([1, 5, 8]));     // true
console.log(allPositive([3, -2, 0]));    // false
