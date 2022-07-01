// STACK AND QUEUE EXAMPLES

const arr1 = [1, 2, 3, 4, 5];
arr1.forEach((val) => {
  console.log(val);
  console.log("sync");
});

function afun(myArr, callback) {
  myArr.forEach((el) => {
    setTimeout(callback, 1000, el);
  });
  myArr.forEach((el) => {
    setTimeout(callback, 0, `${el} -`);
  });
}

afun(arr1, (val) => {
  console.log(val);
  console.log("async");
});
console.log("test");

console.log("one");
setTimeout(() => {
  console.log("five");
}, 2000);
console.log("two");
setTimeout(() => {
  console.log("four");
}, 500);
console.log("three");

// JS CALLBACKS

function adder(a, b) {
  console.log("adder");
  return a + b;
}
function doubler(a, b) {
  console.log("doubler");
  return adder(a, b) * 2;
}
function output(a, b) {
  console.log(a, b);
  const dub = doubler(a, b);
  console.log(dub);
}
output(3, 5);
