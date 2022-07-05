// ARRAY.REDUCE METHOD

// const hello = [7, 6, 9, 4, 5];
// const result = hello.reduce(function (acc, currentVal) {
//   console.log(acc, currentVal);
//   return acc + currentVal;
// }, 0);
// console.log(result);

const hello = [7, 6, 9, 4, 5];
const result = hello.reduce(function (acc, currentVal, currentIdx) {
  const mappedCurrentElement = {};
  mappedCurrentElement[currentIdx] = currentVal;
  return Object.assign(acc, mappedCurrentElement);
}, {});
console.log(result);
