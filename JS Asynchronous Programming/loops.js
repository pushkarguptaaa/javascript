// CALLS EVENT LOOPS JOB FUNCTION

console.log(1);
function test1() {
  return test1();
}
// test1();
console.log(2);

const one = () => console.log("one");
const two = () => console.log("two");
const test2 = () => {
  console.log("three");
  one();
  two();
};
const test3 = () => {
  console.log("three");
  setTimeout(one, 0);
  two();
};
test2();
test3();

// EVENT LOOP EXAMPLE RECURSIVE

let test4 = function test5(i) {
  console.log(i);
  if (i < 5) {
    test5(i + 1);
  }
};
test4(0);
// console.clear();

(() => {
  console.log("run right away");
})();
setTimeout(() => {
  console.log("I ran after 1 sec");
}, 0);
