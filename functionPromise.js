// const functionPromise = () => {
//   return new Promise((resolved, reject) => {
//     console.log("Promise is made.");
//     // const error = true;
//     const error = false;

//     setTimeout(() => {
//       if (!error) {
//         resolved("promise is resolved...");
//       } else {
//         reject("opps..Error Happend...");
//       }
//     }, 2000);
//   });
// };
const functionPromise = (name) => {
  return new Promise((resolved, reject) => {
    // console.log("Promise is made.");
    console.log(`Hello ${name} your promise is made`);

    // const error = true;
    const error = false;

    setTimeout(() => {
      if (!error) {
        // resolved("promise is resolved...");
        resolved(`${name} your promise is resolved...`);
      } else {
        // reject("opps..Error Happend...");
        reject(`opps. ${name}.Error Happend...`);
      }
    }, 2000);
  });
};

// functionPromise()
//   .then((res) => console.log(res))
//   .then((err) => console.log(err));
functionPromise("SIfat")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
