// const x = 10;
// const name = "Sifat";

// console.log(x);
// console.log(name);

// if (true) {
//   console.log("This is true value.....");
// }

const name = "Hello! Sifat...";
console.log(name, "Pizza Started making....");

const time = () => {
  setTimeout(() => {
    console.log("pizza one done");
  }, 2000);
  setTimeout(() => {
    console.log("pizza two done");
  }, 1000);
  setTimeout(() => {
    console.log("pizza three done");
  }, 5000);
  setTimeout(() => {
    console.log("pizza four done");
  }, 7000);
};

time();
