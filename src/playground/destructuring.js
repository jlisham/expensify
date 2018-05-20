/**********OBJECTS************************************************* */

// const person = {
//   name: undefined,
//   age: 114,
//   location: {
//     city: "here",
//     temp: 114
//   }
// };

// const { name: dname = "anon", age } = person;
// const { temp: temperature } = person.location;

// console.log(`${dname} wishes it were ${temperature} degrees`);

// const book = {
//   title: "book title",
//   author: "author name",
//   pub: {
//     co: "penguin",
//     yr: 1975
//   }
// };

// const { co: pubName = "self" } = book.pub;
// console.log(pubName);

/**********ARRAYS************************************************* */

// const address = ["1234 5th Ave", "anytown", "NO", "33445"];
// const [str, city, state = "WI", zip] = address;

// console.log(`your adddress: ${str}; ${city}, ${state}  ${zip}`);

// console.log(
//   `your adddress: ${address[0]}; ${address[1]}, ${address[2]}  ${address[3]}`
// );

const avail = ["coffee", "1.00", "1.50", "2.00"];
const [item, sm, med, lrg] = avail;
const size = "med";
console.log(`${size} ${item} costs $${med}`);
