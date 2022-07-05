// REST AND SPREAD OPERATORS
function someFunc(arg1, ...restOfArgs) {
  //   console.log(arg1, arg2);
  console.log(restOfArgs);
}
someFunc("hello", "Pushkar", () => {}, 5);

const someObj = {
  otherName: "Pushkar",
  otherCar: "BMW",
};

const person = {
  name: "Pushkar",
  age: 19,
  hobby: "singing",
  ...someObj,
};
const { name, ...theRestOfPerson } = person;
console.log(name, theRestOfPerson);

const someArr = [1, 2, 4, 3, 6];
const anotherArr = [9, 6, 4];
const result = [...someArr, 45, 56, ...anotherArr];
const [first, second, ...restOfArr] = someArr;
console.log(second, restOfArr);

// const mergedObj = { ...someArr, ...someObj };
console.log(person);
console.log(result);
