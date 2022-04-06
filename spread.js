const numbers = [23,45,99,65,211,34];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(23,99,65);
const maxInArray = Math.max(...numbers);
// console.log(max, maxInArray);

// numbers.push(55);
// console.log(numbers);

// const numbers2 = numbers;
// numbers.push(55);
// console.log(numbers2);

const numbers2 = [17, ...numbers, 88];
numbers.push(55);
console.log(numbers);
console.log(numbers2);