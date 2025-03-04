// Object Spreading

const object = {
  name: "Sahabul Islam Sifat",
  age: 22,
  address: "Rangpur, Bangladesh",
  nested: {
    profession: "Student",
  },
};

// const objectTwo = object;
// const objectTwo = { ...object };

// objectTwo.phone = "01632165523";

// console.log(object);
// console.log(objectTwo);

// OBJECT Destructuring

// const { name } = object;
// const { name: myName } = object;

// const { name, ...rest } = object;

const { nested } = object;

// console.log(name);
// console.log(myName);

// console.log(name, rest);

console.log(nested.profession);
