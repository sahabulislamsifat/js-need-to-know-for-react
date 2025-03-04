//TYpe of Function

// function show() {
//   console.log("Normal Function");
// }

// Function = A block of code

// const show = () => {
//   console.log("Arrow Function...");
// };

// const showOne = () => {
//   return "This is a returned function.";
// };

// const showTow = (x) => {
//   console.log("Value :", x);
// };

// const showThree = (x) => {
//   return x * 2;
// };

// show();
// console.log(showOne());
// showTow(15);
// console.log("Returned Double", showThree(10));

const addArray = (numbers) => {
  if (!Array.isArray) {
    return " Invalid Array.";
  }
  let sum = 0;
  for (let item of numbers) {
    sum += item;
    console.log(sum);
  }
  return sum;
};

let x = [1, 2, 3, 4];

// console.log(addArray(x));
addArray(x);
