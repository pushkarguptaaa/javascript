"use strict";
// VALUES AND VARIABLES

// const continent = "Asia";
// const country = "India";
// const populationCountry = 1380000000;
// console.log(continent);
// console.log(country);
// console.log(populationCountry);

// DATA TYPES

// const isIsland = true;
// const language = "Hindi";
// console.log(typeof isIsland);
// console.log(typeof populationCountry);
// console.log(typeof language);
// console.log(language);

// BASIC OPERATORS

// let populationCountryHalf = populationCountry / 2;
// console.log(populationCountryHalf);
// populationCountry++;
// console.log(populationCountry);
// let populationFinland = 6000000;
// console.log(populationCountry >= populationFinland);
// const populationComparison = populationCountry >= populationFinland;
// let populationAverage = 33000000;
// console.log(populationCountry <= populationAverage);
// const populationComparison2 = populationCountry <= populationAverage;
// let description = "India is in Asia and its 1.38 billion people speak hindi";
// console.log(description);

// CODING CHALLENGE 1 and 2

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
// const bmiMark = massMark / (heightMark ** 2);
// const bmiJohn = massJohn / (heightJohn ** 2);
// console.log(bmiMark, bmiJohn);
// const markHigherBmi = bmiMark > bmiJohn;
// console.log(markHigherBmi);
// if (bmiMark > bmiJohn) {
//     console.log(`Mark's BMI (${bmiMark}) is higher than John's BMI (${(bmiJohn)})`)
// } else {
//     console.log(`Mark's BMI (${bmiMark}) is lower than John's BMI (${(bmiJohn)})`)
// }

// STRINGS AND TEMPLATE LITERALS

// const description1 = `${country} is in ${continent} and its ${populationCountry} people speak ${language}.`;
// console.log(description1);

// TAKING DECISIONS: IF/ELSE STATEMENTS

// if (populationCountry > 33000000) {
//     console.log(`${country}'s population is above average`)
// } else {
//     let populationBelowAvg = 33000000 - populationCountry;
//     console.log(`${country}'s population is ${populationBelowAvg} below average`)
// }

// TYPE CONVERSION AND COERCION

// console.log('9' - '5');
// console.log('19' - '13' + '17');
// console.log('19' - '13' + 17);
// console.log('123' < 57);
// console.log(5 + 6 + '4' + 9 - 4 - 2);

// EQUALITY OPERATORS (=== & ==)

// const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));
// if (numNeighbours === 1) {
//     console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//     console.log("More than 1 border");
// } else {
//     console.log("No borders");
// }

// BOOLEAN LOGIC & LOGICAL OPERATORS

// const preferredLanguage = "English";
// const preferredPopulation = populationCountry < 50000000;
// const preferredCountry = preferredLanguage && preferredPopulation && !isIsland;
// if (preferredCountry) {
//     console.log("You should live in India")
// } else {
//     console.log("India does not meet your criteria");
// }

// CODING CHALLENGE 3

// const dolphinScore1 = 96;
// const dolphinScore2 = 108;
// const dolphinScore3 = 89;
// const koalaScore1 = 88;
// const koalaScore2 = 91;
// const koalaScore3 = 110;
// const scoreAvgDolphin = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;
// const scoreAvgKoala = (koalaScore1 + koalaScore2 + koalaScore3) / 3;
// const minScoreAvg = 100;
// if (scoreAvgDolphin > scoreAvgKoala && scoreAvgDolphin > minScoreAvg) {
//     console.log("Dolphin Wins!");
// } else if (scoreAvgKoala > scoreAvgDolphin && scoreAvgKoala > minScoreAvg) {
//     console.log("Koala Wins!");

// } else if (scoreAvgDolphin === scoreAvgKoala && scoreAvgDolphin >= minScoreAvg && scoreAvgKoala >= minScoreAvg) {
//     console.log("Match is a draw");
// } else {
//     console.log("No one wins the trophy!");
// }

// THE SWITCH STATEMENT

// const language1 = "chinese";
// switch (language1) {
//     case "chinese":
//     case "mandarin":
//         console.log("MOST number of native speakers!");
//         break;
//     case "spanish":
//         console.log("2nd place in number of native speakers");
//         break;
//     case "english":
//         console.log("3rd place");
//         break;
//     case "hindi":
//         console.log("Number 4");
//         break;
//     default:
//         console.log("Great language too :D");

// }

// THE CONDITIONAL(TERNARY) OPERATOR

// populationCountry > 33000000 ? (console.log("India's population is above average")) : (console.log("India's  population is below average"));

// CODING CHALLENGE 4 (TIP CALCULATOR)

// const billValue = 40;
// const tip = Number(50 < billValue < 300 ? (0.15 * billValue) : (0.20 * billValue));
// const totalValue = billValue + tip;
// console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value was ${totalValue}`);

// FUNCTIONS

