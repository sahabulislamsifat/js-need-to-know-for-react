const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Result of promise => 1");
  }, 1000);
});
const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Result of promise => 2");
    // reject("Reject from two");
  }, 2000);
});
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Result of promise => 3");
  }, 3000);
});

console.log("Calling three async tasks.....");

// promiseOne.then((response) => {
//   console.log(response);
//   promiseTwo.then((response) => {
//     console.log(response);
//     promiseThree.then((response) => {
//       console.log(response);
//     });
//   });
// });

// Promise.all([promiseOne, promiseTwo, promiseThree])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((err) => console.log(err));

const getAllPromise = async () => {
  //   const response = Promise.all([promiseOne, promiseTwo, promiseThree]);
  try {
    // const response = await Promise.all([promiseOne, promiseTwo, promiseThree]);
    const [result1, result2, result3] = await Promise.all([
      promiseOne,
      promiseTwo,
      promiseThree,
    ]);
    // console.log(response);
    console.log(result1, result2, result3);
  } catch (err) {
    console.log(err, "Error Catch");
  }
};

getAllPromise();
