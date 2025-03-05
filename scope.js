// Scope

// const x = 5;

// console.log(x);

// if (true) {
//   console.log(x);
// }

// const show = () => {
//   console.log(x);
// };

// show();

// let x = 5;
// const x = 10;

// if (true) {
//   let x = 10;
//   console.log(x);
// }

// let i = 0;

// while (i < 5) {
//   console.log(i);
//   i++;
// }

// const array = [1, 2, 3, 4, 5, 6, 7];

// for (let i = 1; i < array.length; i++) {
//   if (i == 5) {
//     continue;
//   }
//   console.log(array[i]);
// }

// let str = "Sifattttttt";

// console.log(str.indexOf("i", 3));

// const myObject = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// for (let item in myObject) {
//   console.log(myObject[item]);


// function getMenu() {
//   console.log("Burger, Pizza, Pasta");
// }

// getMenu()

// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 100);
// }

let count = 10;

let countdown = setInterval(() => {
  console.log(count);
  count--;

  if (count < 0) {
    clearInterval(countdown); // কাউন্টডাউন ০ হলে বন্ধ হবে
    console.log("Time's up!");
  }
}, 1000);