// function describeCountry(country, population, capitalCity) {
//     const counryInfo = `${country} has ${population} million people and it's capital city is ${capitalCity}`;
//     return counryInfo;

// }
// const india = describeCountry("India", 1390, "Delhi");
// console.log(india);

// FUNCTION DECLARATIONS VS EXPRESSIONS

// const worldPopulation = 7900;
// function percentageOfWorld1(population) {
//     return (population / worldPopulation) * 100;
// }
// const populationpercChina = percentageOfWorld1(1441);

// const percentageOfWorld2 = function (population) {
//     return (population / worldPopulation) * 100;
// }
// const populationpercChina1 = percentageOfWorld2(1441);
// console.log(populationpercChina, populationpercChina1);

// ARROW FUNCTIONS

// const percentageOfWorld3 = population => (population / worldPopulation) * 100;
// const populationpercChina2 = percentageOfWorld3(1441);
// console.log(populationpercChina2);

// FUNCTIONS CALLING OTHER FUNCTIONS

// const describePopulation = function (country, population) {
//     return `${country} has ${population} million people which is about ${percentageOfWorld1(1441)}% of the world`;
// }
// console.log(describePopulation("China", 1441));

// CODING CHALLENGE 5

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);
// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas * 2) {
//         return `Dolphins win (${avgDolphins} vs ${avgKoalas})`;
//     } else if (avgKoalas >= avgDolphins * 2) {
//         return `Koalas win (${avgKoalas} vs ${avgDolphins})`;
//     } else {
//         return `No team wins!`;
//     }
// }
// console.log(checkWinner());

// INTRODUCTION TO ARRAYS

// const populations = [100, 110, 12, 1300];
// console.log(populations.length === 4);
// const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
// console.log(percentages);

// BASIC ARRAY OPERATIONS

// const neighbours = ["China", "Nepal", "Bhutan"];
// neighbours.push("Utopia");
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);
// if (!(neighbours.includes("Germany"))) {
//     console.log("Probably not a central European country :D");
// }
// console.log(neighbours.indexOf("Bhutan"));
// neighbours[2] = "Bangladesh";
// console.log(neighbours);

// CODING CHALLENGE 6

// const calcTip = function (billValue) {
//     if (50 < billValue < 300) {
//         return 0.15 * billValue;
//     } else {
//         return 0.20 * billValue;
//     }
// }
// console.log(calcTip(100));
// const bills = [125, 555, 44];
// console.log(bills);
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

// INTRODUCTION TO OBJECTS

// const myCountry = {
//     country: "India",
//     capital: "Delhi",
//     language: "Hindi",
//     population: 1380,
//     neighbours: ["China", "Nepal", "Bhutan"],
//     describe: function () {
//         return `${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
//     },
//     checkIsland: function () {
//         return this.isIsland = this.neighbours.length === 0 ? true : false;
//     }
// };

// DOT VS BRACKET NOTATION

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);
// myCountry.population += 2;
// myCountry["population"] -= 2;
// console.log(myCountry);

// Object Methods

// console.log(myCountry.describe());
// console.log(myCountry.checkIsland());

// CODING CHALLENGE 7

// const mark = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,
//     calcBmi: function () {
//         this.bmi = this.mass / (this.height ** 2);
//         return this.bmi;
//     }
// };
// const john = {
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,
//     calcBmi: function () {
//         this.bmi = this.mass / (this.height ** 2);
//         return this.bmi;
//     }
// };
// console.log(`${mark.fullName}'s BMI(${mark.calcBmi()}) is ${mark.bmi > john.bmi ? "higher" : "lower"} than ${john.fullName}'s BMI(${john.calcBmi()})`);

// ITERATION: THE FOR LOOP

// for (let voter = 1; voter <= 5; voter++) {
//     console.log(`Voter number ${voter} is voting`);
// }

// LOOPING ARRAYS, BREAKING & CONTINUING

// const populations = [100, 110, 12, 1300];
// const percentages2 = [];
// for (let i = 0; i < populations.length; i++) {
//     percentages2.push(percentageOfWorld2(populations[i]));
// }
// console.log(percentages2);
// console.log(populations.length === percentages2.length);

// LOOPING BACKWARDS AND LOOPS IN LOOPS

// const listOfNeighbours = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Norway", "Sweden", "Russia"],
// ];
// for (let i = 0; i < listOfNeighbours.length; i++) {
//   for (let j = 0; j < listOfNeighbours[i].length; j++) {
//     console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
//   }
// }

// THE WHILE LOOP

// const percentages3 = [];
// let i = 0;
// while (i < populations.length) {
//     percentages3.push(percentageOfWorld2(populations[i]));
//     i++;
// }
// console.log(percentages3);

// CODING CHALLENGE 8

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];
// for (i = 0; i < bills.length; i++) {
//     tips.push(calcTip(bills[i]));
//     totals.push(bills[i] + tips[i]);
// }
// console.log(tips);
// console.log(totals);
