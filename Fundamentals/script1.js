"use strict";
// let hasDriversLicense = false;
// const passTest = true;
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive");

// function logger() {
//     console.log("My name is Pushkar");
// }
// logger();
// logger();
// function fruitProcessor(apples, oranges) {
//     const juice = `juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }
// const fruitJuice = fruitProcessor(2, 7);
// console.log(fruitJuice);
// const appleJuice = fruitProcessor(3, 0);
// console.log(appleJuice);

// const now = 2022;
// const age1 = calcAge1(2002);
// function calcAge1(birthYear) {
//     return now - birthYear;
// }

// const calcAge2 = function (birthYear) {
//     return now - birthYear;
// }
// const age2 = calcAge2(2002);
// console.log(age1, age2);

// const calcAge3 = birthYear => now - birthYear;
// const age3 = calcAge3(1977);
// console.log(age3);
// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = now - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years.`
// }
// console.log(yearsUntilRetirement(2002, "Pushkar"));

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
//     return juice;
// }
// const fruitJuice = fruitProcessor(3, 4);
// console.log(fruitJuice);

// const ageCalc = function (birthYear) {
//     return 2022 - birthYear;
// }
// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = ageCalc(birthYear);
//     const retirement = 65 - age;
//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years.`);
//         return retirement;

//     } else {
//         console.log(`${firstName} has already retired!`);
//         return -1;
//     }

//     // return `${firstName} retires in ${retirement} years.`
// }
// console.log(yearsUntilRetirement(2002, "Pushkar"));
// console.log(yearsUntilRetirement(1940, "Raj"));

// const friends = ["Raj", "Arjun", "Ram"];
// console.log(friends);
// const years = new Array(2007, 2020, 1990);
// console.log(years);
// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// friends[2] = "Jai";
// console.log(friends);
// const firstName = "Pushkar";
// const pushkar = [firstName, "Gupta", 2021 - 2002, "Student", friends];
// console.log(pushkar);

// const calcAge = function (birthYear) {
//     return 2022 - birthYear;
// }
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[years.length - 1]);
// console.log(age1, age2);
// const ages = [calcAge(years[0]), calcAge(years[years.length - 1])];
// console.log(ages);

// const friends = ["Raj", "Arjun", "Ram"];
// friends.push("Jai");
// console.log(friends);
// friends.unshift("Mohan");
// console.log(friends);
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);
// friends.shift();
// console.log(friends);
// console.log(friends.indexOf("Raj"));
// console.log(friends.includes("Ram"));
// if (friends.includes("Arjun")) {
//     console.log("You have a friend called Arjun");
// }
// const pushkar = {
//     firstName: "Pushkar",
//     lastName: "Gupta",
//     age: 2022 - 2002,
//     job: "student",
//     friends: ["Raj", "Arjun", "Ram"]
// };
// console.log(pushkar);
// console.log(pushkar.firstName);
// console.log(pushkar["lastName"]);
// const nameKey = "Name";
// console.log(pushkar["first" + nameKey]);
// console.log(pushkar["last" + nameKey]);
// const interestedIn = prompt("What do you want to know about Pushkar? Choose between firstname, lastname, age, job and friends");
// // console.log(interestedIn);
// if (pushkar[interestedIn]) {
//     console.log(pushkar[interestedIn]);
// } else {
//     console.log("Wrong request! What do you want to know about Pushkar? Choose between firstname, lastname, age, job and friends");
// }
// pushkar.location = "India";
// pushkar["state"] = "Haryana";
// console.log(pushkar);
// console.log(`${pushkar.firstName} has ${pushkar.friends.length} friends, and his best friend is ${pushkar.friends[0]}`);

// const pushkar = {
//     firstName: "Pushkar",
//     lastName: "Gupta",
//     birtYear: 2002,
//     job: "student",
//     friends: ["Raj", "Arjun", "Ram"],
//     hasDriversLicense: true,
//     calcAge: function () {
//         this.age = 2022 - this.birtYear;
//         return this.age;
//     },
//     getSummary: function () {
//         return `${this.firstName} is a ${this.age} year old ${this.job} and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
//     }
// };
// console.log(pushkar.calcAge());
// console.log(pushkar.age);
// console.log(pushkar.getSummary());

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

// const pushkar = [
//     "Pushkar",
//     "Gupta",
//     2022 - 2002,
//     "student",
//     ["Raj", "Arjun", "Ram"]
// ];
// const types = [];
// for (let i = 0; i < pushkar.length; i++) {
//     console.log(pushkar[i], typeof (pushkar[i]));

// types[i] = typeof (pushkar[i]);
//     types.push(typeof (pushkar[i]));
// }
// console.log(types);

// const years = [1999, 2008, 1967, 1978,];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//     ages[i] = 2022 - years[i];
// }
// console.log(ages);

// for (let i = 0; i < pushkar.length; i++) {
//     if (typeof (pushkar[i]) !== "string") continue;
//     console.log(pushkar[i], typeof (pushkar[i]));
// }
// for (let i = 0; i < pushkar.length; i++) {
//     if (typeof (pushkar[i]) == "number") break;
//     console.log(pushkar[i], typeof (pushkar[i]));
// }

// const pushkar = [
//     "Pushkar",
//     "Gupta",
//     2022 - 2002,
//     "student",
//     ["Raj", "Arjun", "Ram"]
// ];
// for (let i = pushkar.length - 1; i >= 0; i--) {
//     console.log(pushkar[i]);
// }
// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`Starting exercise ${exercise}`);
//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Lifting weights repition ${rep}`);
//     }
// }

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }
// let rep = 1;
// while (rep <= 10) {
//     console.log(`Lifting weights repetition ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice != 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log(`Loop is about to end..`);
// }



