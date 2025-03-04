// const functionOne = (x, y, callBack) => {
//   console.log("This is Function One");
//   console.log(typeof callBack);
//   callBack(x, y);
// };

// const functionTwo = (x, y) => {
//   console.log("This is Function Two");
//   return x + y;
//   console.log(x + y);
// };

// functionOne(4, 8, functionTwo);
// console.log(functionTwo(4, 9));

// const giveName = (name, callBack) => {
//   setTimeout(() => {
//     callBack(name);
//   }, 3000);
// };

// const greeting = (name) => {
//   console.log(`Hello, ${name}...!`);
// };

// console.log("First line of code.");
// giveName("Sifat", greeting);
// console.log("Last line of code.");

// const showName = (name, callBack) => {
//   setTimeout(() => {
//     callBack(name);
//   }, 3000);
// };

// const passName = (name) => {
//   console.log(`Hello! I am ${name}...`);
// };

// showName("Sifat", passName);

const callBackFunction = (name, callBack) => {
  setTimeout(() => {
    callBack(name);
  }, 1000);
};

const passFunction = (name) => {
  console.log(`Hello There. I am ${name}....`);
};

callBackFunction("Sifat", passFunction);
