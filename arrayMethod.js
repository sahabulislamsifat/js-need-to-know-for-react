// forEach, map, find, filter and reduce

// const numbers = [55, 34, 77, 89, 45];

// forEach No return any value

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// numbers.forEach((item) => {
//   console.log(item);
// });

// numbers.forEach((item) => console.log(item));

// const result = numbers.forEach((item) => item);

// console.log(result);

// map return value **
// const result = numbers.map((item) => item);
// const result = numbers.map((item) => {
//   return item * 2;
// });
// const result = numbers.map((item, index) => {
//   console.log("Item :", item, "Index :", index);
//   return item * 2;
// });

// console.log(result);
// console.log(numbers);

// Template String
// const numbers = [55, 34, 77, 89, 45];

// const sentence = `My numbers are ${numbers.forEach((number) => number)}`;
// const sentence = `My numbers are ${numbers.map((number) => number)}`;
// const sentence = `My numbers are ${numbers.map((number) => number).join("/")}`;

// console.log(sentence);

// FIND Method
// const numbers = [, 30, 44, 55, 34, 77, 89, 45];

// const result = numbers.find((number) => number < 50);
// const result = numbers.find((number) => number > 50);
// const result = numbers.find((number) => number > 500);

// console.log(result);

// FILTER Method
// const numbers = [, 30, 44, 55, 34, 77, 89, 45];

// const result = numbers.filter((number) => number > 50);
// const result = numbers.filter((number) => number < 50);
// const result = numbers.filter((number) => number > 500);

// console.log(result);

// REDUCE
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sum = 0;
// numbers.forEach((number) => (sum += number));

// console.log(sum);

// const result = numbers.reduce((previous, current) => previous + current, 0);
// const total = numbers.reduce((previous, current) => previous + current);

// console.log(total);

const arrayOfObject = [
  { obj: 1 },
  { obj: 2 },
  { obj: 3 },
  { obj: 4 },
  { obj: 5 },
];

const total = arrayOfObject.reduce(
  //   (previous, current) => previous + current.obj
  (previous, current) => previous + current.obj,
  0
);

console.log(total);
