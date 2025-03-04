// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// PROMISE = resolved / reject

// const promiseOne = new Promise((resolved, reject) => {
//   console.log("Promise is made.");
//   // resolved();
//   //   reject();
//   // const error = true;
//   const error = false;
//   // if (!error) {
//   //   resolved();
//   // } else {
//   //   reject();
//   // }
//   setTimeout(() => {
//     if (!error) {
//       resolved("promise is resolved...");
//     } else {
//       reject("opps..Error Happend...");
//     }
//   }, 3000);
// });

// promiseOne
//   .then((response) => {
//     console.log(response);

//     // console.log("This is response block.");
//   })
//   .catch((error) => {
//     console.log(error);

//     // console.log("This is error block.");
//   })
//   .finally(() => {
//     console.log("This is always run block.....");
//   });

const promiseOne = new Promise((resolved, reject) => {
  console.log("Promise is made.");
  // const error = true;
  const error = false;

  setTimeout(() => {
    if (!error) {
      resolved("promise is resolved...");
    } else {
      reject("opps..Error Happend...");
    }
  }, 3000);
});

// const getPromise = async () => {
//   // const response = promiseOne;
//   const response = await promiseOne;
//   console.log(response);
// };
const getPromise = async () => {
  // const response = promiseOne;
  try {
    const response = await promiseOne;
    console.log(response);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Its Finally RUn....");
  }
};

getPromise();
