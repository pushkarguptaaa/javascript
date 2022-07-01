// JAVASCRIPT FUNDAMENTALS

var a = "hello";
a = "world";
console.log(a);

function myFun(message, name, val) {
  console.log(message, name, val);
  const val1 = name + " " + message;
  console.log(val1);
  return val1;
}
myFun("Hello", "Pushkar", 8);
const val1 = myFun("Hi", "Amit", 10);
console.log(val1);

const b = 3;
const c = 5;

(function (b, c) {
  const val = c * b;
  console.log(val);
})(b, c);

//  Recursion

let counter = 10;
function loop(val) {
  console.log(val);
  if (val < 1) {
    return;
  }
  const temp = val - 1;
  loop(temp);
}
loop(counter);

function loop2(val) {
  console.log(val);
  if (val > 0) {
    val--;
    loop2(val);
  }
  return;
}
const looper = loop2(10);
console.log(looper);
