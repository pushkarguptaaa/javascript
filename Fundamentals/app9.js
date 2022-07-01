// IMPORTANT METHODS & MISCELLANIOUS TOPICS

// MATH METHOD

// console.log(Math.random());
// let random = Math.random() * 100;
// console.log(Math.floor(random));
// console.log(Math.ceil(random));

// DATE METHOD

// const newD = new Date();
// console.log(newD);
// const oldD = new Date(2021, 0, 1, 10, 36, 34);
// console.log(oldD);
// const isoDate = new Date("2022-10-08");
// console.log(isoDate);
// const zeroDay = new Date(100000000);
// console.log(zeroDay);
// zeroDay.setFullYear(2022);
// console.log(zeroDay.getTime());
// console.log(zeroDay.getDay());
// console.log(zeroDay.getFullYear());

// ASYNCHRONOUS JAVASCRIPT

// console.log(global);
// let a = "hello";
// let counter = 0;
// function timer(val) {
//   message(`Timer ran ${val} ${a}`);
// }

// function message(val) {
//   counter++;
//   console.log(`${counter}.- ${val}`);
// }
// for (let i = 5; i > 0; i--) {
//   setTimeout(timer, i * 1000, `Loop: ${i}`);
// }

// console.log("new val");
// a = "world";

// NODE GLOBAL TIMERS

// console.log(global);
// let counter = 0;
// console.log("first");

// setImmediate((val) => {
//   console.log(`immediate ${val}`);
// }, "Hello World");

// console.log("last");

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// function keepRunning() {
//   counter++;
//   if (counter > 5) {
//     clearInterval(int1);
//   }
//   console.log(`Running ${counter}`);
// }
// const int1 = setInterval(keepRunning, 1000);

// const int2 = setTimeout(() => {
//   console.log("5 sec timeout");
// }, 5000);

// const int3 = setTimeout(() => {
//   console.log("3 sec timeout");
//   clearTimeout(int2);
// }, 3000);

// PROMISES

// const pro1 = new Promise((resolve, reject) => {
//   const temp = 3;
//   setTimeout(() => {
//     reject("TIMED OUT!");
//   }, 1000);
//   setTimeout(() => {
//     resolve("HELLO!");
//   }, 500);
//   if (temp > 5) {
//     resolve("success");
//   } else {
//     reject("reject");
//   }
// });
// pro1.then(
//   (val) => {
//     console.log(`True: ${val}`);
//   },
//   (err) => {
//     console.log(`Error!!: ${err}`);
//   }
// );

// TRY AND CATCH DEBUGGING

// function tester(val) {
//   try {
//     if (val === undefined) throw "no value";
//     if (isNaN(val)) throw "not a number";
//     val = Number(val);
//   } catch (err) {
//     console.log(`There was an error ${err} = ${val}`);
//   } finally {
//     console.log(`Done ${val}`);
//   }
// }
// tester();
// tester("Hello");
// tester(100);

// JS ASYNC AND AWAIT

// let counter = 0;
// async function hello(mes) {
//   console.log(mes);
//   counter++;

//   let pro1 = new Promise((res, rej) => {
//     setTimeout(res("works"), 2000);
//   });
//   let result = await pro1;
//   return `${mes} ${counter} `;
// }

// function output(mes) {
//   counter++;
//   console.log(`${mes} ${counter}`);
// }

// hello("Hello World").then((val) => {
//   console.log(val);
// });

// for (let i = 0; i < 5; i++) {
//   output(`Loop ${i}`);
// }

// ASSIGNMENT 2

// const friends = [];
// const person1 = {
//   first: "Pushkar",
//   last: "Gupta",
// };
// const person2 = {
//   first: "Ram",
//   last: "Goel",
// };
// const person3 = {
//   first: "Rani",
//   last: "Mishra",
// };
// friends.push(person1);
// friends.push(person2);
// friends.push(person3);

// friends.forEach((person) => {
//   console.log(person.first + " " + person.last);
// });
// console.log(friends);
