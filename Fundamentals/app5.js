// FUNCTION CLOSURE

function maker(val1) {
  return (val2) => {
    console.log(val1, val2);
    return val1 + val2;
  };
}
const fun1 = maker(5);
const fun2 = maker(25);

console.log(fun1(10));
console.log(fun1(25));
console.log(fun2(75));
